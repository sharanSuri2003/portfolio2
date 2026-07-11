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
        <div className="mx-auto flex w-full max-w-3xl flex-col items-start pt-28 pb-28 md:pt-44 md:pb-40">
          <h1 className="mb-10 font-display text-5xl font-normal tracking-[-0.02em] md:mb-16 md:text-6xl">
            Work.
          </h1>
          {workData.map((work) => (
            <section
              className="mb-6 w-full rounded-[20px] border border-border bg-card p-5 md:mb-8 md:p-10"
              key={work.id}
            >
              <h2 className="font-display text-2xl font-normal md:text-3xl">
                {work.title} <span className="text-muted-foreground">@</span>{" "}
                <span className="italic text-accent-green">{work.company}</span>
              </h2>
              <p className="mt-2 mb-6 text-sm text-muted-foreground">
                {work.subTitle}
              </p>
              <ul className="flex flex-col gap-3">
                {work.description.map((description, index) => (
                  <li
                    className="flex gap-3 text-[0.95rem] leading-[1.6] text-muted-foreground"
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
      </main>
    </>
  );
};

export default work;
