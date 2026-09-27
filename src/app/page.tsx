import Link from "next/link";
import Image from "next/image";

import Hero from "@/components/hero";
import SectionBand from "@/components/section-band";
import Sticker from "@/components/sticker";
import StatLedger from "@/components/stat-ledger";
import EmailDialog from "@/components/email-dialog";
import { Button } from "@/components/ui/button";
import { projects, roles, site, stats } from "@/lib/content";

/**
 * Four posters in rotation: the name on cream, the record on taupe, the
 * numbers on black, the lab back on cream — then the taupe footer. Cards stay
 * cream so they read as stickers on whichever sheet they're on.
 */
export default function Home() {
  return (
    <main>
      <Hero eyebrow='Portfolio' lines={["Sharan", "Suri"]}>
        <p className='text-subheading'>
          Fullstack engineer. I build checkout and payment infrastructure, quiz
          engines and ranking systems — the parts that break first when traffic
          arrives, and the parts nobody notices when they hold.
        </p>
        <div className='mt-24 flex flex-wrap gap-8'>
          <Button asChild>
            <a href={site.resume} target='_blank' rel='noopener noreferrer'>
              Read the resume
            </a>
          </Button>
          <EmailDialog>Get in touch</EmailDialog>
        </div>
      </Hero>

      <SectionBand tone='taupe'>
        <div className='relative'>
          <Sticker
            kind='check'
            fill='red'
            rotate={-8}
            className='top-0 right-0 hidden md:flex'
          />
          <p className='eyebrow relative z-10'>01 — The record</p>
          <h2 className='display-type relative z-10 mt-16 text-display'>Record</h2>
          <div className='mt-24 max-w-[42rem] text-body'>
            <p>
              At{" "}
              <Link href='/work' className='link-underline'>
                WebVeda
              </Link>{" "}
              I own checkout and payments — Razorpay and Stripe moving 10,000+
              transactions a month — and I shipped the 2.0 relaunch, migrating
              500,000+ user records with virtually zero downtime. Promoted to
              Tech Lead inside twelve months, then rebuilt the entire checkout
              flow over a single weekend when a 3x surge in initiations against
              flat conversion exposed a broken funnel.
            </p>
            <p className='mt-16'>
              At IGC I was the founding engineer: zero to 40,000 users in four
              months, a dynamic quiz engine over a 10,000-question bank, and an
              ELO ladder for the whole user base that cut database load ~60% by
              computing daily instead of{" "}
              <span className='link-strike'>in real time</span> pretending to be
              live.
            </p>
          </div>
        </div>

        <ol className='mt-48 grid grid-cols-1 gap-12 lg:grid-cols-3'>
          {roles.map((role) => (
            <li key={role.id} className='sticker-card'>
              <p className='eyebrow'>{role.period}</p>
              <h3 className='mt-12 text-heading-sm font-bold tracking-[-0.01em]'>
                {role.company}
              </h3>
              <p className='eyebrow mt-8'>{role.title}</p>
              <p className='mt-16 text-body'>{role.summary}</p>
            </li>
          ))}
        </ol>
      </SectionBand>

      <SectionBand tone='black'>
        <div className='relative flex flex-col items-start gap-24 md:flex-row md:items-end md:justify-between'>
          <Sticker
            kind='coin'
            fill='taupe'
            rotate={6}
            className='top-0 right-[34%] hidden md:flex'
          />
          <div className='relative z-10'>
            <p className='eyebrow'>02 — Readout</p>
            <h2 className='display-type mt-16 text-display'>Moved</h2>
            <p className='mt-16 max-w-[36rem] text-subheading'>
              Measured in production, not in slides.
            </p>
          </div>
          <a
            href={site.resume}
            target='_blank'
            rel='noopener noreferrer'
            className='sticker-card sticker-card-ink flex w-full max-w-[280px] overflow-hidden p-0'
          >
            <span className='flex w-1/2 items-center justify-center border-r border-void-black bg-bone-cream p-16 text-void-black'>
              <ResumeMark />
            </span>
            <span className='eyebrow flex w-1/2 items-center justify-center text-center text-bone-cream'>
              Resume
            </span>
          </a>
        </div>

        <div className='mt-32'>
          <StatLedger stats={stats} />
        </div>

        <p className='mt-24'>
          <Link href='/work' className='link-underline text-body'>
            The long version
          </Link>
        </p>
      </SectionBand>

      <SectionBand tone='cream'>
        <div className='relative'>
          <Sticker
            kind='rocket'
            fill='red'
            rotate={10}
            className='top-0 right-[8%] hidden md:flex'
          />
          <Sticker
            kind='check'
            fill='black'
            rotate={-8}
            className='top-[96px] right-[16%] hidden lg:flex'
          />
          <p className='eyebrow'>03 — The lab</p>
          <h2 className='display-type mt-16 text-display-lg'>Lab</h2>
          <p className='mt-16 max-w-[36rem] text-subheading'>
            Built to answer a question.
          </p>
        </div>

        <ol className='mt-48 grid grid-cols-1 gap-16 lg:grid-cols-2'>
          {projects.map((project) => (
            <li key={project.id} className='lg:h-full'>
              <Link
                href='/projects'
                className='sticker-card sticker-card-elevated flex h-full flex-col overflow-hidden p-0'
              >
                <div className='p-24'>
                  <p className='eyebrow'>
                    {project.discipline} — {project.year}
                  </p>
                  <h3 className='mt-12 text-heading-sm font-bold tracking-[-0.01em]'>
                    {project.title}
                  </h3>
                  <p className='mt-12 text-body'>{project.description}</p>
                </div>
                <div className='relative mt-auto min-h-[280px] flex-1 border-t border-void-black'>
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.discipline}`}
                    fill
                    sizes='(min-width: 1024px) 640px, 100vw'
                    className='object-cover'
                  />
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <p className='mt-24'>
          <Link href='/projects' className='link-underline text-body'>
            All projects
          </Link>
        </p>
      </SectionBand>
    </main>
  );
}

function ResumeMark() {
  return (
    <svg viewBox='0 0 48 48' className='size-[48px]' aria-hidden>
      <rect
        x='12'
        y='6'
        width='24'
        height='36'
        rx='4'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
      />
      <path d='M18 16h12M18 24h12M18 32h8' stroke='currentColor' strokeWidth='2' />
    </svg>
  );
}
