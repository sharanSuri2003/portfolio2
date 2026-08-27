import { cn } from "@/lib/utils";

/**
 * The concentric ring motif that sits behind the hero — four to six Alarm Red
 * rings radiating from centre, alternating solid and 2px dashed, fading as they
 * travel outward. Purely atmospheric; it carries no information and takes no
 * input, so it is hidden from assistive tech entirely.
 *
 * Rings are sized in vmin so the field stays circular and keeps radiating past
 * the viewport edge on any aspect ratio.
 */
// `inner` rings are hidden below md. Ring diameters are vmin-based, so on a
// phone the smallest two land exactly where the prose sits and draw dashed red
// lines straight through the copy. On a wide viewport they clear it.
const RINGS = [
  { size: 34, dashed: false, opacity: 1, inner: true },
  { size: 52, dashed: true, opacity: 0.8, inner: true },
  { size: 72, dashed: false, opacity: 0.62, inner: false },
  { size: 96, dashed: true, opacity: 0.46, inner: false },
  { size: 124, dashed: false, opacity: 0.32, inner: false },
  { size: 158, dashed: true, opacity: 0.2, inner: false },
];

export default function RadarField({
  className,
  /** Sweep the rings outward on load, staggered from the centre ring out. */
  animate = false,
  delay = 0,
}: {
  className?: string;
  animate?: boolean;
  delay?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        // On a phone the content spans the full width, so every ring crosses
        // the copy no matter how it is sized. Dropping the whole field back
        // keeps it atmospheric instead of letting dashed red lines cut through
        // 16px prose.
        "opacity-40 md:opacity-100",
        className
      )}
    >
      {RINGS.map((ring, index) => (
        <span
          key={ring.size}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-alarm-red",
            ring.dashed ? "border-2 border-dashed" : "border",
            ring.inner && "hidden md:block",
            animate && "ring-in"
          )}
          style={
            {
              width: `${ring.size}vmin`,
              height: `${ring.size}vmin`,
              opacity: ring.opacity,
              "--delay": `${delay + index * 70}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
