import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="group inline-flex items-center gap-2"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-xl rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-cyan-400/30 to-blue-500/30" />
            <Sparkles className="relative w-7 h-7 text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
          </div>
          <span className="text-white font-semibold tracking-wide">
            MotionCraft
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: '#work', label: 'Work' },
            { href: '#services', label: 'Services' },
            { href: '#about', label: 'About' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-300/90 hover:text-cyan-300 transition-colors relative group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white text-sm font-medium shadow-[0_0_20px_rgba(0,255,255,0.25)] hover:shadow-[0_0_30px_rgba(0,255,255,0.35)] transition-shadow"
        >
          Contact
        </a>
      </div>
    </div>
  )
}
