"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * "Get in touch" opens this instead of firing a mailto at the OS. The address
 * has to be visible, with a way to copy it and a way to hand it to a mail app.
 *
 * The panel is a sticker card: 40px radius, 1px black border, cream paper,
 * no shadow. It fades in. Focus stays inside until it closes, then returns
 * to the trigger.
 */
export default function EmailDialog({
  children,
  className,
}: {
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
      // Clipboard can be blocked; the address is on screen either way.
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

      {mounted
        ? createPortal(
            <div
              aria-hidden={!open}
              className={cn(
                "fixed inset-0 z-[80] flex items-center justify-center px-16",
                "transition-opacity duration-150 ease-[var(--ease-out)]",
                open ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            >
              <button
                type='button'
                tabIndex={-1}
                aria-label='Close'
                onClick={close}
                className='absolute inset-0 bg-void-black'
              />

              <div
                ref={panel}
                role='dialog'
                aria-modal='true'
                aria-label='Email address'
                className='relative flex w-full max-w-[440px] flex-col items-start rounded-cards-elevated border border-void-black bg-bone-cream p-24 text-void-black'
              >
                <p className='eyebrow'>Direct line</p>
                <p className='mt-16 text-heading-sm font-bold tracking-[-0.01em]'>
                  {site.email.split("@")[0]}
                  <wbr />@{site.email.split("@")[1]}
                </p>
                <div className='mt-24 flex flex-wrap gap-8'>
                  <button type='button' onClick={copy} className='pill'>
                    {copied ? "Copied" : "Copy address"}
                  </button>
                  <a href={`mailto:${site.email}`} className='pill pill-outline'>
                    Open mail app
                  </a>
                </div>
                <button
                  type='button'
                  onClick={close}
                  className='eyebrow mt-24 underline underline-offset-4'
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
