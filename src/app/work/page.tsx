import type { Metadata } from "next";

import Hero from "@/components/hero";
import SectionBand from "@/components/section-band";
import Sticker, { type StickerFill, type StickerKind } from "@/components/sticker";
import StatLedger from "@/components/stat-ledger";
import EmailDialog from "@/components/email-dialog";
import { Button } from "@/components/ui/button";
import { roles, site, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Technical Lead at WebVeda, Founding Engineer at IGC, Youth Impactor at 1M1B — roles, stacks and what shipped.",
};

// Continues the hero: cream → taupe → black → cream, then Moved on taupe and
// Hire on black, so the taupe footer never meets a taupe band.
const tones = ["taupe", "black", "cream"] as const;

const roleStickers: { kind: StickerKind; fill: StickerFill; rotate: number }[] = [
  { kind: "wallet", fill: "black", rotate: -6 },
  { kind: "coin", fill: "red", rotate: 8 },
  { kind: "rocket", fill: "red", rotate: -10 },
];

export default function WorkPage() {
  return (
    <main>
      <Hero eyebrow='Sharan Suri' lines={["Work"]} size='lg'>
        <p className='text-subheading'>
          Three teams, one habit — find the broken funnel, rebuild it, prove the
          number moved.
        </p>
      </Hero>

      {roles.map((role, index) => (
        <SectionBand key={role.id} tone={tones[index % tones.length]}>
          <div className='relative'>
            <Sticker
              kind={roleStickers[index].kind}
              fill={roleStickers[index].fill}
              rotate={roleStickers[index].rotate}
              className='top-0 right-0 hidden md:flex'
            />
            <p className='eyebrow'>
              {role.id} — {role.period} — {role.location}
            </p>
            <h2 className='display-type relative z-10 mt-16 max-w-[12ch] text-display'>
              {role.company}
            </h2>
            <p className='mt-16 max-w-[40rem] text-subheading'>{role.summary}</p>
          </div>

          <div className='sticker-card mt-32'>
            <p className='eyebrow'>{role.title}</p>
            <ul className='mt-16 flex flex-col gap-16'>
              {role.points.map((point) => (
                <li key={point} className='text-body'>
                  {point}
                </li>
              ))}
            </ul>
            <ul className='mt-24 flex flex-wrap gap-8'>
              {role.stack.map((item) => (
                <li key={item} className='tag'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </SectionBand>
      ))}

      <SectionBand tone='taupe'>
        <div className='relative'>
          <Sticker
            kind='check'
            fill='cream'
            rotate={-8}
            className='top-0 right-0 hidden md:flex'
          />
          <p className='eyebrow'>04 — Readout</p>
          <h2 className='display-type relative z-10 mt-16 text-display'>Moved</h2>
        </div>
        <p className='mt-16 max-w-[36rem] text-subheading'>
          Measured in production, not in slides.
        </p>
        <div className='mt-32'>
          <StatLedger stats={stats} />
        </div>
      </SectionBand>

      <SectionBand tone='black'>
        <div className='relative'>
          <Sticker
            kind='wallet'
            fill='red'
            rotate={8}
            className='top-0 right-0 hidden md:flex'
          />
          <p className='eyebrow'>05 — Availability</p>
          <h2 className='display-type relative z-10 mt-16 text-display'>Hire</h2>
        </div>
        <p className='mt-16 max-w-[40rem] text-subheading'>
          Open to fullstack and platform work — payments, growth surfaces,
          migrations.
        </p>
        <div className='mt-24 flex flex-wrap gap-8'>
          <Button asChild>
            <a href={site.resume} target='_blank' rel='noopener noreferrer'>
              Read the resume
            </a>
          </Button>
          <EmailDialog>Get in touch</EmailDialog>
        </div>
      </SectionBand>
    </main>
  );
}
