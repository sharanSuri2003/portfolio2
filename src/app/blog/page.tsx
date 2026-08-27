import type { Metadata } from "next";

import Hero from "@/components/hero";
import HazardMark from "@/components/hazard-mark";
import SectionHead from "@/components/section-head";
import EmailDialog from "@/components/email-dialog";
import InView from "@/components/in-view";
import { site } from "@/lib/content";

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
    note: "Ranking without melting the database — batch it and stop pretending it's live.",
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
      <Hero eyebrow='Sharan Suri' lines={["Notes"]}>
        <p className='prose-column text-body'>
          On payments, funnels and systems that have to hold. Nothing published
          yet — three drafts in the queue.
        </p>
      </Hero>

      <section className='w-full px-20 pb-40 pt-80'>
        <InView>
          <SectionHead
            index='01'
            eyebrow='Queue'
            title='In the queue'
            standfirst='Three drafts, none of them finished. Tell me which one to write first.'
            symbol='skull'
          />
        </InView>

        <ol className='prose-column mt-40 flex flex-col gap-40 text-left'>
          {queued.map((entry, index) => (
            <InView
              as='li'
              key={entry.id}
              delay={index * 70}
              className='border-t border-dashed border-alarm-red pt-25'
            >
              <p className='flex items-center gap-8'>
                <HazardMark symbol='skull' size={14} />
                <span className='text-caption font-extrabold uppercase tracking-[0.12em]'>
                  Draft {entry.id}
                </span>
              </p>
              <h3 className='display-type mt-12 text-heading'>{entry.title}</h3>
              <p className='mt-15 text-body'>{entry.note}</p>
            </InView>
          ))}
        </ol>

        <div className='mt-40 flex justify-center'>
          <EmailDialog>Tell me what to write</EmailDialog>
        </div>
      </section>
    </main>
  );
}
