import type { Stat } from "@/lib/content";

/**
 * Four numbers as sticker cards, not a ticker. The figure uses the heading
 * step — the display face is reserved for the section word beside them.
 */
function figure(stat: Stat) {
  const digits =
    stat.decimals != null ? stat.value.toFixed(stat.decimals) : String(stat.value);
  return `${stat.prefix ?? ""}${digits}${stat.suffix ?? ""}`;
}

export default function StatLedger({ stats }: { stats: Stat[] }) {
  return (
    <ul className='grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4'>
      {stats.map((stat) => (
        <li key={stat.label} className='sticker-card'>
          <p className='text-heading font-bold tracking-[-0.01em] tabular-nums'>
            {figure(stat)}
          </p>
          <p className='eyebrow mt-12'>{stat.label}</p>
          <p className='mt-8 text-caption'>{stat.note}</p>
        </li>
      ))}
    </ul>
  );
}
