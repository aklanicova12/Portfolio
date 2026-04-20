import { motion } from 'motion/react';

export default function Closure() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated Image Background */}
      <img
        src="/clouds2.jpg"
        alt="Clouds background"
        className="absolute inset-0 w-full h-full object-cover z-0 animate-slow-rise"
      />
      
      {/* Gradient Overlay for top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

      {/* Quote Box (Premium Glassmorphism) */}
      <div className="relative z-20 bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-xl p-10 max-w-4xl text-center mx-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="space-y-6"
        >
          <p className="font-display italic text-4xl md:text-6xl text-slate-900 tracking-tight">
            "Education is not something you can finish."
          </p>
          <p className="font-sans uppercase tracking-[0.4em] text-xs text-slate-900 font-bold">
            — Isaac Asimov
          </p>
        </motion.div>
      </div>
    </section>
  );
}
