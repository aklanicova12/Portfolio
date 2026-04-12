import { motion } from 'motion/react';

export default function Closure() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        muted
        autoPlay
        loop
        playsInline
      />
      
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative inline-block px-10 py-16 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
        >
          <p className="font-sans text-xl md:text-2xl text-white leading-relaxed font-light text-shadow-premium">
            Moje lektorská praxe se tak stala přirozeným odrazovým můstkem pro magisterskou profilaci Technologie ve vzdělávání. Chci umět tyto moderní nástroje nejen ovládat, ale i koncepčně integrovat do výuky tak, aby byl proces učení pro studenty co nejefektivnější.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="space-y-6"
        >
          <p className="font-display italic text-4xl md:text-6xl text-white tracking-tight text-shadow-premium">
            "Education is not something you can finish."
          </p>
          <p className="font-sans uppercase tracking-[0.4em] text-xs text-white/60 font-bold">
            — Isaac Asimov
          </p>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-shadow-premium {
          text-shadow: 0 2px 20px rgba(0,0,0,0.5);
        }
      `}} />
    </section>
  );
}
