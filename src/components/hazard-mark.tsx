import { cn } from "@/lib/utils";

/**
 * A hazard glyph: a solid Alarm Red square with a white symbol inset, zero
 * padding around the mark. The spec's attention marker — used inline as a
 * section flag, and scattered at fixed orbital radii around the radar field.
 *
 * The symbols are drawn here rather than pulled from an icon set because they
 * only ever appear at 16–24px. At that size a detailed glyph turns to noise, so
 * each one is reduced to the fewest bold shapes that still read: the trefoil is
 * three triangles, the skull punches its eye sockets through with even-odd fill
 * so the red shows through rather than needing a second colour.
 */
export type HazardSymbol = "radiation" | "biohazard" | "fire" | "skull";

// Base stops short of the hub so a gap of black shows between them —
// overlapping, the three blades and the centre fuse into one blob at 20px.
const BLADE = "M12 1.4 17.6 8 6.4 8Z";

const SYMBOLS: Record<HazardSymbol, React.ReactNode> = {
  radiation: (
    <>
      <circle cx='12' cy='12' r='3' />
      <path d={BLADE} />
      <path d={BLADE} transform='rotate(120 12 12)' />
      <path d={BLADE} transform='rotate(240 12 12)' />
    </>
  ),
  biohazard: (
    <>
      <circle cx='12' cy='12' r='2.2' />
      <g fill='none' stroke='#ffffff' strokeWidth='2'>
        <circle cx='12' cy='6.6' r='4' />
        <circle cx='7.3' cy='15' r='4' />
        <circle cx='16.7' cy='15' r='4' />
      </g>
    </>
  ),
  fire: (
    <path d='M12.9 1.8c3.4 3.2 5.9 6.3 5.9 9.9a6.8 6.8 0 0 1-13.6 0c0-2.2 1-4.1 2.5-5.7.1 1.5.8 2.5 1.9 2.9-.8-2.9.4-5.4 3.3-7.1Z' />
  ),
  skull: (
    <path
      fillRule='evenodd'
      d='M12 2.3c-4.3 0-7.4 3-7.4 6.9 0 2.1 1 3.8 2.3 4.9v2.5c0 .9.7 1.6 1.6 1.6h7c.9 0 1.6-.7 1.6-1.6v-2.5c1.3-1.1 2.3-2.8 2.3-4.9 0-3.9-3.1-6.9-7.4-6.9ZM8.9 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6.2 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-3.9 9.7v3.9h-1.7v-3.9Zm3.1 0v3.9h-1.7v-3.9Z'
    />
  ),
};

export default function HazardMark({
  symbol,
  size = 20,
  className,
  label,
}: {
  symbol: HazardSymbol;
  size?: number;
  className?: string;
  /** Omit for decoration; supply only when the mark carries meaning. */
  label?: string;
}) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-alarm-red",
        className
      )}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox='0 0 24 24'
        fill='#ffffff'
        className='h-full w-full'
        aria-hidden
      >
        {SYMBOLS[symbol]}
      </svg>
    </span>
  );
}
