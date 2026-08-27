import FlameBand from "@/components/flame-band";
import SectionRule from "@/components/section-rule";
import { site } from "@/lib/content";

/**
 * The page terminator. The footer mark sits quietly in the centred column, and
 * the flames come last — the spec puts them "along the bottom edge of the page,
 * bleeding off the viewport", which is the one place a 160px wall of red does
 * not interrupt anything, because there is nothing after it.
 *
 * Between sections that job belongs to SectionRule; a flame band used as a
 * divider stops the eye dead and makes the two sections it splits feel
 * unrelated.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className='w-full'>
      <SectionRule symbol='fire' className='mt-80' />

      <div className='prose-column px-20 pt-40'>
        <p className='text-caption font-extrabold uppercase tracking-[0.14em]'>
          {site.name} — {site.location}
        </p>

        <p className='mt-20 flex flex-wrap items-center justify-center gap-x-20 gap-y-8 text-caption'>
          <a
            className='link-underline'
            href={site.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            className='link-underline'
            href={site.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <a className='link-underline' href={`mailto:${site.email}`}>
            Email
          </a>
          <a
            className='link-underline'
            href={site.resume}
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
        </p>

        {/* Full-strength cream, not a dimmed one — a 60% tint on black is a
            neutral gray by another name, which the system rules out. */}
        <p className='mt-20 text-caption'>© {year}</p>
      </div>

      {/* Last thing on the page, flush to the bottom edge. */}
      <FlameBand className='mt-40' />
    </footer>
  );
}
