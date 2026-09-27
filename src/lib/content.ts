/**
 * Single source of truth for everything the site says about Sharan.
 * Pages are layout; this file is content.
 */

export const site = {
  name: "Sharan Suri",
  first: "Sharan",
  last: "Suri",
  role: "Fullstack Engineer",
  email: "devel.sharan.2003@gmail.com",
  resume: "/SharanResume5.0.pdf",
  location: "Remote, India",
  github: "https://github.com/Sharan420",
  linkedin: "https://www.linkedin.com/in/sharan-suri",
} as const;

export const nav = [
  { label: "Index", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
] as const;

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  note: string;
};

export const stats: Stat[] = [
  {
    value: 500,
    suffix: "K+",
    label: "User records migrated",
    note: "WebVeda 2.0 relaunch with virtually zero downtime",
  },
  {
    value: 40,
    suffix: "K",
    label: "Users in four months",
    note: "IGC, from a cold start to 10K weekly actives",
  },
  {
    value: 100,
    suffix: "K+",
    label: "Quiz attempts served",
    note: "Dynamic engine across a 10K-question bank",
  },
  {
    value: 11.18,
    suffix: "%",
    decimals: 2,
    label: "Checkout conversion",
    note: "Funnel rebuilt from scratch over a single weekend",
  },
];

export type Role = {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
  points: string[];
};

export const roles: Role[] = [
  {
    id: "01",
    company: "WebVeda",
    title: "Technical Lead",
    period: "Mar 2024 to Present",
    location: "Remote",
    summary:
      "Owns checkout, payments and the platform relaunch for an education business moving 10K+ transactions a month.",
    stack: [
      "Next.js",
      "Node.js",
      "Postgres",
      "Razorpay",
      "Stripe",
      "WhatsApp API",
    ],
    points: [
      "Designed and optimized high-converting landing pages for course offerings, increasing user engagement by 35% and contributing to a 11.18% conversion rate.",
      "Orchestrated the end-to-end automation of WhatsApp messaging for live classes, managing 10K+ messages per month and cutting manual intervention by 80%.",
      "Architected and deployed a checkout and payment infrastructure on Razorpay and Stripe, facilitating 10K+ transactions monthly.",
      "Executed design audits using Hotjar, diagnosing friction points and shipping UX changes that lifted session durations by 20% while curbing drop-off.",
      "Spearheaded the migration of 500,000+ user records and independently architected the payment and checkout infrastructure for WebVeda 2.0, shipping the full platform relaunch with virtually zero downtime.",
      "Promoted to Tech Lead within 12 months, then rebuilt the entire checkout flow from scratch over a single weekend after a 3x surge in checkout initiations against flat conversion exposed a broken funnel.",
      "Led the end-to-end migration from Graphy to TagMango's subscription and course infrastructure while the engineering team scaled 3x.",
    ],
  },
  {
    id: "02",
    company: "IGC",
    title: "Founding Engineer",
    period: "May 2025 to Present",
    location: "Remote",
    summary:
      "India Genius Challenge. Zero to 40K users in four months on a quiz engine and ELO ladder built to take the load.",
    stack: ["React", "Node.js", "Redis", "ELO systems", "WhatsApp CLM"],
    points: [
      "Scaled the platform from 0 to 40K users in 4 months, sustaining 10K+ weekly users and 100,000+ quiz attempts.",
      "Built a dynamic quiz engine spanning 10K+ questions that delivers unique daily question sets, increasing engagement by ~35%.",
      "Designed an ELO ranking system for 40K users, reducing database load by ~60% through daily computation.",
      "Deployed a WhatsApp CLM reaching 10K users per day, cutting re-engagement costs by ~40%.",
    ],
  },
  {
    id: "03",
    company: "1M1B",
    title: "Youth Impactor",
    period: "Jan 2021 to Aug 2021",
    location: "Remote",
    summary:
      "AgriCraft: low-cost mobile tooling against stubble burning in a rural farming community.",
    stack: ["Low-code tools", "Content", "Field research"],
    points: [
      "Launched AgriCraft, a grassroots project leveraging simple tech tools to address stubble burning in a rural farming community.",
      "Designed and implemented low-cost, mobile-based awareness solutions promoting sustainable alternatives to crop residue burning.",
      "Engaged directly with 10 farmers, conducting personalized sessions that led to a measurable shift in practices, with 3 adopting non-burning methods during the harvest season.",
      "Led a small team of 3 volunteers to produce regional-language content, increasing local awareness and dialogue on sustainable farming.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  discipline: string;
  year: string;
  description: string;
  image: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Siggy",
    discipline: "Automation · Web scraping",
    year: "2024",
    description:
      "A Selenium scraper that reads Swiggy menus and recommends what you can actually afford. Built because deciding what to eat on a budget is a search problem, not a taste problem.",
    image: "/siggy.png",
    stack: ["Selenium", "Python", "Flask", "React"],
    href: "https://github.com/Sharan420/siggy-frontend",
  },
  {
    id: "02",
    title: "Traffix",
    discipline: "Machine learning · Computer vision",
    year: "2023",
    description:
      "Keras classifies live traffic density off a Raspberry Pi camera feed and retimes the signal against it. Adaptive traffic regulation, assembled out of parts on a desk.",
    image: "/traffixpng.png",
    stack: ["Keras", "OpenCV", "Python", "Raspberry Pi"],
    href: "https://github.com/Sharan420/Traffic-Classifier",
  },
];
