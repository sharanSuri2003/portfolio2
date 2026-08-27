import type { Metadata } from "next";
import Image from "next/image";

import Hero from "@/components/hero";
import SectionHead from "@/components/section-head";
import SectionRule from "@/components/section-rule";
import EmailDialog from "@/components/email-dialog";
import InView from "@/components/in-view";
import { Button } from "@/components/ui/button";
import { projects, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Siggy and Traffix — independent builds in automation, web scraping, machine learning and computer vision.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Hero eyebrow='Sharan Suri' lines={["The", "lab"]}>
        <p className='prose-column text-body'>
          Independent builds — made to answer a question, kept because they
          worked.
        </p>
      </Hero>

      {projects.map((project, index) => (
        <div key={project.id}>
          {index > 0 ? (
            <SectionRule symbol='biohazard' className='mt-80' />
          ) : null}

          <section className='w-full px-20 pt-80'>
            <InView>
              <SectionHead
                index={project.id}
                eyebrow={`${project.discipline} — ${project.year}`}
                title={project.title}
                standfirst={project.description}
                symbol='biohazard'
              />
            </InView>

            {/* The evidence. Desaturated at rest so a stray off-palette
                screenshot can't smuggle a second accent colour into a
                two-colour system, resolving on the one you're looking at. */}
            <InView delay={80} className='mx-auto mt-40 max-w-[860px]'>
              <a
                href={project.href}
                target='_blank'
                rel='noopener noreferrer'
                className='evidence press block'
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.discipline}`}
                  width={1440}
                  height={900}
                  className='h-auto w-full'
                />
              </a>
            </InView>

            <InView delay={140}>
              <p className='prose-column mt-30 border-t border-dashed border-alarm-red pt-20 text-caption font-extrabold uppercase tracking-[0.12em]'>
                {project.stack.join(" · ")}
              </p>

              <p className='prose-column mt-20 text-body'>
                <a
                  href={project.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-underline'
                >
                  View source
                </a>
              </p>
            </InView>
          </section>
        </div>
      ))}

      <SectionRule symbol='skull' className='mt-80' />

      <section className='w-full px-20 pb-40 pt-80'>
        <InView>
          <SectionHead
            index='03'
            eyebrow='Backlog'
            title='More in the works'
            standfirst='Everything half-finished lives on GitHub until it earns a page here.'
            symbol='skull'
          />
        </InView>

        <InView delay={80} className='mt-40 flex flex-wrap items-center justify-center gap-20'>
          <Button asChild>
            <a href={site.github} target='_blank' rel='noopener noreferrer'>
              Browse GitHub
            </a>
          </Button>
          <EmailDialog>Get in touch</EmailDialog>
        </InView>
      </section>
    </main>
  );
}
