import { CheckCircle, Shield, BarChart3, Calculator } from 'lucide-react'

const services = [
  {
    icon: Calculator,
    title: 'Full-service bookkeeping',
    desc: 'Monthly bookkeeping, reconciliations, payroll, and VAT handling with precision and timeliness.'
  },
  {
    icon: BarChart3,
    title: 'Tax strategy & filings',
    desc: 'Proactive tax planning, quarterly estimates, and on-time filings for businesses and professionals.'
  },
  {
    icon: Shield,
    title: 'Compliance & audits',
    desc: 'Regulatory compliance, audit support, and documentation prepared to the highest standards.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What we do</h3>
          <p className="mt-3 text-emerald-100/80">Clear, reliable accounting tailored to your business stage.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/15 p-3 ring-1 ring-emerald-400/30">
                  <Icon className="h-6 w-6 text-emerald-300" />
                </div>
                <h4 className="text-lg font-semibold text-white">{title}</h4>
              </div>
              <p className="mt-3 text-emerald-100/80 text-sm">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-emerald-100/70">
                <li className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Expert guidance</li>
                <li className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Transparent pricing</li>
                <li className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> On-time delivery</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
