export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-black text-white">
      {/* Animated grid background */}
      <div aria-hidden className="animated-grid pointer-events-none absolute inset-0" />

      {/* Film grain */}
      <div aria-hidden className="noise pointer-events-none absolute inset-0 opacity-[0.05]" />

      {/* Vignette */}
      <div aria-hidden className="vignette pointer-events-none absolute inset-0" />

      {/* Orbiting rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative h-[32rem] w-[32rem] sm:h-[44rem] sm:w-[44rem] lg:h-[52rem] lg:w-[52rem]">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="orbit absolute inset-0 rounded-full border border-dashed border-white/15">
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_4px_rgba(255,255,255,0.35)]" />
          </div>
          <div className="orbit-reverse absolute inset-[4rem] rounded-full border border-white/[0.06] sm:inset-[5.5rem]">
            <span className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-xs font-bold">
            S
          </span>
          <span className="text-[11px] uppercase tracking-[0.35em] text-white/60">
            Siva_con
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/30">
          Est. 2026
        </span>
      </header>

      {/* Center content */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <span className="fade-up inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-[10px] font-medium uppercase tracking-[0.4em] text-white/70 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          Coming Soon
        </span>

        <div className="fade-up mt-8 [animation-delay:150ms]">
          <h1 className="shimmer-text text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl">
            Siva_con
          </h1>
        </div>

        <p className="fade-up mt-6 max-w-md text-sm leading-7 text-white/45 [animation-delay:300ms] sm:text-base">
          Something exceptional is taking shape. A new experience is on its way
          &mdash; stay tuned.
        </p>

        <div className="fade-up mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/30 [animation-delay:450ms]">
          <span className="h-px w-10 bg-white/20" />
          Loading the future
          <span className="h-px w-10 bg-white/20" />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10">
        <div
          aria-hidden
          className="overflow-hidden border-y border-white/10 py-4 select-none"
        >
          <div className="marquee-track flex w-max">
            {Array.from({ length: 2 }).map((_, half) => (
              <div
                key={half}
                className="flex items-center gap-10 pr-10 text-[11px] uppercase whitespace-nowrap tracking-[0.5em] text-white/25"
              >
                {Array.from({ length: 4 }).map((_, set) => (
                  <span key={set} className="flex items-center gap-10">
                    <span>Siva_con</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>Coming Soon</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>Stay Tuned</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-5 text-[10px] uppercase tracking-[0.3em] text-white/25 sm:px-10">
          <span>&copy; 2026 Siva_con</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </main>
  );
}
