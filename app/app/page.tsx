'use client';
import dynamic from 'next/dynamic';

const Model3D = dynamic(() => import('@/components/Model3D'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-2 border-cyan-300 border-t-blue-600" />
    </div>
  ),
});

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090b] text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-88 w-88 rounded-full bg-blue-700/30 blur-[90px]" />
        <div className="absolute -bottom-24 -right-12 h-104 w-104 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.09),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-size-[44px_44px]" />
        <div className="scanline absolute inset-0 opacity-30" />
      </div>

      <main className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl gap-14 px-6 py-12 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <section className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-blue-200">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
            Available For New Projects
          </div>

          <h1 className="text-balance text-left font-black uppercase leading-[0.88] tracking-tight text-zinc-100">
            <span className="block text-5xl md:text-7xl lg:text-8xl">Almonti</span>
            <span className="block bg-linear-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-4xl text-transparent md:text-6xl lg:text-7xl">
              Jourdan
            </span>
            <span className="block text-2xl text-zinc-400 md:text-3xl lg:text-4xl">Manuputty</span>
          </h1>

          <p className="max-w-xl text-left text-sm leading-relaxed text-zinc-300 md:text-lg">
            Fullstack JavaScript developer crafting immersive web experiences with React,
            Next.js, Node.js, and interactive 3D interfaces that feel cinematic, fast,
            and memorable.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://portofolio.almontijourdanm.com"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(37,99,235,0.45)]"
            >
              Explore Portfolio
              <span className="transition group-hover:translate-x-1">-&gt;</span>
            </a>
            <a
              href="https://portofolio.almontijourdanm.com#contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-500/60 bg-zinc-900/50 px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-200 transition hover:border-blue-300/60 hover:bg-zinc-900"
            >
              Start A Project
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 text-left">
            <div className="rounded-2xl border border-zinc-700/70 bg-zinc-900/50 p-4 backdrop-blur-sm">
              <p className="text-2xl font-black text-cyan-300">5+</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400">Years</p>
            </div>
            <div className="rounded-2xl border border-zinc-700/70 bg-zinc-900/50 p-4 backdrop-blur-sm">
              <p className="text-2xl font-black text-cyan-300">30+</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400">Projects</p>
            </div>
            <div className="rounded-2xl border border-zinc-700/70 bg-zinc-900/50 p-4 backdrop-blur-sm">
              <p className="text-2xl font-black text-cyan-300">24/7</p>
              <p className="text-xs uppercase tracking-widest text-zinc-400">Curiosity</p>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="relative mx-auto h-87.5 w-full max-w-145 rounded-[2.2rem] border border-blue-300/20 bg-linear-to-b from-zinc-900/90 to-black/90 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.55)] md:h-125">
            <div className="absolute -inset-px rounded-[2.2rem] bg-linear-to-br from-blue-500/35 via-transparent to-cyan-400/20" />

            <div className="relative h-full overflow-hidden rounded-[1.8rem] border border-zinc-700/70 bg-black">
              <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 animate-[spin_14s_linear_infinite_reverse]" />
              <div className="absolute left-[22%] top-[24%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_24px_rgba(96,165,250,0.95)]" />
              <div className="absolute right-[20%] top-[30%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.95)]" />
              <div className="absolute bottom-[24%] left-[28%] h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_24px_rgba(147,197,253,0.95)]" />

              <Model3D modelPath="/dark_tesseract.glb" />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-zinc-400">
            <span className="rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-2">React</span>
            <span className="rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-2">Next.js</span>
            <span className="rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-2">Node.js</span>
            <span className="rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-2">Three.js</span>
          </div>
        </section>
      </main>

      <style jsx>{`
        .scanline {
          background-image: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.04) 0px,
            rgba(255, 255, 255, 0.04) 1px,
            transparent 1px,
            transparent 4px
          );
          background-size: 100% 4px;
        }
      `}</style>
    </div>
  );
}