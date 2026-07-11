"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Dashboard from "@/components/dashboard";
import { motion, useAnimate, stagger } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Trophy, Zap } from "lucide-react";
import Link from "next/link";

const page = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animations = async (duration: number) => {
      await animate(
        ".name",
        { opacity: 1, y: 0 },
        {
          duration: duration * 0.8,
          ease: "easeIn",
        }
      );
      await animate(
        ".description",
        { opacity: 1, y: 0, filter: "blur(0px)" },
        {
          duration: duration * 0.1,
          type: "spring",
          stiffness: 50,
          delay: stagger(duration * 0.05),
        }
      );
      await animate(
        ".wv",
        { opacity: 1, filter: "blur(0px)" },
        { duration: duration * 0.5 }
      );
      await animate(
        ".resumebutton",
        { opacity: 1 },
        { duration: duration * 0.5 }
      );
      animate(
        ".navbar",
        { y: 0 },
        { duration: duration * 0.4, ease: "easeIn" }
      );
      await animate(
        ".navbar",
        { filter: "blur(0px)" },
        { duration: duration * 0.5 }
      );
      // Chips land last — a sticker being pressed onto the sentence
      await animate(
        ".chip",
        { opacity: 1, scale: [1.25, 0.96, 1] },
        { duration: duration * 0.45, ease: [0.22, 1, 0.36, 1] }
      );
      sessionStorage.setItem("isLoaded", "true");
    };
    if (sessionStorage.getItem("isLoaded") === "true") {
      animations(0);
      return;
    }
    animations(1);
  }, []);

  const description =
    "Engineer into breaking stuff down, building web vibes, and vibing with design sometimes.";
  const words = description.split(" ");

  return (
    <div className='w-full' ref={scope}>
      <Navbar isHome={true} />
      <div className='relative z-[1] flex min-h-[92svh] w-full flex-col items-center justify-center px-4 py-24 md:py-0'>
        <div className='flex w-full max-w-4xl flex-col items-center justify-center gap-6'>
          <h1 className='text-center font-display font-normal leading-[1.05] tracking-[-0.02em] text-[clamp(3.5rem,8vw,7.5rem)]'>
            <motion.span className='name mr-[0.22em] inline-block opacity-0'>
              Sharan
            </motion.span>
            <motion.span className='name inline-block' initial={{ opacity: 0 }}>
              <span className='inline-block rotate-[-2deg] align-baseline'>
                <motion.span
                  className='chip inline-flex items-center gap-[0.14em] rounded-[18px] bg-chip-violet px-[0.28em] py-[0.02em] italic text-accent-violet'
                  initial={{ opacity: 0, scale: 1.25 }}
                >
                  <Sparkles className='size-4 md:size-5' />
                  Suri
                </motion.span>
              </span>
              .
            </motion.span>
          </h1>
          <p className='flex max-w-[34rem] flex-row flex-wrap justify-center gap-x-1.5 gap-y-1 px-4 text-center text-[1.1rem] leading-[1.6] text-muted-foreground md:px-0'>
            {words.map((word, index) => (
              <motion.span
                key={index}
                className='description'
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              >
                {word}
              </motion.span>
            ))}
          </p>

          <motion.p
            className='wv flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 px-2 text-center text-[1.05rem] text-muted-foreground'
            initial={{ opacity: 0, filter: "blur(2px)" }}
          >
            <motion.span
              layout
              className='group relative inline-block cursor-pointer text-foreground'
              whileHover='hover'
            >
              <Link href='/projects'>Fullstack</Link>
              <motion.span
                className='absolute bottom-0 left-0 h-[1px] w-0 bg-accent-green'
                variants={{
                  hover: {
                    width: "100%",
                    transition: { duration: 0.3, ease: "easeOut" },
                  },
                }}
              />
            </motion.span>
            <span className='inline-block'>@</span>
            <span className='inline-block rotate-[1.5deg] align-middle'>
              <motion.span
                className='chip inline-flex cursor-pointer items-center gap-1.5 rounded-[14px] bg-chip-peach px-2.5 py-0.5 font-display text-[1.15rem] italic text-chip-peach-ink transition-transform duration-300 hover:scale-[1.04]'
                initial={{ opacity: 0, scale: 1.25 }}
              >
                <Zap className='size-4' />
                <Link href='/work'>WebVeda</Link>
              </motion.span>
            </span>
            <span className='inline-block'>&</span>
            <span className='inline-block rotate-[-1.5deg] align-middle'>
              <motion.span
                className='chip inline-flex cursor-pointer items-center gap-1.5 rounded-[14px] bg-chip-violet px-2.5 py-0.5 font-display text-[1.15rem] italic text-accent-violet transition-transform duration-300 hover:scale-[1.04]'
                initial={{ opacity: 0, scale: 1.25 }}
              >
                <Trophy className='size-4' />
                <Link href='/work'>IGC</Link>
              </motion.span>
            </span>
          </motion.p>
          <motion.div
            className='resumebutton mt-4'
            initial={{ opacity: 0 }}
            onClick={() => window.open("/SharanResume5.0.pdf", "_blank")}
          >
            <Button size='lg' className='cursor-pointer'>
              View resume
              <ArrowUpRight className='size-5' />
            </Button>
          </motion.div>
        </div>
      </div>
      <Dashboard />
    </div>
  );
};

export default page;
