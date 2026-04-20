import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        src="/clouds1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-white/10 z-0"></div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl p-10 max-w-4xl text-center">
          <p className="font-display italic text-3xl md:text-5xl text-slate-900 leading-relaxed tracking-tight">
            "You can't really know where you are going until you know where you have been."
          </p>
          <p className="mt-8 font-sans uppercase tracking-[0.2em] text-slate-900 text-xs font-semibold">
            — Maya Angelou
          </p>
        </div>
      </motion.div>

      {/* Perfect Hero Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
