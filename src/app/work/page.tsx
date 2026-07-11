"use client";

import Navbar from "@/components/navbar";

const workData = [
  {
    id: 1,
    title: "Technical Lead",
    company: "WebVeda",
    subTitle: "Remote | March 2024 - Currently Working",
    description: [
      `Designed and optimized high-converting landing pages for course offerings, increasing user engagement by 35% and contributing to a 11.18% conversion rate`,
      `Orchestrated the end-to-end automation of WhatsApp messaging for live classes, seamlessly managing 10K+ messages per month and mitigating manual intervention by 80%`,
      `Architected and deployed a robust checkout and payment infrastructure leveraging Razorpay and Stripe, facilitating 10K+ transactions monthly`,
      `Executed meticulous design audits using Hotjar, diagnosing friction points and implementing strategic UX enhancements that elevated session durations by 20% while curbing drop-off rates`,
      `Spearheaded the migration of 500,000+ user records and independently architected the complete payment and checkout infrastructure for "WebVeda 2.0," shipping the full platform relaunch with virtually zero downtime`,
      `Earned promotion to Tech Lead within 12 months of joining, then rebuilt the entire checkout flow from scratch over a single weekend after a 3x surge in checkout initiations against flat conversion rates exposed a broken funnel`,
      `Led the end-to-end migration from Graphy to TagMango's subscription and course infrastructure, completing every integration required for the relaunch while the engineering team scaled 3x to support the transition`,
    ],
  },
  {
    id: 2,
    title: "Founding Engineer",
    company: "IGC (India Genius Challenge)",
    subTitle: "Remote | May 2025 - Currently Working",
    description: [
      `Scaled the platform from 0 to 40K users in 4 months, sustaining 10K+ weekly users and 100,000+ quiz attempts`,
      `Built a dynamic quiz engine spanning 10K+ questions that delivers unique daily question sets, increasing engagement by ~35%`,
      `Designed an ELO ranking system for 40K users, reducing database load by ~60% through daily computation`,
      `Deployed a WhatsApp CLM reaching 10K users per day, cutting re-engagement costs by ~40%`,
    ],
  },
  {
    id: 3,
    title: "Youth Impactor",
    company: "1M1B",
    subTitle: "Remote | January 2021 - August 2021",
    description: [
      `Launched AgriCraft, a grassroots project leveraging simple tech tools to address stubble burning in a rural farming community.`,
      `Designed and implemented low-cost, mobile-based awareness solutions promoting sustainable alternatives to crop residue burning.`,
      `Engaged directly with 10 farmers, conducting personalized sessions that led to a measurable shift in practices, with 3 adopting non-burning methods during the harvest season`,
      `Led a small team of 3 volunteers to produce regional-language content, increasing local awareness and dialogue on sustainable farming.`,
    ],
  },
];

const work = () => {
  return (
    <>
      <Navbar />
      <main className="relative z-[1] min-h-screen w-full px-5 md:px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center pb-36 pt-36 md:pb-48 md:pt-52">
          <h1 className="mb-20 text-center font-display text-[clamp(4.5rem,10vw,8.5rem)] font-normal leading-none tracking-[-0.045em] md:mb-28">
            Work.
          </h1>
          <div className="flex w-full flex-col gap-6 md:gap-8">
          {workData.map((work, index) => (
            <section
              className="group relative w-full overflow-hidden rounded-[28px] border border-border bg-card/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-foreground/[0.13] md:p-12"
              key={work.id}
            >
              <span className="absolute right-6 top-5 font-mono text-xs tracking-[0.16em] text-muted-foreground/55 md:right-10 md:top-9">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-8 h-px w-12 bg-accent-green/70 transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-20 md:mb-10" />
              <h2 className="max-w-[18ch] font-display text-3xl font-normal leading-[1.05] tracking-[-0.02em] md:text-5xl">
                {work.title} <span className="text-muted-foreground">@</span>{" "}
                <span className="italic text-accent-green">{work.company}</span>
              </h2>
              <p className="mb-8 mt-3 text-sm text-muted-foreground md:mb-10">
                {work.subTitle}
              </p>
              <ul className="flex max-w-4xl flex-col gap-4">
                {work.description.map((description, index) => (
                  <li
                    className="flex gap-3 text-[0.95rem] leading-[1.7] text-muted-foreground md:text-base"
                    key={index}
                  >
                    <span
                      aria-hidden
                      className="mt-px select-none font-mono text-accent-green"
                    >
                      +
                    </span>
                    {description}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default work;
