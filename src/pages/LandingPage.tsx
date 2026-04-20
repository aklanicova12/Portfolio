import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from 'motion/react';
import { Lightbulb, BarChart3, Users, ArrowRight, Github } from 'lucide-react';
import { useRef, useEffect } from 'react';

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms - adjusted for a longer page
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 800]); // Deepest
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]); // Foreground up
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -600]); // Foreground up fast
  const y5 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Progress Bar Animation Logic
  const progressRef = useRef<HTMLDivElement>(null);
  const isProgressInView = useInView(progressRef, { once: true, margin: "-100px" });
  const progressValue = useMotionValue(0);
  const displayProgress = useTransform(progressValue, (v) => Math.round(v));

  useEffect(() => {
    if (isProgressInView) {
      animate(progressValue, 65, { duration: 2.5, ease: [0.22, 1, 0.36, 1] });
    }
  }, [isProgressInView, progressValue]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      {/* ==========================================
          SECTION 1: THE HERO (Thought Cloud)
          ========================================== */}
      <section className="relative min-h-screen bg-white flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
        
        {/* Pearlescent Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50/60 via-white to-white pointer-events-none z-0"></div>

        {/* Deep Background Typography (Behind Profile) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 flex justify-center"
          style={{ 
            // Soft mask to keep the immediate face area clear, but allow words near shoulders
            maskImage: 'radial-gradient(ellipse at 50% 45%, transparent 20%, black 50%)', 
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, transparent 20%, black 50%)' 
          }}
        >
          <div className="relative w-full max-w-[1400px] h-full">
            {/* TECHNOLOGIE */}
            <motion.div style={{ y: y1 }} className="absolute top-[15%] left-[5%] md:left-[10%]">
              <motion.div
                animate={{ x: [-50, 50, -50], y: [-5, 5, -5], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
                className="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 drop-shadow-[0_0_20px_rgba(99,102,241,0.2)] blur-[2px]"
              >
                TECHNOLOGIE
              </motion.div>
            </motion.div>

            {/* DATA */}
            <motion.div style={{ y: y2 }} className="absolute top-[35%] right-[5%] md:right-[10%]">
              <motion.div
                animate={{ x: [40, -40, 40], y: [5, -5, 5], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 38, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="text-[14vw] md:text-[9vw] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-300 drop-shadow-[0_10px_30px_rgba(244,63,94,0.2)] blur-[1px]"
              >
                DATA
              </motion.div>
            </motion.div>

            {/* VZDĚLÁVÁNÍ */}
            <motion.div style={{ y: y3 }} className="absolute top-[55%] left-[2%] md:left-[5%]">
              <motion.div
                animate={{ x: [-60, 60, -60], y: [-8, 8, -8], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 50, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="text-[13vw] md:text-[8.5vw] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-300 drop-shadow-[0_0_30px_rgba(168,85,247,0.2)] blur-[3px]"
              >
                VZDĚLÁVÁNÍ
              </motion.div>
            </motion.div>

            {/* EMPATIE */}
            <motion.div style={{ y: y4 }} className="absolute bottom-[25%] right-[2%] md:right-[8%]">
              <motion.div
                animate={{ x: [45, -45, 45], y: [-5, 5, -5], opacity: [0.18, 0.28, 0.18] }}
                transition={{ duration: 42, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="text-[11vw] md:text-[7.5vw] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-300 drop-shadow-[0_10px_30px_rgba(139,92,246,0.2)] blur-[1px]"
              >
                EMPATIE
              </motion.div>
            </motion.div>

            {/* INOVACE */}
            <motion.div style={{ y: y5 }} className="absolute bottom-[10%] left-[10%] md:left-[20%]">
              <motion.div
                animate={{ x: [-40, 40, -40], y: [6, -6, 6], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 48, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 drop-shadow-[0_0_20px_rgba(56,189,248,0.2)] blur-[2px]"
              >
                INOVACE
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hero Profile (Middle Layer) */}
        <div className="relative z-10 flex flex-col items-center mt-28">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[420px] md:max-w-[600px] flex justify-center mb-6"
          >
            {/* Subtle glow behind the person */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-10"></div>
            <img
              src="/AnnaKlanicová.png"
              alt="Anna Klanicová"
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.h2 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6 text-center"
          >
            Anna Klanicová
          </motion.h2>
          
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl"
          >
            {['EDTECH ENTHUSIAST', 'DATA ARCHITECT', 'LECTURER', 'MAKER'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-xs font-bold tracking-widest text-gray-600 shadow-sm border border-gray-200/50">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: THE JOURNEY (Violet Flow)
          ========================================== */}
      <section className="relative min-h-screen bg-gradient-to-b from-white via-purple-50/50 to-fuchsia-50/30 flex flex-col items-center py-32 px-6 overflow-hidden">
        
        {/* Liquid Gradient Background Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              x: ['-20%', '20%', '-20%'],
              y: ['-10%', '10%', '-10%'],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-[-10%] w-[800px] h-[800px] bg-purple-300/30 rounded-full blur-[120px] mix-blend-multiply"
          />
          <motion.div 
            animate={{ 
              x: ['20%', '-20%', '20%'],
              y: ['10%', '-10%', '10%'],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-[-10%] w-[700px] h-[700px] bg-pink-300/20 rounded-full blur-[100px] mix-blend-multiply"
          />
        </div>

        {/* Quote Card */}
        <div className="relative z-10 w-full max-w-5xl bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-12 md:p-20 shadow-[0_20px_80px_-15px_rgba(147,51,234,0.1)] border border-white/80 mb-24 text-center">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-purple-100/30 via-transparent to-pink-100/30 -z-10"></div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">Průvodkyně digitálním vzděláváním</h3>
          <p className="font-serif text-3xl md:text-5xl text-gray-900 leading-tight mb-8">
            „Měním své zkušenosti s dětmi v technologie, které učí a inspirují. Data tvoří kostru mých projektů, ale jejich duší je vždy lidský rozvoj.“
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Spojuji svět výchovy a vývoje. S laskavostí a na základě skutečných potřeb uživatelů.
          </p>
        </div>

        {/* Překladatelka světů */}
        <div className="relative z-10 w-full max-w-5xl mb-32">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Od empatie k technologiím</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-sm border border-white hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Lidské technologie</h4>
              <p className="text-gray-600 leading-relaxed">
                Vše začalo prací s dětmi a výukou češtiny pro cizince. Zjistila jsem, že technologie nejsou jen nástroj, ale způsob, jak výuku personalizovat a přiblížit každému studentovi na míru. Technologie musí sloužit lidem, ne naopak.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-sm border border-white hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-100 flex items-center justify-center mb-6 text-fuchsia-600 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Příběhy vyprávěné daty</h4>
              <p className="text-gray-600 leading-relaxed">
                V SQL nebo Pythonu nevidím jen kód, ale živé příběhy. Ať už jde o analýzu norského obchodu nebo vzdělávací metriky, mým cílem je měnit nepřehledná čísla ve srozumitelný děj, který pomáhá dělat lepší rozhodnutí.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-sm border border-white hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 transition-transform duration-300">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Tvorba od kódu po hmotu</h4>
              <p className="text-gray-600 leading-relaxed">
                Nezůstávám jen u obrazovky. Fascinuje mě proces designu v jakékoliv podobě – ať už tvořím databázovou architekturu , modeluji pro 3D tisk , nebo háčkuji. Znamená to pro mě nebát se experimentovat a měnit vize v realitu.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div 
          ref={progressRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-full p-4 md:p-6 shadow-[0_8px_30px_rgb(147,51,234,0.08)] border border-white flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[0_15px_50px_rgb(147,51,234,0.12)] transition-shadow duration-500"
        >
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="font-bold text-gray-900 tracking-widest text-sm whitespace-nowrap">KISK MAGISTR</span>
            <div className="hidden md:block w-px h-8 bg-gray-900/10"></div>
            <span className="text-xs text-gray-600 font-medium uppercase tracking-[0.15em] hidden md:block">STAV: PROPOJOVÁNÍ ZNALOSTÍ</span>
          </div>
          
          <div className="group relative flex-grow w-full max-w-xl flex items-center gap-4 cursor-pointer">
            {/* Tooltip */}
            <div className="absolute -top-12 left-[65%] -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs py-1.5 px-3 rounded-lg pointer-events-none whitespace-nowrap shadow-xl z-20">
              Zbývá 35 % do konce
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>

            <div className="h-3 w-full bg-purple-900/5 rounded-full overflow-hidden relative shadow-inner">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden"
                initial={{ width: "0%" }}
                animate={isProgressInView ? { width: "65%" } : { width: "0%" }}
                transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                />
              </motion.div>
            </div>
            <div className="text-xs font-bold text-gray-900 whitespace-nowrap flex items-center gap-1 min-w-[140px]">
              <motion.span>{displayProgress}</motion.span>
              <span>% JOURNEY COMPLETED</span>
            </div>
          </div>

          <div className="flex items-center gap-3 whitespace-nowrap bg-white/50 px-4 py-2 rounded-full border border-white/60">
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"
            ></motion.div>
            <span className="text-sm font-bold text-gray-900">Aktivní studium</span>
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          SECTION 3: THE ACCOMPLISHMENT (Light Mode Finale)
          ========================================== */}
      <section className="relative min-h-[80vh] bg-gradient-to-b from-white via-indigo-50/30 to-purple-100/40 flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
        
        {/* Soft Opalescent Floating Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              y: ['-5%', '5%', '-5%'],
              x: ['-2%', '2%', '-2%'],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              y: ['5%', '-5%', '5%'],
              x: ['2%', '-2%', '2%'],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[150px]"
          />
          <motion.div 
            animate={{ 
              x: ['-3%', '3%', '-3%'],
              y: ['-3%', '3%', '-3%'],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px]"
          />
        </div>

        {/* Final CTA Content with Glassmorphism */}
        <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/60 backdrop-blur-3xl border border-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
          >
            {/* Subtle inner highlight for the glass */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8 relative z-10">
              Připraveni inovovat?
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto relative z-10">
              Spojme pedagogickou teorii s technickou praxí a vytvořme vzdělávací zážitky, které mají skutečný dopad.
            </p>
            <a 
              href="mailto:aklanicova15@gmail.com"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#002147] text-white rounded-full font-bold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,33,71,0.4)] active:scale-95 z-10"
            >
              <span className="relative z-10">Kontaktovat</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            </a>
          </motion.div>
        </div>

        {/* Minimalist Footer */}
        <footer className="absolute bottom-0 left-0 w-full border-t border-white/20 py-6 px-6 md:px-12 z-20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a 
              href="https://medium.com/@aklanicova15" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.25 12c0-3.18 2.5-5.75 5.58-5.75s5.58 2.57 5.58 5.75-2.5 5.75-5.58 5.75-5.58-2.57-5.58-5.75z" />
                <path d="M14.25 12c0-3.04 1.23-5.5 2.75-5.5s2.75 2.46 2.75 5.5-1.23 5.5-2.75 5.5-2.75-2.46-2.75-5.5z" />
                <path d="M20.5 12c0-2.76.45-5 1-5s1 2.24 1 5-.45 5-1 5-1-2.24-1-5z" />
              </svg>
            </a>
            <a 
              href="https://github.com/aklanicova12" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]"
            >
              <Github size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-600/60 font-light tracking-wide">
            Kód, data a empatie. Anna Klanicová © 2026
          </p>
        </footer>
      </section>

    </motion.div>
  );
}

