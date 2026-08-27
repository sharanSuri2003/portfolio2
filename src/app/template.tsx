"use client";

import { usePathname } from "next/navigation";

/**
 * Route transition. A short crossfade only — no slide, no scale.
 *
 * The design is print, not app: the spec caps interaction transitions at about
 * 150ms, and navigation is the single most repeated action on the site. Every
 * millisecond here is paid on every click, so this stays at the floor and gets
 * out of the way. CSS rather than a JS tween because it fires exactly while the
 * browser is painting the incoming route.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className='page-enter'>
      {children}
    </div>
  );
}
