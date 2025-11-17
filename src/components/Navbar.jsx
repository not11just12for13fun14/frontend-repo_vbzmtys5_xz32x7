import { Menu, Phone, Mail } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-slate-900/70 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-lime-400 ring-1 ring-white/10 shadow-md" />
              <div className="leading-tight">
                <p className="text-sm text-emerald-300/80">Accounting Office</p>
                <h1 className="text-base font-semibold text-white">Izabela Lazar</h1>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#services" className="text-emerald-100/80 hover:text-white transition">Services</a>
              <a href="#about" className="text-emerald-100/80 hover:text-white transition">About</a>
              <a href="#contact" className="text-emerald-100/80 hover:text-white transition">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+000000000" className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-100 hover:bg-emerald-500/20 transition">
                <Phone className="h-4 w-4" /> Call us
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-400 to-lime-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:opacity-95 transition">
                <Mail className="h-4 w-4" /> Get a quote
              </a>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/30 bg-slate-800/60 text-emerald-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
