import Link from "next/link";
import Image from "next/image";

import Hero from "@/components/hero";
import HazardMark from "@/components/hazard-mark";
import SectionHead from "@/components/section-head";
import SectionRule from "@/components/section-rule";
import StatLedger from "@/components/stat-ledger";
import EmailDialog from "@/components/email-dialog";
import InView from "@/components/in-view";
import { Button } from "@/components/ui/button";
import { projects, roles, site, stats } from "@/lib/content";

/**
 * The rhythm: poster → numbered section → dashed rule → next section. Every
 * section opens with the same eyebrow/title/standfirst shape, so the page reads
 * as an ordered document rather than a scroll of loose paragraphs.
 *
 * Lead paragraphs stay centred — that is the poster voice. Enumerated detail
 * (roles, projects) left-aligns inside the same 680px column, because a centred
 * list has no common left edge and the eye has to re-find the start of every
 * line.
 */
export default function Home() {
  return (
    <main>
      <Hero eyebrow='Portfolio' lines={["Sharan", "Suri"]}>
        <p className='prose-column text-body'>
          Fullstack engineer. I build checkout and payment infrastructure, quiz
          engines and ranking systems — the parts that break first when traffic
          arrives, and the parts nobody notices when they hold.
        </p>

        <div className='mt-30 flex flex-wrap items-center justify-center gap-20'>
          <Button asChild>
            <a href={site.resume} target='_blank' rel='noopener noreferrer'>
              Read the resume
            </a>
          </Button>
          <EmailDialog>Get in touch</EmailDialog>
        </div>
      </Hero>

      <section className='w-full px-20 pt-80'>
        <InView>
          <SectionHead
            index='01'
            eyebrow='The record'
            title='Shipped against real traffic'
            standfirst='Three teams since 2021. The pattern is always the same — find the number that stopped moving, work out which system broke it, rebuild that system.'
            symbol='fire'
          />
        </InView>

        <InView delay={80} className='prose-column mt-40 text-left text-body'>
          <p>
            At{" "}
            <Link href='/work' className='link-underline'>
              WebVeda
            </Link>{" "}
            I own checkout and payments — Razorpay and Stripe moving 10,000+
            transactions a month — and I shipped the 2.0 relaunch, migrating
            500,000+ user records with virtually zero downtime. Promoted to Tech
            Lead inside twelve months, then rebuilt the entire checkout flow over
            a single weekend when a 3x surge in initiations against flat
            conversion exposed a broken funnel.
          </p>
          <p>
            At IGC I was the founding engineer: zero to 40,000 users in four
            months, a dynamic quiz engine over a 10,000-question bank, and an ELO
            ladder for the whole user base that cut database load ~60% by
            computing daily instead of{" "}
            <span className='link-strike'>in real time</span> pretending to be
            live.
          </p>
        </InView>
      </section>

      <SectionRule symbol='radiation' className='mt-80' />

      <section className='w-full px-20 pt-80'>
        <InView>
          <SectionHead
            index='02'
            eyebrow='Readout'
            title='What the work moved'
            standfirst='Measured in production, not in slides.'
            symbol='radiation'
          />
        </InView>

        <div className='mt-40'>
          <StatLedger stats={stats} />
        </div>
      </section>

      <SectionRule symbol='biohazard' className='mt-80' />

      <section className='w-full px-20 pt-80'>
        <InView>
          <SectionHead
            index='03'
            eyebrow='Postings'
            title='Where it happened'
            symbol='biohazard'
          />
        </InView>

        <ol className='prose-column mt-40 flex flex-col gap-40 text-left'>
          {roles.map((role, index) => (
            <InView
              as='li'
              key={role.id}
              delay={index * 70}
              className='border-t border-dashed border-alarm-red pt-25'
            >
              <p className='flex items-center gap-8'>
                <HazardMark symbol='fire' size={14} />
                <span className='text-caption font-extrabold uppercase tracking-[0.12em]'>
                  {role.period}
                </span>
              </p>

              <h3 className='display-type mt-12 text-heading'>{role.company}</h3>

              <p className='mt-7 text-caption font-extrabold uppercase tracking-[0.12em]'>
                {role.title}
              </p>

              <p className='mt-15 text-body'>{role.summary}</p>
            </InView>
          ))}
        </ol>

        <p className='prose-column mt-40 text-body'>
          <Link href='/work' className='link-underline'>
            The long version
          </Link>
        </p>
      </section>

      <SectionRule symbol='skull' className='mt-80' />

      <section className='w-full px-20 pb-40 pt-80'>
        <InView>
          <SectionHead
            index='04'
            eyebrow='The lab'
            title='Built to answer a question'
            symbol='skull'
          />
        </InView>

        <ol className='mx-auto mt-40 flex w-full max-w-[860px] flex-col gap-60 text-left'>
          {projects.map((project, index) => (
            <InView as='li' key={project.id} delay={index * 70}>
              <Link
                href='/projects'
                className='row-link block border-t border-dashed border-alarm-red pt-25'
              >
                <p className='text-caption font-extrabold uppercase tracking-[0.12em]'>
                  {project.discipline} — {project.year}
                </p>

                <h3 className='row-title display-type mt-12 text-heading'>
                  {project.title}
                </h3>

                <p className='mt-15 max-w-[680px] text-body'>
                  {project.description}
                </p>

                <span className='evidence mt-25 block'>
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.discipline}`}
                    width={1440}
                    height={900}
                    className='h-auto w-full'
                  />
                </span>
              </Link>
            </InView>
          ))}
        </ol>

        <p className='prose-column mt-40 text-body'>
          <Link href='/projects' className='link-underline'>
            All projects
          </Link>
        </p>
      </section>
    </main>
  );
}
