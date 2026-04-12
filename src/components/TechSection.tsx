import { Calendar, Network, Puzzle } from 'lucide-react';
import { motion } from 'motion/react';

const CARDS = [
  {
    icon: Calendar,
    title: 'Efektivní plánování',
    description: 'Od strukturování lekce až po rychlou tvorbu interaktivních podkladů.',
    blueprint: 'Blueprint 01'
  },
  {
    icon: Network,
    title: 'Personalizaci výuky',
    description: 'Schopnost okamžitě vysvětlit látku na míru konkrétnímu studentovi a vygenerovat doplňující cvičení na specifické gramatické jevy.',
    blueprint: 'Blueprint 02'
  },
  {
    icon: Puzzle,
    title: 'Kombinaci obsahu',
    description: 'Propojování odborné slovní zásoby s konkrétními potřebami skupiny v reálném čase.',
    blueprint: 'Blueprint 03'
  }
];

export default function TechSection() {
  return (
    <section className="relative bg-surface-container-low py-32 px-6 md:px-24 overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="font-sans uppercase tracking-[0.3em] text-secondary text-xs mb-4 block">
            Strategic Integration
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-primary tracking-tight">
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
              className="group bg-white p-10 border border-primary/10 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] hover:scale-[1.05] hover:shadow-[0_40px_80px_-15px_rgba(164,60,18,0.15)] cursor-default flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:border-secondary transition-colors duration-500">
                  <card.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-500" />
                </div>
                <h3 className="font-headline text-2xl font-bold tracking-tight">{card.title}</h3>
                <p className="font-sans text-primary/60 text-sm leading-relaxed">{card.description}</p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/10">
                <span className="font-sans text-[10px] uppercase tracking-widest text-primary/40">
                  {card.blueprint}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
