"use client";

import { useCallback, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Reveals its children the first time they scroll into view.
 *
 * A deliberate reversal: an earlier pass rejected scroll reveals on prose,
 * because copy the reader is trying to read should not move for style. The
 * page that produced was correct and completely inert — it read as a document,
 * not a site. This is the compromise that keeps both: the motion is tiny
 * (12px and an opacity), fires once, and never gates interaction, so the page
 * acquires a pulse without asking the reader to wait for a paragraph.
 *
 * `once` is load-bearing. A reveal that replays every time it re-enters the
 * viewport turns scrolling back up into a slideshow.
 */
export default function InView({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  /** Milliseconds. Stagger siblings 60–80ms apart; more reads as slow. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "header" | "p";
}) {
  const [shown, setShown] = useState(false);
  const settled = useRef(false);

  const attach = useCallback((element: HTMLElement | null) => {
    if (!element || settled.current) return;

    // Fires slightly before the element is fully on screen, so the motion has
    // finished by the time the reader's eye actually arrives at it.
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        settled.current = true;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 }
    );

    observer.observe(element);
  }, []);

  return (
    <Tag
      ref={attach as never}
      className={cn("in-view", shown && "is-shown", className)}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
