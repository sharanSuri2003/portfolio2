"use client";

import { useCallback, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";

import HazardMark from "@/components/hazard-mark";
import type { Stat } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * The readout. Four numbers in a two-up grid rather than a single column —
 * stacked, they were four identical centred blocks scrolling past with nothing
 * to compare against, which is the shape of a list, not of evidence.
 *
 * The grid gives the eye a common edge and lets pairs read against each other.
 * Cells are separated by the dashed red rule the radar and the section dividers
 * already use, so the panel reads as one instrument rather than four cards.
 *
 * Digits roll up from zero the first time each cell comes into view (Skiper 37's
 * NumberFlow treatment) — a number ticker reads as a live readout, which is
 * exactly the emergency-broadcast register this system wants. The suffix sits
 * outside NumberFlow, which draws its own noticeably smaller than the digits.
 */
function LedgerCell({ stat, index }: { stat: Stat; index: number }) {
  const [value, setValue] = useState(0);
  const settled = useRef(false);

  const attach = useCallback(
    (element: HTMLLIElement | null) => {
      if (!element || settled.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0]?.isIntersecting || settled.current) return;
          settled.current = true;
          setValue(stat.value);
          observer.disconnect();
        },
        { threshold: 0.4 }
      );

      observer.observe(element);
    },
    [stat.value]
  );

  return (
    <li
      ref={attach}
      className={cn(
        "flex flex-col items-center border-t border-dashed border-alarm-red px-20 py-30 md:px-30",
        // Drawn per cell rather than with divide-x: on a two-column grid that
        // utility targets every child after the first, so the third cell gets a
        // left border despite sitting in column one.
        index % 2 === 1 && "md:border-l"
      )}
    >
      <span className='display-type text-heading-lg leading-[0.88] tabular-nums text-bone-cream'>
        {stat.prefix}
        <NumberFlow
          value={value}
          format={
            stat.decimals
              ? {
                  minimumFractionDigits: stat.decimals,
                  maximumFractionDigits: stat.decimals,
                }
              : undefined
          }
          transformTiming={{
            duration: 1100,
            easing: "cubic-bezier(.23,1,.32,1)",
          }}
        />
        {stat.suffix}
      </span>

      <span className='mt-15 flex items-center justify-center gap-8'>
        <HazardMark symbol='radiation' size={14} />
        <span className='text-caption font-extrabold uppercase tracking-[0.12em]'>
          {stat.label}
        </span>
      </span>

      <span className='mt-8 max-w-[32ch] text-caption'>{stat.note}</span>
    </li>
  );
}

export default function StatLedger({ stats }: { stats: Stat[] }) {
  return (
    <ul className='mx-auto grid w-full max-w-[860px] grid-cols-1 md:grid-cols-2'>
      {stats.map((stat, index) => (
        <LedgerCell key={stat.label} stat={stat} index={index} />
      ))}
    </ul>
  );
}
