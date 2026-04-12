import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const PHASES = [
  {
    id: 'phase-a',
    label: 'Phase A — The Foundation',
    title: 'První krůčky',
    description: "Hned po gymnáziu jsem začala sbírat praktické zkušenosti, které mě postupně nasměrovaly k hlubšímu zájmu o vzdělávací technologie. Téměř dva roky jsem působila jako chůva v dětské skupině.",
  },
  {
    id: 'phase-b',
    label: 'Phase B — The Integration',
    title: 'Od chůvy k jazykové integraci',
    description: "Právě zde jsem dostala příležitost profesně vyrůst a propracovala se až k vedení kurzů češtiny pro ukrajinské děti. Tato zkušenost pro mě byla zásadním milníkem a prvním skutečným testem v roli lektorky. Na starosti jsem měla kompletní jazykovou integraci předškolních i školních skupin, což mě naučilo přizpůsobit výuku různým věkovým úrovním i potřebám.",
  },
  {
    id: 'phase-c',
    label: 'Phase C — The Digital Shift',
    title: 'Lektorská praxe',
    description: "Poslední rok působím jako lektorka v instituci Czechcourses, kde učím češtinu pro cizince. Velkou část mých lekcí vedu online, což mi v praxi ukázalo, jak obrovský potenciál technologie ve vzdělávání mají.",
  }
];

// Using the images provided in the prompt for each phase
const PHASE_IMAGES = [
  "/image_phase_A.png_202604121316.jpeg", // Phase A: Blocks
  "/image.png_202604121316.jpeg",         // Phase B: Teacher with Map
  "/Phase_C_202604121316.jpeg"            // Phase C: Online Learning
];

export default function Narrative() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.narrative-section');
      // Trigger point is the middle of the viewport (top-center behavior)
      const triggerPoint = window.innerHeight / 2;
      
      let newActive = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // If the top of the section has crossed above the middle of the screen,
        // it becomes the active section. We add a small buffer (e.g., +100px) 
        // if we want it to trigger slightly before the exact pixel center, 
        // but exact center is usually best for "top-center".
        if (rect.top <= triggerPoint) {
          newActive = index;
        }
      });
      
      setActiveIndex(newActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-white px-6 md:px-24 py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        
        {/* Left: Scrolling Text Content */}
        <div className="relative">
          {/* Scrolling Progress Line */}
          <div className="absolute left-[-2rem] top-0 bottom-0 w-px border-l border-dashed border-primary/20">
            <div className="sticky top-1/2 w-4 h-4 -ml-2 rounded-full border border-secondary bg-white flex items-center justify-center">
              <div className="w-1 h-1 bg-secondary rounded-full"></div>
            </div>
          </div>

          {/* Content Stack */}
          <div className="space-y-48 md:space-y-96">
            {PHASES.map((phase, index) => (
              <div 
                key={phase.id}
                className="narrative-section space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="font-sans uppercase tracking-widest text-[10px] text-secondary/60">
                    {phase.label}
                  </span>
                  <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-none">
                    {phase.title}
                  </h2>
                  <p className="font-sans text-lg text-primary/80 leading-relaxed max-w-md">
                    {phase.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Sticky Illustration Container */}
        <div className="hidden md:block sticky top-32 h-fit">
          <div className="relative w-full aspect-square max-w-lg bg-surface-container-low/30 border border-outline-variant/10 p-12 overflow-hidden">
            <div className="grain-overlay absolute inset-0"></div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center p-20"
              >
                <img 
                  src={PHASE_IMAGES[activeIndex]} 
                  alt={`Illustration for ${PHASES[activeIndex].title}`} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to a placeholder if the uploaded image is not found
                    target.src = `https://picsum.photos/seed/edu-${activeIndex}/800/800`;
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
