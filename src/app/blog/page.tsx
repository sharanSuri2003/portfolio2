import Navbar from "@/components/navbar";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className='relative z-[1] flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-36 text-center'>
        <h1 className='font-display text-[clamp(5rem,14vw,11rem)] font-normal leading-none tracking-[-0.05em]'>
          Blog.
        </h1>
        <p className='mt-9 max-w-[34rem] text-[1.05rem] leading-[1.7] text-muted-foreground md:text-[1.15rem]'>
          Words are{" "}
          <span className='inline-block rotate-[-1.5deg] rounded-[14px] border border-accent-violet/20 bg-chip-violet px-2.5 py-0.5 font-display text-[1.2em] italic text-accent-violet'>
            on their way
          </span>
          . Slowly, deliberately.
        </p>
      </main>
    </>
  );
}
