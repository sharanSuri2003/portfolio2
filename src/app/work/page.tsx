import type { Metadata } from "next";

import Hero from "@/components/hero";
import HazardMark from "@/components/hazard-mark";
import SectionHead from "@/components/section-head";
import SectionRule from "@/components/section-rule";
import StatLedger from "@/components/stat-ledger";
import EmailDialog from "@/components/email-dialog";
import InView from "@/components/in-view";
import { Button } from "@/components/ui/button";
import { roles, site, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Technical Lead at WebVeda, Founding Engineer at IGC, Youth Impactor at 1M1B — roles, stacks and what shipped.",
};

export default function WorkPage() {
  return (
    <main>
      <Hero eyebrow='Sharan Suri' lines={["Work"]}>
        <p className='prose-column text-body'>
          Three teams, one habit — find the broken funnel, rebuild it, prove the
          number moved.
        </p>
      </Hero>

      {roles.map((role, index) => (
        <div key={role.id}>
          {index > 0 ? <SectionRule symbol='radiation' className='mt-80' /> : null}

          <section className='w-full px-20 pt-80'>
            <InView>
              <SectionHead
                index={role.id}
                eyebrow={`${role.period} — ${role.location}`}
                title={role.company}
                standfirst={role.summary}
                symbol='radiation'
              />
            </InView>

            {/* Left-aligned: this is an enumerated record, and a centred list
                gives the eye no common edge to run down. */}
            <ul className='prose-column mt-40 flex flex-col gap-20 text-left'>
              {role.points.map((point, pointIndex) => (
                <InView
                  as='li'
                  key={point}
                  delay={pointIndex * 60}
                  className='flex gap-12'
                >
                  <HazardMark symbol='fire' size={14} className='mt-[3px]' />
                  <span className='text-body'>{point}</span>
                </InView>
              ))}
            </ul>

            <p className='prose-column mt-30 border-t border-dashed border-alarm-red pt-20 text-caption font-extrabold uppercase tracking-[0.12em]'>
              {role.stack.join(" · ")}
            </p>
          </section>
        </div>
      ))}

      <SectionRule symbol='biohazard' className='mt-80' />

      <section className='w-full px-20 pt-80'>
        <InView>
          <SectionHead
            index='04'
            eyebrow='Readout'
            title='What the work moved'
            standfirst='Measured in production, not in slides.'
            symbol='biohazard'
          />
        </InView>

        <div className='mt-40'>
          <StatLedger stats={stats} />
        </div>
      </section>

      <SectionRule symbol='skull' className='mt-80' />

      <section className='w-full px-20 pb-40 pt-80'>
        <InView>
          <SectionHead
            index='05'
            eyebrow='Availability'
            title='Hire the habit'
            standfirst='Open to fullstack and platform work — payments, growth surfaces, migrations.'
            symbol='skull'
          />
        </InView>

        <InView delay={80} className='mt-40 flex flex-wrap items-center justify-center gap-20'>
          <Button asChild>
            <a href={site.resume} target='_blank' rel='noopener noreferrer'>
              Read the resume
            </a>
          </Button>
          <EmailDialog>Get in touch</EmailDialog>
        </InView>
      </section>
    </main>
  );
}
