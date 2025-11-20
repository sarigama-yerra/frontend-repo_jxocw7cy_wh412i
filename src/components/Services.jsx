import { motion } from 'framer-motion'
import { Scissors, Palette, Waves, BadgeCheck } from 'lucide-react'

const items = [
  { icon: Scissors, title: 'Editorial & Rhythm', desc: 'Tight storytelling, pacing, and structure for maximum impact.' },
  { icon: Palette, title: 'Color & Finishing', desc: 'Cinematic grades, film emulation, and polish that feels premium.' },
  { icon: Waves, title: 'Motion & Sound', desc: 'Motion graphics and sound design for immersive narrative flow.' },
  { icon: BadgeCheck, title: 'Delivery & Mastering', desc: 'Broadcast-ready exports across platforms with QC and versions.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.5] bg-[radial-gradient(circle_at_10%_30%,rgba(34,211,238,0.25),transparent_25%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.25),transparent_25%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-10">Services</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22,1,0.36,1] }}
              className="relative rounded-2xl p-6 bg-white/5 border border-white/10 overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-fuchsia-600/25 to-cyan-500/25 blur-2xl" />
              <it.icon className="w-6 h-6 text-cyan-300 mb-4" />
              <h3 className="text-white font-semibold mb-1">{it.title}</h3>
              <p className="text-slate-300/85 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
