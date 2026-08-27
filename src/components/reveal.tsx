import { cn } from "@/lib/utils";

/**
 * One masked line reveal. The outer span is the clip; the inner span rises into
 * it. Give sibling Reveals increasing `delay` values to stagger them into a
 * cascade — that pairing (stagger of reveals, on ease-out) is the hero's whole
 * load-in.
 *
 * Pure CSS, so this stays a server component and the motion runs off the main
 * thread while the rest of the document is still painting.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  /** Milliseconds before this line starts. */
  delay?: number;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "p";
}) {
  return (
    <Tag className={cn("reveal-line", className)}>
      <span style={{ "--delay": `${delay}ms` } as React.CSSProperties}>
        {children}
      </span>
    </Tag>
  );
}
