import { cn } from "@/lib/utils";

/**
 * A full-bleed ground. Bands stack flush — the color change is the divider,
 * so neighbours must differ: cream → taupe → black, then repeat. The footer
 * is taupe, so a page never ends on a taupe band. `black` flips type and
 * outlines to cream; cards dropped inside stay cream unless they opt into the
 * ink variant.
 */
export default function SectionBand({
  tone = "cream",
  children,
  className,
  id,
}: {
  tone?: "cream" | "taupe" | "black";
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        tone === "cream" && "bg-bone-cream text-void-black",
        tone === "taupe" && "bg-ash-taupe text-void-black",
        tone === "black" && "band-black bg-void-black text-bone-cream",
        className
      )}
    >
      <div className='page-frame relative z-10 py-48 md:py-80'>{children}</div>
    </section>
  );
}
