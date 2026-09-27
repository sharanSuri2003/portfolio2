/**
 * The one piece of motion. A black band of repeating cream type, flush to the
 * viewport edge, looping because the track is two identical halves.
 */
const PHRASE =
  "Fullstack engineer  —  Checkout and payments  —  Quiz engines  —  Ranking systems  —  Remote, India  —  ";

export default function Marquee() {
  return (
    <div
      aria-hidden
      className='flex h-[36px] items-center overflow-hidden border-y border-void-black bg-void-black text-bone-cream'
    >
      <div className='marquee-track flex w-max'>
        <p className='eyebrow shrink-0 whitespace-nowrap px-0'>{PHRASE.repeat(4)}</p>
        <p className='eyebrow shrink-0 whitespace-nowrap px-0'>{PHRASE.repeat(4)}</p>
      </div>
    </div>
  );
}
