import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative pt-28">
      <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-950 pointer-events-none" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/40 px-3 py-1 text-xs text-emerald-200/90 backdrop-blur">
              Trusted, modern, precise
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Expert accounting for growing businesses
            </h2>
            <p className="mt-4 text-emerald-100/90 text-lg">
              From bookkeeping to tax optimization, we handle the numbers so you can focus on building your company.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-gradient-to-r from-emerald-400 to-lime-400 px-5 py-3 text-slate-900 font-semibold shadow hover:opacity-95 transition">
                Book a free consultation
              </a>
              <a href="#services" className="rounded-xl border border-emerald-400/30 bg-slate-800/60 px-5 py-3 text-emerald-100 hover:bg-slate-800/80 transition">
                Our services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
