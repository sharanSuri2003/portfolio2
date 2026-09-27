import type { Metadata } from "next";

import Hero from "@/components/hero";
import SectionBand from "@/components/section-band";
import Sticker from "@/components/sticker";
import EmailDialog from "@/components/email-dialog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on payments, checkout funnels and building systems that hold up under load. Coming soon.",
};

const queued = [
  {
    id: "01",
    title: "Rebuilding a checkout in a weekend",
    note: "What a 3x surge in initiations against flat conversion actually told us.",
  },
  {
    id: "02",
    title: "ELO for 40,000 people",
    note: "Ranking without melting the database. Batch it and stop pretending it's live.",
  },
  {
    id: "03",
    title: "Moving 500,000 records quietly",
    note: "The migration plan that let a platform relaunch land at near-zero downtime.",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Hero eyebrow='Sharan Suri' lines={["Notes"]} size='lg'>
        <p className='text-subheading'>
          On payments, funnels and systems that have to hold. Nothing published
          yet. Three drafts in the queue.
        </p>
      </Hero>

      <SectionBand tone='taupe'>
        <div className='relative'>
          <Sticker
            kind='check'
            fill='cream'
            rotate={8}
            className='top-0 right-0 hidden md:flex'
          />
          <p className='eyebrow'>01 · Queue</p>
          <h2 className='display-type mt-16 text-display'>Queue</h2>
          <p className='mt-16 max-w-[40rem] text-subheading'>
            Three drafts, none of them finished yet.
          </p>
        </div>

        <ol className='mt-32 grid grid-cols-1 gap-12 lg:grid-cols-3'>
          {queued.map((entry) => (
            <li key={entry.id} className='sticker-card'>
              <p className='eyebrow'>Draft {entry.id}</p>
              <h3 className='mt-12 text-heading-sm font-bold tracking-[-0.01em]'>
                {entry.title}
              </h3>
              <p className='mt-12 text-body'>{entry.note}</p>
            </li>
          ))}
        </ol>
      </SectionBand>

      <SectionBand tone='black'>
        <div className='relative'>
          <Sticker
            kind='rocket'
            fill='red'
            rotate={-10}
            className='top-0 right-0 hidden md:flex'
          />
          <p className='eyebrow'>02 · Requests</p>
          <h2 className='display-type relative z-10 mt-16 text-display'>Ask</h2>
          <p className='mt-16 max-w-[40rem] text-subheading'>
            Tell me which one to write first, or what the list is missing.
          </p>
        </div>
        <div className='mt-24'>
          <EmailDialog>Tell me what to write</EmailDialog>
        </div>
      </SectionBand>
    </main>
  );
}
