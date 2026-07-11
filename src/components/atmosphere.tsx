import type { CSSProperties } from "react";

// Deterministic scatter — same on server and client, no hydration drift.
const GLYPHS: {
  c: string;
  top: string;
  left: string;
  size: string;
  o: number;
  delay: string;
  dur: string;
}[] = [
  { c: "+", top: "8%", left: "12%", size: "15px", o: 0.09, delay: "0s", dur: "9s" },
  { c: "x", top: "16%", left: "78%", size: "13px", o: 0.07, delay: "1.2s", dur: "11s" },
  { c: "=", top: "24%", left: "6%", size: "14px", o: 0.06, delay: "2.4s", dur: "8s" },
  { c: "@", top: "11%", left: "56%", size: "12px", o: 0.05, delay: "0.8s", dur: "12s" },
  { c: "#", top: "31%", left: "88%", size: "15px", o: 0.08, delay: "3.1s", dur: "10s" },
  { c: "+", top: "42%", left: "16%", size: "12px", o: 0.06, delay: "1.9s", dur: "9s" },
  { c: "x", top: "38%", left: "70%", size: "16px", o: 0.05, delay: "4.2s", dur: "13s" },
  { c: "=", top: "55%", left: "84%", size: "13px", o: 0.07, delay: "0.4s", dur: "8s" },
  { c: "@", top: "62%", left: "9%", size: "14px", o: 0.06, delay: "2.8s", dur: "11s" },
  { c: "#", top: "70%", left: "64%", size: "12px", o: 0.05, delay: "1.5s", dur: "10s" },
  { c: "+", top: "76%", left: "28%", size: "15px", o: 0.08, delay: "3.6s", dur: "9s" },
  { c: "x", top: "84%", left: "80%", size: "13px", o: 0.06, delay: "0.9s", dur: "12s" },
  { c: "=", top: "88%", left: "44%", size: "12px", o: 0.05, delay: "2.1s", dur: "8s" },
  { c: "#", top: "48%", left: "38%", size: "11px", o: 0.04, delay: "4.8s", dur: "14s" },
  { c: "@", top: "93%", left: "14%", size: "14px", o: 0.07, delay: "1.7s", dur: "10s" },
  { c: "+", top: "20%", left: "34%", size: "11px", o: 0.04, delay: "3.9s", dur: "13s" },
  { c: "x", top: "66%", left: "90%", size: "14px", o: 0.07, delay: "0.6s", dur: "9s" },
  { c: "=", top: "5%", left: "90%", size: "12px", o: 0.05, delay: "2.6s", dur: "11s" },
];

const Atmosphere = () => {
  return (
    <div
      aria-hidden
      className='pointer-events-none fixed inset-0 z-0 hidden dark:block'
    >
      {/* Smoky radial glow behind the headline area */}
      <div
        className='absolute left-1/2 top-[-14rem] h-[44rem] w-[85vw] max-w-4xl -translate-x-1/2'
        style={{
          background:
            "radial-gradient(closest-side, rgba(244, 239, 230, 0.07), transparent 72%)",
        }}
      />
      {GLYPHS.map((g, i) => (
        <span
          key={i}
          className='absolute select-none font-mono text-foreground'
          style={
            {
              top: g.top,
              left: g.left,
              fontSize: g.size,
              opacity: g.o,
              "--glyph-o": g.o,
              animation: `glyph-flicker ${g.dur} ease-in-out ${g.delay} infinite`,
            } as CSSProperties
          }
        >
          {g.c}
        </span>
      ))}
    </div>
  );
};

export default Atmosphere;
