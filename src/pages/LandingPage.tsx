import { motion } from 'motion/react';
import { Lightbulb, BarChart3, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-[#FAFAFA] flex flex-col items-center pt-32 pb-24 px-6 overflow-hidden relative"
    >
      {/* Background Typography */}
      <div className="absolute top-20 left-0 w-full overflow-hidden flex flex-col items-center pointer-events-none select-none opacity-[0.03] z-0">
        <h1 className="text-[12vw] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">TECHNOLOGIE</h1>
        <h1 className="text-[12vw] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 -mt-8">VZDĚLÁVÁNÍ</h1>
        <h1 className="text-[12vw] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 -mt-8">INOVACE</h1>
      </div>

      {/* Hero Profile */}
      <div className="relative z-10 flex flex-col items-center mt-10">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-blue-900/10 border-4 border-white">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
            alt="Elena Rossi"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">Elena Rossi</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {['EDTECH ENTHUSIAST', 'DATA ARCHITECT', 'LECTURER', 'MAKER'].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-white rounded-full text-xs font-bold tracking-widest text-gray-600 shadow-sm border border-gray-100">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quote Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white mb-24 text-center">
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-pink-50/50 via-transparent to-blue-50/50 -z-10"></div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">Architect of Digital Learning</h3>
        <p className="font-serif text-3xl md:text-5xl text-gray-900 leading-tight mb-8">
          "I transform practical experience with children into innovative educational technologies. Data is my compass, human growth my goal."
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Bridging the gap between pedagogical theory and technical implementation through empathy and evidence-based design.
        </p>
      </div>

      {/* Core Philosophies */}
      <div className="relative z-10 w-full max-w-5xl mb-24">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Philosophies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-6 text-pink-500">
              <Lightbulb size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Cognitive Strategy</h4>
            <p className="text-gray-600 leading-relaxed">
              Developing mental frameworks that simplify complex digital interactions for diverse learners.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-500">
              <BarChart3 size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Data Visualization</h4>
            <p className="text-gray-600 leading-relaxed">
              Turning abstract metrics into intuitive, actionable visual stories that drive pedagogical decisions.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 text-purple-500">
              <Users size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Inclusive UI/UX</h4>
            <p className="text-gray-600 leading-relaxed">
              Designing interfaces that are accessible, empathetic, and culturally responsive by default.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-full p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <span className="font-bold text-gray-900 tracking-widest text-sm whitespace-nowrap">KISK MAGISTR</span>
          <div className="hidden md:block w-px h-8 bg-gray-200"></div>
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider hidden md:block">Stav: Propojování znalostí</span>
        </div>
        
        <div className="flex-grow w-full max-w-xl flex items-center gap-4">
          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[65%] bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
          </div>
          <span className="text-xs font-bold text-gray-900 whitespace-nowrap">65% JOURNEY COMPLETED</span>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-sm font-bold text-gray-900">Aktivní studium</span>
        </div>
      </div>

    </motion.div>
  );
}
