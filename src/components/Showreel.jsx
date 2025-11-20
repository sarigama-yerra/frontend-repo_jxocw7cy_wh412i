import { motion } from 'framer-motion'

const videos = [
  {
    title: 'Hyperlapse City — Brand Film',
    thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Liquid Neon — Product Launch',
    thumb: 'https://images.unsplash.com/photo-1581093588401-16ec8a3fa4bf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Futura Drift — Fashion Spot',
    thumb: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Showreel() {
  return (
    <section id="work" className="relative bg-slate-950 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(168,85,247,0.25),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(34,211,238,0.25),transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Selected Work</h2>
            <p className="text-slate-300/80 mt-2 max-w-xl">A curated reel of commercial edits — blending rhythm, grade, and sound design into bold visual stories.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 hover:bg-white/10">Request a quote</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22,1,0.36,1] }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img src={v.thumb} alt={v.title} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-80" />
              <div className="absolute bottom-0 p-4">
                <h3 className="text-white font-semibold drop-shadow-lg">{v.title}</h3>
                <p className="text-slate-300/80 text-sm">Play • 0:30</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-medium shadow-[0_0_20px_rgba(34,211,238,0.35)]">Preview</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
