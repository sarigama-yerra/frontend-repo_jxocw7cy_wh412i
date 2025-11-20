import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and grain overlays for cinematic vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.15] bg-[linear-gradient(0deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-slate-300">Cinematic Video Editing • Motion Design • Color Grading</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Cutting-edge visuals for bold brands
          </h1>

          <p className="mt-5 text-lg md:text-xl text-slate-300/90 max-w-2xl">
            I craft high-impact, story-driven edits with a focus on rhythm, pacing, and emotion. Premium, interactive, and motion-first.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] transition-all">
              View Selected Work
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 transition-colors">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
