import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows Tailwind's stock scale, so it reads a custom
 * `text-*` token as a text *colour* — which means `cn("text-heading",
 * "text-bone-cream")` silently drops the size and the element falls back to
 * 15px. Registering the design system's font-size names puts them in the right
 * conflict group, so a size and a colour can coexist and two sizes still
 * collapse to the last one.
 *
 * Keep this list in step with the `--text-*` tokens in globals.css.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "caption",
            "body",
            "subheading",
            "heading-sm",
            "heading",
            "display",
            "display-lg",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
