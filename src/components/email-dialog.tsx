"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import HazardMark from "@/components/hazard-mark";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * "Get in touch" opens this instead of firing a mailto: straight at the OS.
 * A mailto is a leap of faith — it either launches a client the visitor doesn't
 * use or does nothing at all, and either way the address never becomes visible.
 * Showing the address and offering to copy it keeps the choice with the reader.
 *
 * Motion, by the framework:
 *  - Frequency is occasional, so a standard entrance is affordable.
 *  - Purpose is spatial: the panel has to arrive from somewhere, or content
 *    teleports over the page.
 *  - Entering, so ease-out; 200ms, inside the modal budget.
 *  - It scales from 0.96, never 0 — nothing in the world appears from nothing —
 *    and keeps transform-origin at centre, because a modal is not anchored to
 *    its trigger the way a popover is.
 *
 * Portalled to <body> rather than rendered in place. `.page-enter` animates
 * opacity, and an element with a filling animation establishes its own stacking
 * context — so a z-index set inside it is scoped to that context and loses to
 * the fixed nav at the root no matter how high it goes.
 */
export default function EmailDialog({
  children,
  className,
}: {
  /** The trigger's label. */
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const copyTimer = useRef<number | undefined>(undefined);

  const close = useCallback(() => {
    setOpen(false);
    // Focus goes back where it came from, or the reader is dumped at the top
    // of the document with no idea what just happened.
    trigger.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key !== "Tab") return;

      // Keep tabbing inside the panel while it owns the screen.
      const focusable = panel.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    panel.current?.querySelector<HTMLElement>("button, a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  useEffect(() => {
    setMounted(true);
    return () => window.clearTimeout(copyTimer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked outright; the address is on screen either way.
    }
  };

  return (
    <>
      <button
        ref={trigger}
        type='button'
        onClick={() => setOpen(true)}
        className={cn("pill pill-outline", className)}
      >
        {children}
      </button>

      {/* Rendered always, toggled with opacity — a conditional mount would give
          the panel no exit at all, so it would vanish rather than leave. */}
      {mounted
        ? createPortal(
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-60 flex items-center justify-center px-20",
          "transition-opacity duration-200 ease-[var(--ease-out)]",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {/* Flat black scrim. No blur, no gradient — the page simply goes out. */}
        <button
          type='button'
          tabIndex={-1}
          aria-label='Close'
          onClick={close}
          className='absolute inset-0 bg-void-black/85'
        />

        <div
          ref={panel}
          role='dialog'
          aria-modal='true'
          aria-label='Email address'
          className={cn(
            "relative flex w-full max-w-[520px] flex-col items-center",
            "rounded-[48px] bg-bone-cream px-30 py-40 text-void-black",
            "transition-transform duration-200 ease-[var(--ease-out)]",
            open ? "scale-100" : "scale-[0.96]"
          )}
        >
          <p className='flex items-center justify-center gap-8'>
            <HazardMark symbol='fire' size={14} />
            <span className='text-caption font-extrabold uppercase tracking-[0.14em]'>
              Direct line
            </span>
          </p>

          <p className='display-type mt-15 text-center text-heading break-all'>
            {site.email}
          </p>

          <div className='mt-30 flex flex-wrap items-center justify-center gap-12'>
            <button
              type='button'
              onClick={copy}
              className='pill pill-compact pill-ink'
            >
              {copied ? "Copied" : "Copy address"}
            </button>

            <a
              href={`mailto:${site.email}`}
              className='pill pill-compact pill-ink-outline'
            >
              Open mail app
            </a>
          </div>

          <button
            type='button'
            onClick={close}
            className='press mt-30 text-caption font-extrabold uppercase tracking-[0.14em] underline underline-offset-4'
          >
            Close
          </button>
        </div>
      </div>,
            document.body
          )
        : null}
    </>
  );
}
