import { cn } from "@/lib/utils";

/**
 * The page terminator: flat Alarm Red flame silhouettes rising from the bottom
 * edge, with the black canvas showing through the gaps between tongues.
 *
 * It flows. Two silhouettes drift in opposite directions at different speeds,
 * and because both are the same solid red their union is a single shifting
 * edge — tongues appear to lick and merge rather than slide past each other.
 * That is what stops the band reading as an abrupt jagged cut: a static
 * sawtooth is a border, a moving one is a horizon.
 *
 * Seamless because each layer is drawn as two identical tiles across a
 * double-width viewBox, so translating exactly -50% lands the second tile
 * precisely where the first began and the loop has no seam to spot.
 *
 * CSS animation, not JS: predetermined motion that has to stay smooth while the
 * page is still loading, which is exactly where a rAF tween drops frames. Only
 * `transform` animates, so it composites on the GPU and never touches layout.
 */
const TILE_W = 1200;
const VIEW_H = 200;

type Tongue = { h: number; lean: number };

const FRONT: Tongue[] = [
  { h: 118, lean: 0.14 },
  { h: 176, lean: -0.1 },
  { h: 82, lean: 0.2 },
  { h: 150, lean: 0.08 },
  { h: 194, lean: -0.16 },
  { h: 96, lean: 0.12 },
  { h: 162, lean: -0.06 },
  { h: 126, lean: 0.18 },
];

const BACK: Tongue[] = [
  { h: 150, lean: -0.16 },
  { h: 92, lean: 0.12 },
  { h: 182, lean: 0.06 },
  { h: 112, lean: -0.2 },
  { h: 166, lean: 0.16 },
  { h: 78, lean: -0.08 },
  { h: 140, lean: 0.1 },
  { h: 188, lean: -0.14 },
];

function buildFlames(tongues: Tongue[]) {
  // Two identical tiles side by side — the second is what the first loops into.
  const tiled = [...tongues, ...tongues];
  const width = TILE_W / tongues.length;

  let path = `M0 ${VIEW_H}`;

  tiled.forEach(({ h, lean }, index) => {
    const x0 = index * width;
    const x1 = x0 + width;
    const tipX = x0 + width / 2 + lean * width;
    const tipY = VIEW_H - h;

    // Wide and low off the base, pulling in tight just under the tip, so each
    // tongue flares then tapers to a point instead of arcing over like a hill.
    path +=
      ` C${x0 + width * 0.3} ${VIEW_H - h * 0.32},` +
      `${tipX - width * 0.12} ${VIEW_H - h * 0.88},` +
      `${tipX} ${tipY}` +
      ` C${tipX + width * 0.1} ${VIEW_H - h * 0.84},` +
      `${x1 - width * 0.26} ${VIEW_H - h * 0.36},` +
      `${x1} ${VIEW_H}`;
  });

  return `${path} L${TILE_W * 2} ${VIEW_H} Z`;
}

const FRONT_PATH = buildFlames(FRONT);
const BACK_PATH = buildFlames(BACK);

function Layer({
  path,
  className,
}: {
  path: string;
  className: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${TILE_W * 2} ${VIEW_H}`}
      preserveAspectRatio='none'
      className={cn("absolute bottom-0 left-0 h-full w-[200%]", className)}
      fill='#ff4034'
      aria-hidden
    >
      <path d={path} />
    </svg>
  );
}

export default function FlameBand({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative h-[110px] w-full overflow-hidden leading-[0] md:h-[180px]",
        className
      )}
    >
      <Layer path={BACK_PATH} className='flame-drift-back' />
      <Layer path={FRONT_PATH} className='flame-drift-front' />
    </div>
  );
}
