import type { Metadata } from "next";
import Image from "next/image";

import Hero from "@/components/hero";
import SectionBand from "@/components/section-band";
import Sticker from "@/components/sticker";
import EmailDialog from "@/components/email-dialog";
import { Button } from "@/components/ui/button";
import { projects, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Siggy and Traffix — independent builds in automation, web scraping, machine learning and computer vision.",
};

// Continues the hero: taupe, black, then the cream Backlog band before the
// taupe footer.
const tones = ["taupe", "black"] as const;

export default function ProjectsPage() {
  return (
    <main>
      <Hero eyebrow='Sharan Suri' lines={["Lab"]} size='lg'>
        <p className='text-subheading'>
          Independent builds — made to answer a question, kept because they
          worked.
        </p>
      </Hero>

      {projects.map((project, index) => (
        <SectionBand key={project.id} tone={tones[index % tones.length]}>
          <div className='relative'>
            {index === 0 ? (
              <Sticker
                kind='coin'
                fill='red'
                rotate={8}
                className='top-0 right-0 hidden lg:flex'
              />
            ) : (
              <Sticker
                kind='check'
                fill='red'
                rotate={-10}
                className='top-0 right-0 hidden lg:flex'
              />
            )}
            <p className='eyebrow'>
              {project.id} — {project.discipline} — {project.year}
            </p>
            <h2 className='display-type relative z-10 mt-16 text-display'>
              {project.title}
            </h2>
          </div>

          <div className='mt-32 grid items-start gap-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]'>
            <div>
              <p className='max-w-[36rem] text-body'>{project.description}</p>
              <ul className='mt-24 flex flex-wrap gap-8'>
                {project.stack.map((item) => (
                  <li key={item} className='tag'>
                    {item}
                  </li>
                ))}
              </ul>
              <p className='mt-24'>
                <a
                  href={project.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='pill pill-outline'
                >
                  View source
                </a>
              </p>
            </div>

            <a
              href={project.href}
              target='_blank'
              rel='noopener noreferrer'
              className='sticker-card sticker-card-elevated block overflow-hidden p-0'
            >
              <Image
                src={project.image}
                alt={`${project.title} — ${project.discipline}`}
                width={1440}
                height={900}
                className='h-auto w-full'
              />
            </a>
          </div>
        </SectionBand>
      ))}

      <SectionBand tone='cream'>
        <div className='relative'>
          <Sticker
            kind='wallet'
            fill='taupe'
            rotate={-8}
            className='top-0 right-0 hidden md:flex'
          />
          <p className='eyebrow'>03 — Backlog</p>
          <h2 className='display-type relative z-10 mt-16 text-display'>More</h2>
        </div>
        <p className='mt-16 max-w-[40rem] text-subheading'>
          Everything half-finished lives on GitHub until it earns a page here.
        </p>
        <div className='mt-24 flex flex-wrap gap-8'>
          <Button asChild>
            <a href={site.github} target='_blank' rel='noopener noreferrer'>
              Browse GitHub
            </a>
          </Button>
          <EmailDialog>Get in touch</EmailDialog>
        </div>
      </SectionBand>
    </main>
  );
}
