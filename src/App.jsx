import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Subtle noise overlay for cinematic texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />
      <Hero />
      <Showreel />
      <Services />
      <Contact />

      {/* Footer */}
      <footer className="relative bg-slate-950 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,211,238,0.15),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} MotionCraft — Premium video editing portfolio</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#work" className="text-slate-300/90 hover:text-cyan-300 transition-colors">Work</a>
            <span className="text-slate-600">•</span>
            <a href="#services" className="text-slate-300/90 hover:text-cyan-300 transition-colors">Services</a>
            <span className="text-slate-600">•</span>
            <a href="#contact" className="text-slate-300/90 hover:text-cyan-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
