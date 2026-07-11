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
        <div className='mx-auto flex w-full max-w-3xl flex-col items-start pt-28 pb-28 md:pt-44 md:pb-40'>
          <h1 className='mb-10 font-display text-5xl font-normal tracking-[-0.02em] md:mb-16 md:text-6xl'>
            Projects.
          </h1>
          {projects.map((project) => (
            <section
              className='mb-6 flex w-full flex-col items-start gap-4 rounded-[20px] border border-border bg-card p-5 md:mb-8 md:p-10'
              key={project.id}
            >
              <h2 className='flex flex-row items-center gap-4 font-display text-3xl font-normal md:text-4xl'>
                {`${project.title}`}
                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center rounded-full border border-border p-2.5 text-base text-muted-foreground transition-colors hover:border-accent-green hover:text-foreground'
                  >
                    <SiGithub />
                  </a>
                )}
              </h2>
              <div className='flex flex-row items-center justify-center gap-3 text-muted-foreground'>
                {project.icons.map((icon, index) => (
                  <div key={index}>{icon}</div>
                ))}
              </div>
              <p className='text-[0.95rem] leading-[1.6] text-muted-foreground'>
                {project.description}
              </p>
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={400}
                className='h-auto w-full rounded-xl border border-border object-cover md:w-2/3'
              />
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default page;
