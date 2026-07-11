import Navbar from "@/components/navbar";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className='relative z-[1] flex min-h-screen w-full flex-col items-center justify-center px-6 text-center'>
        <h1 className='font-display text-6xl font-normal tracking-[-0.02em] md:text-7xl'>
          Blog.
        </h1>
        <p className='mt-6 max-w-[34rem] text-[1.1rem] leading-[1.6] text-muted-foreground'>
          Words are on their way. Slowly, deliberately.
        </p>
      </main>
    </>
  );
}
