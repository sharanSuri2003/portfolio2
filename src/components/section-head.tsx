import HazardMark, { type HazardSymbol } from "@/components/hazard-mark";

/**
 * Every section opens the same way: a hazard-flagged eyebrow, the title, and an
 * optional standfirst. One repeated shape is what turns a stack of paragraphs
 * into a document — the reader learns the pattern once and then always knows
 * where they are.
 *
 * The eyebrow carries the section number as well as its label, because an
 * ordered document tells you how much is left.
 */
export default function SectionHead({
  index,
  eyebrow,
  title,
  standfirst,
  symbol = "fire",
}: {
  index: string;
  eyebrow: string;
  title: string;
  standfirst?: string;
  symbol?: HazardSymbol;
}) {
  return (
    <header className='prose-column'>
      <p className='flex items-center justify-center gap-8'>
        <HazardMark symbol={symbol} size={14} />
        <span className='text-caption font-extrabold uppercase tracking-[0.14em]'>
          {index} — {eyebrow}
        </span>
      </p>

      <h2 className='display-type mt-15 text-heading-lg'>{title}</h2>

      {standfirst ? (
        <p className='mt-20 text-body'>{standfirst}</p>
      ) : null}
    </header>
  );
}
