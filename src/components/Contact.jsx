import { Mail, Phone, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Get in touch</h3>
            <p className="mt-3 text-emerald-100/80">Tell us about your business and we’ll prepare a tailored proposal.</p>

            <div className="mt-8 space-y-4">
              <a href="mailto:office@example.com" className="flex items-center gap-3 text-emerald-100 hover:text-white">
                <Mail className="h-5 w-5 text-emerald-400" /> office@example.com
              </a>
              <a href="tel:+000000000" className="flex items-center gap-3 text-emerald-100 hover:text-white">
                <Phone className="h-5 w-5 text-emerald-400" /> +00 000 000 000
              </a>
              <p className="flex items-center gap-3 text-emerald-100/80">
                <MapPin className="h-5 w-5 text-emerald-400" /> Str. Example 12, City, Country
              </p>
            </div>
          </div>

          <form className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 shadow-lg">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-emerald-100/80">First name</label>
                <input className="mt-1 w-full rounded-lg border border-emerald-400/30 bg-slate-800/80 px-3 py-2 text-white placeholder-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm text-emerald-100/80">Last name</label>
                <input className="mt-1 w-full rounded-lg border border-emerald-400/30 bg-slate-800/80 px-3 py-2 text-white placeholder-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Doe" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-emerald-100/80">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-emerald-400/30 bg-slate-800/80 px-3 py-2 text-white placeholder-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-emerald-100/80">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-emerald-400/30 bg-slate-800/80 px-3 py-2 text-white placeholder-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="How can we help?" />
              </div>
            </div>
            <button type="button" className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-400 to-lime-400 px-5 py-3 text-slate-900 font-semibold shadow hover:opacity-95 transition">
              Send message
            </button>
            <p className="mt-3 text-center text-xs text-emerald-100/60">We usually reply within one business day.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
