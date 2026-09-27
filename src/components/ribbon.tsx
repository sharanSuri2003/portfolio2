"use client";

import { useId } from "react";

import { cn } from "@/lib/utils";

/**
 * The signature tube. Flat Alarm Red — grain is noise punched out of the same
 * fill, not a second color and not a gradient.
 *
 * It is measured in the headline's own em, so it passes behind the display
 * word at every width instead of drifting off into a corner. `band` is the
 * headline's height in em (lines × line-height). Across the text the tube
 * stays inside that band — the eyebrow above and the tagline below never sit
 * on red — then it climbs out through the top right. The path runs far past
 * the box on both sides; the hero clips it.
 */

// viewBox units per em. The box is 7.2em × 3em, centred on the headline.
const U = 200;
const MID = 300;

function tube(band: number) {
  const h = band * U;
  const stroke = h * 0.55;
  // Swing, kept inside the band so the stroke edge never leaves the headline.
  const a = Math.round((h - stroke) * 0.35);
  const lo = MID + a;
  const hi = MID - a;

  const d = [
    `M -3000 ${lo}`,
    `L -300 ${lo}`,
    `C 0 ${lo}, 180 ${hi}, 420 ${hi}`,
    `S 700 ${lo}, 820 ${lo}`,
    `C 1000 ${lo}, 1150 ${MID - h}, 1400 -400`,
    `S 1900 -2400, 2200 -3200`,
  ].join(" ");

  return { d, stroke: Math.round(stroke) };
}

export default function Ribbon({
  band,
  className,
}: {
  band: number;
  /** Must carry the headline's font-size class so `em` resolves to it. */
  className?: string;
}) {
  const id = `grain-${useId().replace(/:/g, "")}`;
  const { d, stroke } = tube(band);

  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-1/2 left-0 h-[3em] w-[7.2em] -translate-y-1/2 overflow-visible",
        className
      )}
      viewBox='0 0 1440 600'
      fill='none'
    >
      <defs>
        {/* Bounded in user space: the default region is the path's bbox,
            which runs thousands of units off-screen. */}
        <filter
          id={id}
          filterUnits='userSpaceOnUse'
          x='-1300'
          y='-1100'
          width='3500'
          height='1800'
        >
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.7'
            numOctaves='3'
            stitchTiles='stitch'
            result='noise'
          />
          <feDisplacementMap
            in='SourceGraphic'
            in2='noise'
            scale='5'
            xChannelSelector='R'
            yChannelSelector='G'
            result='displaced'
          />
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.9'
            numOctaves='2'
            result='speck'
          />
          <feColorMatrix
            in='speck'
            type='matrix'
            values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.14 0'
            result='speckAlpha'
          />
          <feComposite
            in='speckAlpha'
            in2='displaced'
            operator='in'
            result='specked'
          />
          <feBlend in='displaced' in2='specked' mode='multiply' />
        </filter>
      </defs>
      <path
        d={d}
        stroke='currentColor'
        strokeWidth={stroke}
        strokeLinecap='round'
        className='text-alarm-red'
        filter={`url(#${id})`}
      />
    </svg>
  );
}
