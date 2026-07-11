"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if pathname changed (page transition)
    // Skip on initial mount (when prevPathname is null)
    if (prevPathname.current !== null && prevPathname.current !== pathname) {
      // Disable scrolling when transition starts
      document.body.style.overflowY = "hidden";
      
      // Clear any existing timeout
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      
      // Re-enable scrolling after both exit (0.4s) and enter (0.5s) animations complete
      // Add small buffer for safety
      animationTimeoutRef.current = setTimeout(() => {
        document.body.style.overflowY = "";
      }, 400 + 500 + 50); // exit duration + enter duration + buffer
    }
    
    // Update previous pathname
    prevPathname.current = pathname;

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

