import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const PHASES = [
  {
    id: 'phase-a',
    label: 'Phase A — The Foundation',
    title: 'První krůčky',
    description: "Hned po gymnáziu jsem začala sbírat praktické zkušenosti, které mě postupně nasměrovaly k hlubšímu zájmu o vzdělávací technologie. Téměř dva roky jsem působila jako chůva v dětské skupině.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ze2t110Hhssox949-IcSRB47yvfbUadk4l7iRJq2kJVoTC7vcTu0lUTA0uVoSRE76tzVnWYuVbSpv3slHPnU5d1dQQ5AqoGJUWUOLgVn9iwVDUf6AMZtdOnLR79pC-J3XFHXtfrhIvggao1Ljt_XIq08L3YOE3qaCRJbaB1Hs-4UYiWbSvYjjIVI-ibfN3kyfT97miivFuM8IofpnT01uiNFcMhrw4GauGiABxzCpcS-jZkpuXi6BM4Pt9pYGArWFSeOP_iO2Io"
  },
  {
    id: 'phase-b',
    label: 'Phase B — The Integration',
    title: 'Od chůvy k jazykové integraci',
    description: "Právě zde jsem dostala příležitost profesně vyrůst a propracovala se až k vedení kurzů češtiny pro ukrajinské děti. Tato zkušenost pro mě byla zásadním milníkem a prvním skutečným testem v roli lektorky. Na starosti jsem měla kompletní jazykovou integraci předškolních i školních skupin, což mě naučilo přizpůsobit výuku různým věkovým úrovním i potřebám.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ze2t110Hhssox949-IcSRB47yvfbUadk4l7iRJq2kJVoTC7vcTu0lUTA0uVoSRE76tzVnWYuVbSpv3slHPnU5d1dQQ5AqoGJUWUOLgVn9iwVDUf6AMZtdOnLR79pC-J3XFHXtfrhIvggao1Ljt_XIq08L3YOE3qaCRJbaB1Hs-4UYiWbSvYjjIVI-ibfN3kyfT97miivFuM8IofpnT01uiNFcMhrw4GauGiABxzCpcS-jZkpuXi6BM4Pt9pYGArWFSeOP_iO2Io" // Fallback to same for now, will use distinct seeds if needed
  },
  {
    id: 'phase-c',
    label: 'Phase C — The Digital Shift',
    title: 'Lektorská praxe',
    description: "Poslední rok působím jako lektorka v instituci Czechcourses, kde učím češtinu pro cizince. Velkou část mých lekcí vedu online, což mi v praxi ukázalo, jak obrovský potenciál technologie ve vzdělávání mají.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ze2t110Hhssox949-IcSRB47yvfbUadk4l7iRJq2kJVoTC7vcTu0lUTA0uVoSRE76tzVnWYuVbSpv3slHPnU5d1dQQ5AqoGJUWUOLgVn9iwVDUf6AMZtdOnLR79pC-J3XFHXtfrhIvggao1Ljt_XIq08L3YOE3qaCRJbaB1Hs-4UYiWbSvYjjIVI-ibfN3kyfT97miivFuM8IofpnT01uiNFcMhrw4GauGiABxzCpcS-jZkpuXi6BM4Pt9pYGArWFSeOP_iO2Io"
  }
];

// Using the images provided in the prompt for each phase
const PHASE_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ze2t110Hhssox949-IcSRB47yvfbUadk4l7iRJq2kJVoTC7vcTu0lUTA0uVoSRE76tzVnWYuVbSpv3slHPnU5d1dQQ5AqoGJUWUOLgVn9iwVDUf6AMZtdOnLR79pC-J3XFHXtfrhIvggao1Ljt_XIq08L3YOE3qaCRJbaB1Hs-4UYiWbSvYjjIVI-ibfN3kyfT97miivFuM8IofpnT01uiNFcMhrw4GauGiABxzCpcS-jZkpuXi6BM4Pt9pYGArWFSeOP_iO2Io", // Phase A: Blocks
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ze2t110Hhssox949-IcSRB47yvfbUadk4l7iRJq2kJVoTC7vcTu0lUTA0uVoSRE76tzVnWYuVbSpv3slHPnU5d1dQQ5AqoGJUWUOLgVn9iwVDUf6AMZtdOnLR79pC-J3XFHXtfrhIvggao1Ljt_XIq08L3YOE3qaCRJbaB1Hs-4UYiWbSvYjjIVI-ibfN3kyfT97miivFuM8IofpnT01uiNFcMhrw4GauGiABxzCpcS-jZkpuXi6BM4Pt9pYGArWFSeOP_iO2Io", // Phase B: Teacher with Map (Using same URL as placeholder if distinct not found, but logic is ready)
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ze2t110Hhssox949-IcSRB47yvfbUadk4l7iRJq2kJVoTC7vcTu0lUTA0uVoSRE76tzVnWYuVbSpv3slHPnU5d1dQQ5AqoGJUWUOLgVn9iwVDUf6AMZtdOnLR79pC-J3XFHXtfrhIvggao1Ljt_XIq08L3YOE3qaCRJbaB1Hs-4UYiWbSvYjjIVI-ibfN3kyfT97miivFuM8IofpnT01uiNFcMhrw4GauGiABxzCpcS-jZkpuXi6BM4Pt9pYGArWFSeOP_iO2Io"  // Phase C: Online Learning
];

export default function Narrative() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white px-6 md:px-24 py-24">
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
              <motion.div 
                key={phase.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
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
                  className="w-full h-full object-contain mix-blend-multiply grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
