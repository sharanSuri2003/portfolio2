import Navbar from "@/components/navbar";
import Image from "next/image";
import {
  SiSelenium,
  SiReact,
  SiPython,
  SiFlask,
  SiKeras,
  SiGithub,
} from "react-icons/si";
const projects = [
  {
    id: 1,
    title: "Siggy",
    description:
      "Siggy is a web scraping tool built with Selenium that extracts menu items from Swiggy and recommends food options tailored to your budget, making dining decisions effortless.",
    image: "/siggy.png",
    icons: [<SiSelenium />, <SiReact />, <SiPython />, <SiFlask />],
    link: "https://github.com/Sharan420/siggy-frontend",
  },
  {
    id: 2,
    title: "Traffix",
    description:
      "Keras is used to optimize traffic light timings by real-time traffic density detection, enhancing urban transportation efficiency and reducing congestion.",
    image: "/traffixpng.png",
    icons: [<SiKeras />, <SiPython />],
    link: "https://github.com/Sharan420/Traffic-Classifier",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <main className='relative z-[1] min-h-screen w-full px-5 md:px-6'>
        <div className='mx-auto flex w-full max-w-5xl flex-col items-center pb-36 pt-36 md:pb-48 md:pt-52'>
          <h1 className='mb-20 text-center font-display text-[clamp(4.5rem,10vw,8.5rem)] font-normal leading-none tracking-[-0.045em] md:mb-28'>
            Projects.
          </h1>
          <div className='flex w-full flex-col gap-6 md:gap-8'>
          {projects.map((project, projectIndex) => (
            <section
              className='group relative flex w-full flex-col items-start overflow-hidden rounded-[28px] border border-border bg-card/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-foreground/[0.13] md:p-12'
              key={project.id}
            >
              <span className='absolute right-6 top-5 font-mono text-xs tracking-[0.16em] text-muted-foreground/55 md:right-10 md:top-9'>
                {String(projectIndex + 1).padStart(2, "0")}
              </span>
              <div className='mb-6 h-px w-12 bg-accent-green/70 transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-20 md:mb-8' />
              <h2 className='flex flex-row items-center gap-4 font-display text-4xl font-normal tracking-[-0.02em] md:text-6xl'>
                {`${project.title}`}
                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center rounded-full border border-border p-2.5 text-base text-muted-foreground transition-all duration-500 hover:scale-105 hover:border-accent-green hover:text-foreground'
                  >
                    <SiGithub />
                  </a>
                )}
              </h2>
              <div className='mt-1 flex flex-row items-center justify-center gap-2 text-muted-foreground'>
                {project.icons.map((icon, index) => (
                  <div
                    className='flex size-8 items-center justify-center rounded-full border border-border bg-background/40 text-sm'
                    key={index}
                  >
                    {icon}
                  </div>
                ))}
              </div>
              <p className='mt-3 max-w-2xl text-[0.95rem] leading-[1.7] text-muted-foreground md:text-base'>
                {project.description}
              </p>
              <div className='mt-5 w-full overflow-hidden rounded-[20px] border border-border bg-surface-light p-2 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:mt-8 md:p-3'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  className='h-auto w-full rounded-[14px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]'
                />
              </div>
            </section>
          ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
