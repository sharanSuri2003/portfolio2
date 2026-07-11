"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const navItemClass =
  "cursor-pointer h-8 rounded-xl px-2 md:px-4 text-[13px] md:text-sm font-medium text-muted-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-transparent hover:bg-transparent hover:text-foreground data-[state=on]:bg-foreground/[0.09] data-[state=on]:text-foreground data-[state=on]:shadow-[inset_0_0_0_1px_rgba(244,239,230,0.035)] data-[spacing=0]:rounded-xl data-[spacing=0]:first:rounded-xl data-[spacing=0]:last:rounded-xl";

const Navbar = ({ isHome = false }: { isHome?: boolean }) => {
  const [modal, setModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!modal) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [modal]);

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

  const contactModal =
    mounted &&
    createPortal(
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/70 px-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(false)}
          >
            <motion.div
              className="flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-[28px] border border-border bg-card p-8 text-center shadow-[0_32px_100px_rgba(0,0,0,0.65)] md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-display text-3xl italic tracking-[-0.02em] text-foreground">
                Hit me up at
              </p>
              <motion.a
                href="mailto:devel.sharan.2003@gmail.com"
                whileHover="hover"
                className="group relative inline-block cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
              >
                devel.sharan.2003@gmail.com
                <motion.span
                  className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent-green"
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
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      <div className="fixed left-0 top-0 z-30 flex w-full items-center justify-center px-3 pt-3 pointer-events-none md:px-4 md:pt-6">
        <motion.div
          className="navbar pointer-events-auto flex max-w-full items-center gap-0.5 rounded-[18px] border border-border bg-card/80 py-1.5 pl-2.5 pr-1 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:gap-2 md:py-2 md:pl-4 md:pr-3"
          initial={{
            y: isHome ? "-200%" : "0%",
            filter: isHome ? "blur(5px)" : "blur(0px)",
          }}
        >
          <Link
            href="/"
            className="mr-0.5 flex shrink-0 items-center gap-2 md:mr-2"
          >
            <span className="flex size-6 rotate-[-3deg] items-center justify-center rounded-[9px] bg-accent-green pb-0.5 font-display text-sm italic leading-none text-white shadow-[0_0_18px_rgba(34,197,94,0.22)]">
              S
            </span>
            <span className="hidden font-display text-lg italic leading-none tracking-[-0.02em] text-foreground md:inline">
              sharan
            </span>
          </Link>
          <ToggleGroup
            type="single"
            value={getToggleValue()}
            onValueChange={handleValueChange}
            className="flex flex-row items-center gap-0 md:gap-1 border-0 bg-transparent"
            variant="default"
          >
            <ToggleGroupItem
              value="/"
              variant="default"
              className={navItemClass}
            >
              Home
            </ToggleGroupItem>
            <ToggleGroupItem
              value="/work"
              variant="default"
              className={navItemClass}
            >
              Work
            </ToggleGroupItem>
            <ToggleGroupItem
              value="/projects"
              variant="default"
              className={navItemClass}
            >
              Projects
            </ToggleGroupItem>
            <p
              onClick={() => setModal(true)}
              className="cursor-pointer whitespace-nowrap rounded-xl px-2 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors duration-500 hover:text-foreground md:px-4 md:text-sm"
            >
              Get in touch
            </p>
          </ToggleGroup>
        </motion.div>
      </div>
      {contactModal}
    </>
  );
};

export default Navbar;
