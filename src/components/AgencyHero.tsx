import { motion } from 'motion/react';

export default function AgencyHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
      />
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <h1 className="font-display text-white text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9]">
            Logoisum
          </h1>
          <p className="font-sans text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide uppercase">
            Elevating visual narratives through cinematic precision.
          </p>
          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-5 bg-white text-black font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
              View Showreel
            </button>
            <button className="px-10 py-5 border border-white/30 text-white font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:border-white/60">
              Start Project
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle bottom fade to blend with next section if needed, 
          but user said "no color overlays", so I'll skip it unless it looks broken.
          Actually, I'll add a very small shadow to the text for readability. */}
      <style dangerouslySetInnerHTML={{ __html: `
        .text-shadow-premium {
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
      `}} />
    </section>
  );
}
