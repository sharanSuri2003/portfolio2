"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  LayoutDashboard,
  Briefcase,
  FolderGit2,
  Zap,
  Settings,
  Search,
  Bell,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const sidebarItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Work", icon: Briefcase, active: false },
  { label: "Projects", icon: FolderGit2, active: false },
  { label: "Automations", icon: Zap, active: false },
  { label: "Settings", icon: Settings, active: false },
];

const stats = [
  { label: "Sessions", value: "273,398", delta: "+20%", up: true },
  { label: "Conversion rate", value: "11.18%", delta: "+2.4%", up: true },
  { label: "IGC quiz players", value: "40,000+", delta: "+35%", up: true },
  { label: "Drop-off rate", value: "8.2%", delta: "-20%", up: false },
];

const planner = [
  { task: "Landing page revamp", tag: "Live", tone: "green" },
  { task: "IGC quiz engine", tag: "100K attempts", tone: "violet" },
  { task: "Checkout infrastructure", tag: "Razorpay + Stripe", tone: "peach" },
  { task: "WhatsApp automation", tag: "10K /mo", tone: "green" },
];

const tagTones: Record<string, string> = {
  green: "bg-[var(--surface-green-soft)] text-[#15803d]",
  violet: "bg-chip-violet text-[#6d28d9]",
  peach: "bg-[rgba(249,115,22,0.12)] text-chip-peach-ink",
};

// Engagement over 6 months — decorative but plausible
const chartPoints = "0,120 66,104 132,110 198,78 264,60 330,44 396,24";
const chartArea = `0,160 ${chartPoints} 396,160`;

const Dashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <section
      ref={ref}
      className='relative z-[1] mx-auto w-full max-w-7xl px-4 pb-36 md:px-6 md:pb-48'
    >
      <div className='mb-10 flex items-center justify-center gap-3 text-center md:mb-12'>
        <span className='h-px w-8 bg-accent-green/60' />
        <p className='font-display text-xl italic text-muted-foreground md:text-2xl'>
          What a month of shipping looks like.
        </p>
        <span className='h-px w-8 bg-accent-green/60' />
      </div>
      <motion.div
        style={{ y, opacity }}
        className='overflow-hidden rounded-[24px] border border-black/[0.07] bg-surface-light text-[var(--surface-light-ink)] shadow-[0_70px_160px_-24px_rgba(0,0,0,0.85),0_0_0_1px_rgba(244,239,230,0.04)]'
      >
        <div className='flex'>
          {/* Sidebar */}
          <aside className='hidden w-56 shrink-0 flex-col gap-1 border-r border-[var(--surface-light-line)] bg-[rgba(255,254,250,0.48)] p-4 md:flex lg:w-60'>
            <div className='mb-4 flex items-center gap-2 px-2'>
              <span className='flex size-6 rotate-[-3deg] items-center justify-center rounded-lg bg-accent-green pb-0.5 font-display text-sm italic leading-none text-white'>
                S
              </span>
              <span className='font-display italic text-lg leading-none'>
                sharan
              </span>
            </div>
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13.5px] ${
                  item.active
                    ? "bg-[var(--surface-green-soft)] font-medium text-[#15803d]"
                    : "text-[var(--surface-light-muted)]"
                }`}
              >
                <item.icon className='size-4' />
                {item.label}
              </div>
            ))}
          </aside>

          {/* Main */}
          <div
            className='min-w-0 flex-1'
            style={{
              backgroundImage:
                "radial-gradient(rgba(26,25,21,0.065) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            {/* Top bar */}
            <div className='flex items-center justify-between gap-4 border-b border-[var(--surface-light-line)] bg-surface-light/85 px-4 py-3 backdrop-blur md:px-6 md:py-3.5'>
              <div className='flex items-center gap-1 text-[13.5px] text-[var(--surface-light-muted)]'>
                sharan
                <ChevronRight className='size-3.5' />
                <span className='font-medium text-[var(--surface-light-ink)]'>overview</span>
              </div>
              <div className='hidden w-64 items-center gap-2 rounded-full border border-[var(--surface-light-line)] bg-[var(--surface-light-card)] px-3.5 py-1.5 text-[13px] text-[var(--surface-light-muted)] shadow-[0_4px_20px_rgba(26,25,21,0.03)] md:flex'>
                <Search className='size-3.5' />
                Search anything
              </div>
              <div className='flex items-center gap-3'>
                <Bell className='size-4 text-[var(--surface-light-muted)]' />
                <span className='flex size-7 items-center justify-center rounded-full bg-accent-green pb-0.5 font-display text-sm italic text-white'>
                  S
                </span>
              </div>
            </div>

            {/* Stat cards */}
            <div className='grid grid-cols-2 gap-2.5 p-4 md:gap-4 md:p-6 lg:grid-cols-4'>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-2xl border border-[var(--surface-light-line)] bg-[var(--surface-light-card)] p-4 shadow-[0_8px_30px_rgba(26,25,21,0.025)] md:p-5'
                >
                  <p className='text-[12px] text-[var(--surface-light-muted)] md:text-[13px]'>
                    {stat.label}
                  </p>
                  <p className='mt-1.5 font-display text-[1.55rem] leading-none tracking-[-0.01em] md:text-[2.5rem]'>
                    {stat.value}
                  </p>
                  <span
                    className={`mt-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11.5px] font-medium ${
                      stat.up
                        ? "bg-[var(--surface-green-soft)] text-[#15803d]"
                        : "bg-[rgba(239,68,68,0.1)] text-[#b91c1c]"
                    }`}
                  >
                    {stat.up ? (
                      <ArrowUpRight className='size-3' />
                    ) : (
                      <ArrowDownRight className='size-3' />
                    )}
                    {stat.delta}
                  </span>
                </div>
              ))}
            </div>

            {/* Chart + planner */}
            <div className='grid gap-2.5 px-4 pb-4 md:gap-4 md:px-6 md:pb-6 lg:grid-cols-5'>
              <div className='rounded-2xl border border-[var(--surface-light-line)] bg-[var(--surface-light-card)] p-4 shadow-[0_8px_30px_rgba(26,25,21,0.025)] md:p-5 lg:col-span-3'>
                <div className='mb-4 flex items-center justify-between'>
                  <p className='text-[13.5px] font-medium'>Engagement</p>
                  <span className='rounded-full border border-[var(--surface-light-line)] px-2.5 py-1 text-[11.5px] text-[var(--surface-light-muted)]'>
                    Last 6 months
                  </span>
                </div>
                <svg
                  viewBox='0 0 396 160'
                  className='h-auto w-full'
                  preserveAspectRatio='none'
                >
                  {[32, 64, 96, 128].map((gy) => (
                    <line
                      key={gy}
                      x1='0'
                      y1={gy}
                      x2='396'
                      y2={gy}
                      stroke='rgba(26,25,21,0.06)'
                      strokeWidth='1'
                    />
                  ))}
                  <polygon points={chartArea} fill='rgba(34,197,94,0.12)' />
                  <polyline
                    points={chartPoints}
                    fill='none'
                    stroke='var(--accent-green)'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <circle cx='396' cy='24' r='4' fill='var(--accent-green)' />
                </svg>
                <div className='mt-2 flex justify-between text-[11px] text-[var(--surface-light-muted)]'>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
              <div className='rounded-2xl border border-[var(--surface-light-line)] bg-[var(--surface-light-card)] p-4 shadow-[0_8px_30px_rgba(26,25,21,0.025)] md:p-5 lg:col-span-2'>
                <p className='mb-4 text-[13.5px] font-medium'>Shipping</p>
                <div className='flex flex-col gap-2'>
                  {planner.map((item) => (
                    <div
                      key={item.task}
                      className='flex items-center justify-between gap-2 rounded-xl border border-[var(--surface-light-line)] px-3 py-2.5'
                    >
                      <span className='flex min-w-0 items-center gap-2.5 text-[13px]'>
                        <span className='size-1.5 shrink-0 rounded-full bg-accent-green' />
                        <span className='truncate'>{item.task}</span>
                      </span>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${tagTones[item.tone]}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Dashboard;
