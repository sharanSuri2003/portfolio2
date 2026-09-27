import Ribbon from "@/components/ribbon";
import Sticker from "@/components/sticker";
import { cn } from "@/lib/utils";

/**
 * The first poster. Bone-cream paper, the red tube behind the name, stickers
 * in the margins. The display word is the subject of the page; the tagline
 * and the actions are whatever the route passes as children.
 *
 * `lg` is for a single short word (Work, Lab, Notes). Two-line names stay on
 * the display step so they still fit the frame.
 *
 * The ribbon and two stickers hang off the headline itself, so they track the
 * word rather than the viewport and never land on the eyebrow or the tagline.
 * The other two sit in the far-right margin.
 */

const leading = { display: 0.8, lg: 0.76 } as const;

export default function Hero({
  eyebrow,
  lines,
  size = "display",
  children,
  className,
}: {
  eyebrow: string;
  lines: string[];
  size?: "display" | "lg";
  children?: React.ReactNode;
  className?: string;
}) {
  const sizeClass = size === "lg" ? "text-display-lg" : "text-display";

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-var(--chrome-offset))] w-full flex-col justify-center overflow-hidden bg-bone-cream text-void-black",
        className
      )}
    >
      <div aria-hidden className='pointer-events-none absolute inset-0'>
        <Sticker
          kind='coin'
          fill='taupe'
          rotate={8}
          className='top-[14%] right-[7%] hidden md:flex'
        />
        <Sticker
          kind='wallet'
          fill='black'
          rotate={-8}
          className='right-[12%] bottom-[12%] hidden md:flex'
        />
      </div>

      <div className='page-frame relative z-10 py-48 md:py-80'>
        <p className='eyebrow'>{eyebrow}</p>
        <div className='relative mt-16 w-fit'>
          <Ribbon band={lines.length * leading[size]} className={sizeClass} />
          <h1 className={cn("display-type relative max-w-[12ch] text-void-black", sizeClass)}>
            {lines.map((line) => (
              <span key={line} className='block'>
                {line}
              </span>
            ))}
          </h1>
          <Sticker
            kind='rocket'
            fill='red'
            rotate={-12}
            className='-top-24 -right-56 md:-right-48'
          />
          <Sticker
            kind='check'
            fill='cream'
            rotate={10}
            className={cn(
              "-right-80 -bottom-8 hidden",
              // A one-line word is too short for two stickers stacked
              // beside it until the display step has grown.
              lines.length > 1 ? "md:flex" : "xl:flex"
            )}
          />
        </div>
        {children ? <div className='mt-24 max-w-[40rem]'>{children}</div> : null}
      </div>
    </section>
  );
}
