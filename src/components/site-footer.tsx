import EmailDialog from "@/components/email-dialog";
import { site } from "@/lib/content";

/**
 * Closes the collage. An ash band, the name in the UI face (the display face
 * stays in the posters), and the same pills the nav uses.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-ash-taupe text-void-black'>
      <div className='page-frame flex flex-col gap-24 py-48 md:py-80'>
        <p className='text-heading-sm font-bold tracking-[-0.01em]'>{site.name}</p>
        <p className='text-body'>
          {site.role} — {site.location}
        </p>
        <div className='flex flex-wrap gap-8'>
          <a
            className='pill pill-outline'
            href={site.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            className='pill pill-outline'
            href={site.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <EmailDialog>Email</EmailDialog>
          <a
            className='pill pill-outline'
            href={site.resume}
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
        </div>
        <p className='text-caption'>© {year}</p>
      </div>
    </footer>
  );
}
