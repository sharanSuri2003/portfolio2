"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { nav } from "@/lib/content";

/**
 * Minimal by doctrine — navigation "never competes with the content". Compact
 * outline pills at caption size, centred, sitting directly on the black page.
 *
 * Kept to one row at every width: at 14px the four labels plus their padding
 * measure ~320px, which clears a 390px viewport once the gutter is paid. No
 * wrapping, no overlay, no hamburger — the whole point is that it stays quiet.
 */
export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label='Primary'
      className='fixed inset-x-0 top-0 z-50 flex justify-center px-20 py-20'
    >
      <ul className='flex items-center justify-center gap-8'>
        {nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "pill pill-compact px-12 text-caption font-extrabold uppercase tracking-[0.04em] md:px-15",
                isActive(item.href) ? "" : "pill-outline"
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
