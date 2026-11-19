export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 text-center">
      {/* Decorative background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl"
      />

      <div className="relative flex flex-col items-center gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-indigo-200">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
          Coming Soon
        </span>

        <h1 className="bg-linear-to-r from-white via-indigo-200 to-fuchsia-300 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-8xl">
          Siva_con
        </h1>

        <p className="max-w-md text-base leading-7 text-slate-400 sm:text-lg">
          Something exciting is on the way. We&apos;re building something
          special &mdash; stay tuned.
        </p>
      </div>

      <footer className="absolute bottom-6 text-xs text-slate-600">
        &copy; 2026 Siva_con. All rights reserved.
      </footer>
    </main>
  );
}
