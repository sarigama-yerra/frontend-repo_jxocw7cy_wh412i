import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(168,85,247,0.2),transparent_35%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          className="rounded-2xl p-8 md:p-10 bg-white/5 border border-white/10 backdrop-blur"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-extrabold">Let’s craft your next story</h3>
              <p className="text-slate-300/85 mt-2">Tell me about your project — brand, timeline, and goals. I’ll get back within 24 hours.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300/80">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Commercial</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Launch</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Social</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Music</span>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300/90 mb-1">Name</label>
                <input className="w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300/90 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300/90 mb-1">Project details</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Describe your goals, timeline, and references" />
              </div>
              <button className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)]">Send inquiry</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
