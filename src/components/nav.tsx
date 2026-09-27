"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/content";

/**
 * Logo left, pills in the middle, the filled resume action on the right.
 * Below md the pills collapse behind the plus badge — the row does not wrap
 * into a second line and start competing with the display type.
 */
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className='border-b border-void-black bg-bone-cream text-void-black'>
      <nav
        aria-label='Primary'
        className='page-frame flex h-[64px] items-center gap-12'
      >
        <Link href='/' className='logo-mark' aria-label={site.name}>
          S
        </Link>

        <ul className='hidden flex-1 items-center justify-center gap-4 md:flex'>
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn("pill", isActive(item.href) ? "" : "pill-outline")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='ml-auto flex items-center gap-8 md:ml-0'>
          <a
            href={site.resume}
            target='_blank'
            rel='noopener noreferrer'
            className='pill'
          >
            Resume
          </a>
          <button
            type='button'
            className='logo-mark md:hidden'
            aria-expanded={open}
            aria-controls='nav-overflow'
            onClick={() => setOpen((value) => !value)}
          >
            <span className='sr-only'>{open ? "Close menu" : "Open menu"}</span>
            {open ? "×" : "+"}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id='nav-overflow'
          className='border-t border-void-black px-16 py-16 md:hidden'
        >
          <ul className='flex flex-col gap-8'>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "pill w-full",
                    isActive(item.href) ? "" : "pill-outline"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
