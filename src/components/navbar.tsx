"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const navItemClass =
  "cursor-pointer h-8 rounded-full px-2 md:px-4 text-sm md:text-[15px] font-normal text-muted-foreground transition-colors bg-transparent hover:bg-transparent hover:text-foreground data-[state=on]:bg-foreground/10 data-[state=on]:text-foreground data-[spacing=0]:rounded-full data-[spacing=0]:first:rounded-full data-[spacing=0]:last:rounded-full";

const Navbar = ({ isHome = false }: { isHome?: boolean }) => {
  const [modal, setModal] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleValueChange = (value: string) => {
    if (value) {
      router.push(value);
    }
  };

  // Map pathname to toggle value
  const getToggleValue = () => {
    if (pathname === "/") return "/";
    if (pathname === "/work") return "/work";
    if (pathname === "/projects") return "/projects";
    return "";
  };

  return (
    <>
      <div className='z-30 fixed top-0 left-0 w-full flex justify-center items-center pt-3 px-3 md:pt-6 md:px-4 pointer-events-none'>
        <motion.div
          className='navbar pointer-events-auto flex max-w-full items-center gap-0.5 md:gap-2 rounded-2xl border border-border bg-card/90 backdrop-blur-md py-1.5 pl-2.5 pr-1 md:py-2 md:pl-4 md:pr-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
          initial={{
            y: isHome ? "-200%" : "0%",
            filter: isHome ? "blur(5px)" : "blur(0px)",
          }}
        >
          <Link href='/' className='mr-0.5 flex shrink-0 items-center gap-2 md:mr-2'>
            <span className='flex size-6 items-center justify-center rounded-lg bg-accent-green pb-0.5 font-display italic text-sm leading-none text-white'>
              S
            </span>
            <span className='hidden font-display italic text-lg leading-none text-foreground md:inline'>
              sharan
            </span>
          </Link>
          <ToggleGroup
            type='single'
            value={getToggleValue()}
            onValueChange={handleValueChange}
            className='flex flex-row items-center gap-0 md:gap-1 border-0 bg-transparent'
            variant='default'
          >
            <ToggleGroupItem value='/' variant='default' className={navItemClass}>
              Home
            </ToggleGroupItem>
            <ToggleGroupItem
              value='/work'
              variant='default'
              className={navItemClass}
            >
              Work
            </ToggleGroupItem>
            <ToggleGroupItem
              value='/projects'
              variant='default'
              className={navItemClass}
            >
              Projects
            </ToggleGroupItem>
            <p
              onClick={() => setModal(true)}
              className='cursor-pointer whitespace-nowrap rounded-full px-2 py-1.5 text-sm font-normal text-muted-foreground transition-colors hover:text-foreground md:px-4 md:text-[15px]'
            >
              Get in touch
            </p>
          </ToggleGroup>
        </motion.div>
      </div>
      <AnimatePresence>
        {modal && (
          <motion.div
            className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-background/60 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(false)}
          >
            <motion.div
              className='flex w-xs flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-card p-10 shadow-[0_24px_80px_rgba(0,0,0,0.5)] md:w-md'
              onClick={(e) => e.stopPropagation()}
            >
              <p className='font-display text-2xl italic text-foreground'>
                Hit me up at
              </p>
              <motion.a
                href='mailto:devel.sharan.2003@gmail.com'
                whileHover='hover'
                className='group relative inline-block cursor-pointer text-muted-foreground transition-colors hover:text-foreground'
              >
                devel.sharan.2003@gmail.com
                <motion.span
                  className='absolute bottom-0 left-0 h-[1px] w-0 bg-accent-green'
                  variants={{
                    hover: {
                      width: "100%",
                      transition: { duration: 0.3, ease: "easeOut" },
                    },
                  }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
