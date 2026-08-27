import HazardMark, { type HazardSymbol } from "@/components/hazard-mark";
import { cn } from "@/lib/utils";

/**
 * The quiet divider between sections.
 *
 * The flame band is the *page* terminator — the spec puts it "along the bottom
 * edge of the page", bleeding off the viewport. Dropping a 160px wall of red
 * between every section instead reads as an interruption: the eye stops dead,
 * and the two sections it separates feel unrelated rather than sequenced.
 *
 * This is what belongs between sections: a dashed red rule broken by a single
 * hazard mark, borrowing the radar's dash so the furniture stays one family.
 * It divides without shouting, and the surrounding 80px of section gap does the
 * real separating.
 */
export default function SectionRule({
  symbol = "radiation",
  className,
}: {
  symbol?: HazardSymbol;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("flex w-full items-center justify-center gap-20", className)}
    >
      <span className='h-px max-w-[240px] flex-1 border-t border-dashed border-alarm-red' />
      <HazardMark symbol={symbol} size={16} />
      <span className='h-px max-w-[240px] flex-1 border-t border-dashed border-alarm-red' />
    </div>
  );
}
