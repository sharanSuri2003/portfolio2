import { cn } from "@/lib/utils";

/**
 * A hand-cut sticker. Four fills, all from the existing palette, 20px radius,
 * a 1px outline. Glyphs are the fewest bold shapes that still read as the
 * object. They sit rotated, off the grid, and never carry a label. On the
 * black sheet the outline flips to cream, whatever the fill.
 */

export type StickerKind = "rocket" | "coin" | "wallet" | "check";
export type StickerFill = "red" | "cream" | "taupe" | "black";

const fillClass: Record<StickerFill, string> = {
  red: "bg-alarm-red text-void-black border-void-black",
  cream: "bg-bone-cream text-void-black border-void-black",
  taupe: "bg-ash-taupe text-void-black border-void-black",
  black: "bg-void-black text-bone-cream border-bone-cream",
};

function Glyph({ kind }: { kind: StickerKind }) {
  if (kind === "rocket") {
    return (
      <svg viewBox='0 0 48 48' className='h-[58%] w-[58%]' aria-hidden>
        <path
          fill='currentColor'
          d='M24 4c6 6 8 14 8 20 0 2-2 6-2 6h-4s2-4 2-6c0-4-1.2-10-4-16zm0 0c-6 6-8 14-8 20 0 2 2 6 2 6h4s-2-4-2-6c0-4 1.2-10 4-16z'
        />
        <path fill='currentColor' d='M16 30h16l4 8H12l4-8z' />
        <circle cx='24' cy='22' r='3' fill='none' stroke='currentColor' strokeWidth='2' />
        <path fill='currentColor' d='M20 38h8l-1 6h-6l-1-6z' />
      </svg>
    );
  }

  if (kind === "coin") {
    return (
      <svg viewBox='0 0 48 48' className='h-[62%] w-[62%]' aria-hidden>
        <circle cx='24' cy='24' r='14' fill='none' stroke='currentColor' strokeWidth='3' />
        <circle cx='24' cy='24' r='8' fill='none' stroke='currentColor' strokeWidth='2' />
        <path
          d='M24 16v16M20 20c1.2-1.4 2.4-2 4-2 2.4 0 4 1.2 4 3s-1.6 2.6-4 3-4 1.4-4 3 1.6 3 4 3c1.6 0 2.8-.6 4-2'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  if (kind === "wallet") {
    return (
      <svg viewBox='0 0 48 48' className='h-[62%] w-[62%]' aria-hidden>
        <rect x='8' y='14' width='32' height='22' rx='4' fill='none' stroke='currentColor' strokeWidth='3' />
        <path d='M8 20h32' stroke='currentColor' strokeWidth='3' />
        <circle cx='32' cy='27' r='2' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg viewBox='0 0 48 48' className='h-[58%] w-[58%]' aria-hidden>
      <path
        d='M12 25l8 8 16-18'
        fill='none'
        stroke='currentColor'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default function Sticker({
  kind,
  fill,
  rotate = 0,
  className,
}: {
  kind: StickerKind;
  fill: StickerFill;
  /** Degrees. Kept small so the sticker still reads as stuck on, not spinning. */
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute z-0 flex size-[64px] items-center justify-center rounded-sticker border md:size-[84px]",
        fillClass[fill],
        "in-[.band-black]:border-bone-cream",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Glyph kind={kind} />
    </span>
  );
}
