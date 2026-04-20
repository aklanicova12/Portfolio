import { Calendar, Network, Puzzle } from 'lucide-react';
import { motion } from 'motion/react';

const CARDS = [
  {
    icon: Calendar,
    title: 'Efektivní plánování',
    description: 'Od strukturování lekce až po rychlou tvorbu interaktivních podkladů.',
    colorClass: 'text-amber-500',
    glowClass: 'group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]',
    lineGradient: 'from-amber-400 to-orange-500'
  },
  {
    icon: Network,
    title: 'Personalizaci výuky',
    description: 'Schopnost okamžitě vysvětlit látku na míru konkrétnímu studentovi a vygenerovat doplňující cvičení na specifické gramatické jevy.',
    colorClass: 'text-teal-500',
    glowClass: 'group-hover:drop-shadow-[0_0_12px_rgba(20,184,166,0.6)]',
    lineGradient: 'from-teal-400 to-blue-400'
  },
  {
    icon: Puzzle,
    title: 'Kombinaci obsahu',
    description: 'Propojování odborné slovní zásoby s konkrétními potřebami skupiny v reálném čase.',
    colorClass: 'text-rose-400',
    glowClass: 'group-hover:drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]',
    lineGradient: 'from-rose-400 to-pink-500'
  }
];

export default function TechSection() {
  return (
    <section className="relative bg-white z-20 py-32 px-6 md:px-24 overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 pt-8 text-center">
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
            Technologie mi umožňují
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CARDS.map((card, index) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/60 backdrop-blur-[20px] border border-slate-200/50 shadow-xl rounded-[2rem] p-8 hover:shadow-[0_0_40px_rgba(244,63,94,0.1)] transition-all cursor-default flex flex-col justify-between overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div className={`mb-6 transition-colors duration-500 ${card.colorClass}`}>
                  <card.icon className={`w-8 h-8 transition-all duration-300 ${card.glowClass}`} strokeWidth={1.5} />
                </div>
                <h3 className="font-headline text-2xl font-bold tracking-tight text-slate-900">{card.title}</h3>
                <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed font-medium">{card.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1">
                <div className={`w-full h-full bg-gradient-to-r ${card.lineGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
