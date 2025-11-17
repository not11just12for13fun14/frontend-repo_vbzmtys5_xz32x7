import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Ambient background gradient + subtle grid */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(34,197,94,0.05),rgba(190,242,100,0.04))]" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        {/* About section */}
        <section id="about" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About our office</h3>
              <p className="mt-4 text-emerald-100/85 leading-relaxed">
                Izabela Lazar Accounting Office blends modern tools with meticulous expertise. We support entrepreneurs and established companies with clear reporting, proactive guidance, and reliable compliance.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-emerald-400/20 bg-slate-900/60 p-4 text-emerald-100/90">
                  <p className="text-2xl font-bold text-white">10+ yrs</p>
                  <p>experience</p>
                </div>
                <div className="rounded-xl border border-emerald-400/20 bg-slate-900/60 p-4 text-emerald-100/90">
                  <p className="text-2xl font-bold text-white">100+ </p>
                  <p>clients served</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-lime-500/10 p-6">
              <ul className="space-y-4 text-emerald-100/85">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                  Accurate, on-time financials and clear communication
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                  Digital-first workflows with secure document handling
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                  Tailored tax strategies to keep more of what you earn
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="relative z-10 border-t border-emerald-400/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-100/70">© {new Date().getFullYear()} Izabela Lazar Accounting Office. All rights reserved.</p>
          <p className="text-xs text-emerald-100/50">Modern, precise, dependable.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
