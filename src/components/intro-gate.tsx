"use client";

import { useEffect } from "react";

/**
 * Plays the hero cascade once per session, then stops it.
 *
 * `template.tsx` keys on the pathname, so every route change remounts the tree
 * and restarts every CSS animation under it. Without this the ~1.2s intro is
 * paid on every single navigation — an entrance authored for first paint,
 * charged at the frequency of core navigation.
 *
 * Two halves, because there are two ways to arrive at a page:
 *  - a client-side navigation is handled by the effect below, which flips the
 *    attribute once the cascade has finished;
 *  - a hard reload is handled by INTRO_SCRIPT in the document head, which reads
 *    the same flag before first paint, so the finished state is never painted
 *    as a flash of animation first.
 *
 * That same script stamps `data-js` on <html>. Scroll reveals hang their hidden
 * state off it, so a document with no JavaScript renders every section visible
 * instead of a page of blank space waiting for an observer that will never run.
 */

/** Long enough to cover the slowest orbital mark plus its animation. */
const INTRO_MS = 2000;

export const INTRO_STORAGE_KEY = "sharansuri:intro";

/**
 * Runs synchronously in <head>, before the first paint. Kept as a string so it
 * can be inlined — a React effect would run too late to prevent the replay.
 */
export const INTRO_SCRIPT =
  `document.documentElement.dataset.js='1';` +
  `try{if(sessionStorage.getItem('${INTRO_STORAGE_KEY}'))document.documentElement.dataset.intro='done'}catch(e){}`;

export default function IntroGate() {
  useEffect(() => {
    if (document.documentElement.dataset.intro === "done") return;

    const timer = window.setTimeout(() => {
      document.documentElement.dataset.intro = "done";
      try {
        sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
      } catch {
        // Private mode and blocked storage are fine — the attribute is already
        // set for this page's lifetime, so the replay is still suppressed.
      }
    }, INTRO_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
