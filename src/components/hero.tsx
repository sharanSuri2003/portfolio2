import RadarField from "@/components/radar-field";
import HazardMark, { type HazardSymbol } from "@/components/hazard-mark";
import Reveal from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * The poster. Full-bleed black, radar rings sweeping out from centre, and the
 * display headline stacked in Spektra with the leading crushed to 0.82 so the
 * lines touch.
 *
 * The index leads with the name as its display line — that is the page where
 * the person is the subject, and there it out-sizes everything else on the
 * site. Section pages put their own title in the display slot and carry the
 * name in the eyebrow above it, because on those pages the subject is the work.
 *
 * Either way the eyebrow is the smaller of the two; whichever string sits in
 * `lines` is the thing the page is about.
 *
 * The load is orchestrated rather than simultaneous: rings sweep first, then
 * the eyebrow, then the name cascades line by line, then the supporting prose
 * and the call to action. Each step overlaps the one before it, so it reads as
 * a single settling motion instead of five separate animations.
 */

// Fixed orbital radii, in percentages of the hero box. Decorative only — these
// are scattered, not aligned to a grid, and they never carry meaning.
const ORBIT: { symbol: HazardSymbol; top: string; left: string }[] = [
  { symbol: "radiation", top: "18%", left: "12%" },
  { symbol: "fire", top: "30%", left: "84%" },
  { symbol: "biohazard", top: "68%", left: "8%" },
  { symbol: "skull", top: "76%", left: "88%" },
  { symbol: "fire", top: "12%", left: "62%" },
  { symbol: "radiation", top: "88%", left: "26%" },
];

export default function Hero({
  eyebrow,
  lines,
  children,
  className,
}: {
  /** The page label. Deliberately small — it never competes with the name. */
  eyebrow: string;
  lines: string[];
  children?: React.ReactNode;
  className?: string;
}) {
  const HEADLINE_START = 320;
  const HEADLINE_STEP = 130;
  const tail = HEADLINE_START + lines.length * HEADLINE_STEP;

  return (
    <section
      className={cn(
        "relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-20 pb-80 pt-100",
        className
      )}
    >
      <RadarField animate delay={0} />

      {/* Hazard glyphs orbiting the radar. Hidden below md — on a phone the
          orbit collapses onto the headline instead of framing it. */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 hidden md:block'
      >
        {ORBIT.map((mark, index) => (
          <span
            key={`${mark.symbol}-${index}`}
            className='rise-in absolute'
            style={
              {
                top: mark.top,
                left: mark.left,
                "--delay": `${560 + index * 60}ms`,
              } as React.CSSProperties
            }
          >
            <HazardMark symbol={mark.symbol} size={20} />
          </span>
        ))}
      </div>

      <div className='relative z-10 flex w-full flex-col items-center'>
        {/* The flex sits inside the clip, not on it — `.reveal-line` is the
            block that masks, and its single child is what rises. */}
        <Reveal
          delay={120}
          className='text-caption font-extrabold uppercase tracking-[0.14em] text-bone-cream'
        >
          <span className='flex items-center justify-center gap-8'>
            <HazardMark symbol='radiation' size={14} />
            {eyebrow}
          </span>
        </Reveal>

        <h1 className='display-type mt-20 text-center text-display text-bone-cream'>
          {lines.map((line, index) => (
            <Reveal key={line} delay={HEADLINE_START + index * HEADLINE_STEP}>
              {line}
            </Reveal>
          ))}
        </h1>

        {children ? (
          <div
            className='rise-in mt-40 flex w-full flex-col items-center'
            style={{ "--delay": `${tail}ms` } as React.CSSProperties}
          >
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
