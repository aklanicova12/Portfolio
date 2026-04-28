import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Lightbulb, Target, Star, BookOpen, Mic, Puzzle, Users, Heart, Cpu, FileText, ExternalLink, Network, Triangle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import Footer from '../Footer';
import { SUBJECTS, Subject } from '../../data/studyData';

interface SubjectDetailOverlayProps {
  selectedSubject: Subject;
  onClose: () => void;
  onSelectSubject: (subject: Subject) => void;
  onBackToSelection: () => void;
}

export const SubjectDetailOverlay = ({
  selectedSubject,
  onClose,
  onSelectSubject,
  onBackToSelection
}: SubjectDetailOverlayProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 2);
      // Math.ceil helps deal with fractional scroll values on some screens
      setShowRightArrow(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    
    // Check scroll again after fonts have loaded, as custom fonts change the button widths
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        checkScroll();
        // Fallback short timeout just in case of other layout shifts
        setTimeout(checkScroll, 300);
      });
    } else {
      setTimeout(checkScroll, 500);
    }
    
    window.addEventListener('resize', checkScroll);
    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-slate-50 backdrop-blur-[50px] overflow-y-auto overflow-x-hidden text-slate-900"
    >
      {/* Faint blurry shapes */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-pink-300/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 -translate-y-1/4"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4"></div>

      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full bg-white/90 md:bg-white/80 backdrop-blur-3xl border-b border-slate-200/50 transition-all duration-300">
        <div className="w-full px-4 md:px-8 py-4 flex items-center gap-4 md:gap-8">
          <button
            onClick={onBackToSelection}
            className="group flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors shrink-0 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
              <ArrowLeft size={16} className="group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300" />
            </div>
            <span className="font-sans uppercase tracking-widest text-xs font-bold hidden md:inline">Zpět</span>
          </button>

          <div className="relative flex-1 min-w-0">
            {/* Scroll Arrows */}
            <AnimatePresence>
              {showLeftArrow && (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-lg cursor-pointer transition-colors"
                >
                  <ChevronLeft size={20} />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showRightArrow && (
                <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-lg cursor-pointer transition-colors"
                >
                  <ChevronRight size={20} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Subtle gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50/95 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50/95 to-transparent z-20 pointer-events-none"></div>

            <div 
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex items-center gap-3 md:gap-4 overflow-x-auto no-scrollbar scroll-smooth px-8 md:px-12 py-3 w-full"
            >
              {SUBJECTS.map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => onSelectSubject(subject)}
                  className={`whitespace-nowrap font-sans text-sm md:text-base font-bold transition-all duration-300 px-6 py-3 rounded-xl shrink-0 cursor-pointer border shadow-sm ${selectedSubject.id === subject.id
                    ? 'text-purple-700 bg-purple-100 border-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.2)] scale-105 z-10'
                    : 'text-slate-500 bg-white/60 border-slate-200 hover:text-slate-900 hover:bg-white hover:border-slate-300 hover:scale-[1.02]'
                    }`}
                >
                  {subject.title.includes(':') ? subject.title.split(':')[0] : subject.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Hint Text (Mobile Only) */}
        <div className="md:hidden text-[10px] text-center text-slate-400 font-sans uppercase tracking-[0.2em] pb-2 flex items-center justify-center gap-2">
          <ChevronLeft size={10} className="animate-pulse" />
          <span>Scrolluj pro další předměty</span>
          <ChevronRight size={10} className="animate-pulse" />
        </div>
      </nav>

      {/* Content Area with Cross-fade */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={selectedSubject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedSubject.tags.map(tag => (
                      <span key={tag} className="inline-block px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 hover:border-slate-300 text-slate-500 text-xs font-sans uppercase tracking-wider font-bold shadow-sm transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                    {selectedSubject.title}
                  </h1>
                </div>

                {selectedSubject.isEffectiveTeaching ? (
                  <div className="relative pl-8 py-2 mt-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
                    <p className="font-display italic text-2xl text-slate-700 leading-relaxed font-medium">
                      {selectedSubject.quote}
                    </p>
                  </div>
                ) : selectedSubject.isDesignManagement && selectedSubject.bookInspiration ? (
                  <div className="mt-12 relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-slate-200 shadow-xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50/50 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-2">
                      <div className="w-24 h-32 relative perspective-1000 flex-shrink-0">
                        <div className="absolute inset-0 bg-black/20 blur-md transform translate-y-2 translate-x-2 rounded-lg"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-amber-700 to-amber-600 rounded-l-md transform -skew-y-12 origin-right"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-r-md rounded-l-sm shadow-inner overflow-hidden border border-amber-300">
                          <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 blur-xl rounded-full transform -translate-y-8 translate-x-8"></div>
                          <div className="flex items-center justify-center h-full">
                            <BookOpen size={30} className="text-white/70 hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                      <div className="text-center sm:text-left mt-2 sm:mt-0">
                        <p className="text-xs font-sans uppercase tracking-widest text-amber-600 font-bold mb-2">
                          {selectedSubject.bookInspiration.context}
                        </p>
                        <h4 className="font-headline text-2xl font-bold text-slate-900 leading-tight">
                          {selectedSubject.bookInspiration.title}
                        </h4>
                        <p className="font-sans text-sm text-slate-500 mt-2">
                          {selectedSubject.bookInspiration.author}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : selectedSubject.isCreativeWork ? (
                  <div className="relative p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-purple-200 shadow-[0_0_40px_rgba(168,85,247,0.15)] group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-[2rem] pointer-events-none"></div>
                    <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-gradient-to-b from-purple-500 to-blue-500 rounded-r-full"></div>
                    <p className="font-display italic text-xl md:text-2xl text-slate-800 leading-relaxed font-medium relative z-10">
                      {selectedSubject.quote}
                    </p>
                  </div>
                ) : (
                  <div className="relative pl-8 py-2">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
                    <p className="font-display italic text-3xl text-slate-700 leading-relaxed">"{selectedSubject.quote}"</p>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 space-y-12 lg:pt-4 relative">
                {selectedSubject.isEffectiveTeaching ? (
                  <div className="space-y-12">
                    <section className="relative z-10">
                      <div className="flex items-center gap-3 mb-6 text-purple-600">
                        <Lightbulb size={24} strokeWidth={1.5} className="hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" />
                        <h3 className="font-headline text-2xl font-bold text-slate-900">{selectedSubject.insightsTitle}</h3>
                      </div>

                      <div className="space-y-8 mt-8">
                        {selectedSubject.takeaways?.map((takeaway: any, idx: number) => (
                          <div key={idx} className="flex gap-4 group">
                            <div className="mt-1 flex items-center justify-center flex-shrink-0">
                              {idx === 0 ? <Mic size={28} className="text-amber-500 group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" strokeWidth={1.5} /> :
                                idx === 1 ? <Puzzle size={28} className="text-teal-500 group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" strokeWidth={1.5} /> :
                                  idx === 2 ? <Triangle size={28} className="text-purple-500 group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" strokeWidth={1.5} /> :
                                    <Users size={28} className="text-rose-400 group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" strokeWidth={1.5} />}
                            </div>
                            <div>
                              <h4 className="font-headline text-xl font-bold text-slate-900 mb-2">{takeaway.title}</h4>
                              <p className="font-sans text-slate-600 leading-relaxed text-lg">{takeaway.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                ) : (
                  <>
                    {selectedSubject.isCreativeWork && (
                      <div className="absolute top-20 right-0 opacity-[0.03] pointer-events-none z-0">
                        <BookOpen size={300} strokeWidth={1} className="hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" />
                      </div>
                    )}

                    <section className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 text-purple-600">
                        <Lightbulb size={24} strokeWidth={1.5} className="hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" />
                        <h3 className="font-headline text-2xl font-bold text-slate-900">{selectedSubject.insightsTitle || 'Insights'}</h3>
                      </div>
                      <p className="font-sans text-lg text-slate-600 leading-relaxed">{selectedSubject.insights}</p>
                    </section>

                    <section className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 text-blue-600">
                        <Target size={24} strokeWidth={1.5} className="hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" />
                        <h3 className="font-headline text-2xl font-bold text-slate-900">{selectedSubject.practiceTitle || 'Practice'}</h3>
                      </div>
                      <p className="font-sans text-lg text-slate-600 leading-relaxed">{selectedSubject.practice}</p>
                    </section>

                    {selectedSubject.visionTitle && (
                      <section className="relative z-10">
                        <div className="flex items-center gap-3 mb-4 text-pink-600">
                          <Star size={24} strokeWidth={1.5} className="hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300" />
                          <h3 className="font-headline text-2xl font-bold text-slate-900">{selectedSubject.visionTitle}</h3>
                        </div>
                        {selectedSubject.isCreativeWork ? (
                          <p className="font-sans text-lg text-slate-600 leading-relaxed">
                            {selectedSubject.vision}
                          </p>
                        ) : (
                          <p className="font-sans text-lg text-slate-600 leading-relaxed">{selectedSubject.vision}</p>
                        )}
                      </section>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Moje Pocity Section */}
            {selectedSubject.isEffectiveTeaching && (
              <div className="mt-16 w-full relative z-10">
                <div className="relative p-8 md:p-12 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-rose-200/50 shadow-[0_0_40px_rgba(244,63,94,0.15)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-rose-100/40 to-pink-100/40 rounded-[2rem] pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], filter: ['drop-shadow(0 0 2px rgba(244,63,94,0.2))', 'drop-shadow(0 0 12px rgba(244,63,94,0.6))', 'drop-shadow(0 0 2px rgba(244,63,94,0.2))'] }}
                        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                        className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center shadow-sm"
                      >
                        <Heart size={24} className="text-rose-500 fill-rose-500/20 hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300 cursor-pointer" strokeWidth={1.5} />
                      </motion.div>
                      <h3 className="font-headline text-3xl font-bold text-slate-900">{selectedSubject.feelingsTitle}</h3>
                    </div>
                    <p className="font-sans text-xl text-slate-700 leading-relaxed font-medium">
                      {selectedSubject.feelings}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Application Section */}
            {selectedSubject.isEffectiveTeaching && (
              <div className="mt-16 pt-16 border-t border-slate-200/60">
                <div className="relative p-10 md:p-16 rounded-[3rem] bg-gray-900 overflow-hidden group transition-all duration-700 hover:shadow-[0_0_60px_rgba(168,85,247,0.3)]">
                  <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-1000"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                      <p className="font-display italic text-2xl md:text-3xl text-gray-300 leading-relaxed relative z-10">
                        {selectedSubject.application}
                      </p>
                    </div>
                    <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0 flex items-center justify-center overflow-hidden mix-blend-screen">
                      <div className="absolute w-12 h-12 rounded-full border border-pink-400/50 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                      <div className="absolute w-20 h-20 rounded-full border border-purple-400/40 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
                      <div className="absolute w-32 h-32 rounded-full border border-blue-400/30 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_2s]"></div>
                      <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 shadow-[0_0_20px_rgba(168,85,247,0.8)] z-10"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-24 pb-12 flex justify-center w-full">
                  <button
                    onClick={onBackToSelection}
                    className="group relative px-8 md:px-12 py-5 bg-gradient-to-r from-slate-900 to-indigo-900 rounded-full font-headline font-bold text-white text-lg tracking-wide overflow-hidden shadow-[0_0_40px_rgba(79,70,229,0.2)] hover:shadow-[0_0_60px_rgba(79,70,229,0.4)] transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform duration-300" />
                      Zpět k nekonečné cestě (Výběr semestru)
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* AI Quote Section */}
            {selectedSubject.isDesignManagement && (
              <div className="mt-16 pt-16">
                <div className="relative p-10 md:p-16 rounded-[3rem] bg-gray-900 overflow-hidden group transition-all duration-700 hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]">
                  <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-1000"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-4 mb-6 text-blue-400">
                        <Cpu size={32} strokeWidth={1.5} />
                        <h3 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight">{selectedSubject.aiQuoteTitle}</h3>
                      </div>
                      <p className="font-display italic text-2xl md:text-3xl text-gray-300 leading-relaxed relative z-10">
                        „Při každém projektu tvořeném s pomocí AI si kladu klíčovou otázku: V čem spočívá má <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">jedinečná přidaná hodnota</span> jako člověka a odborníka oproti technologii?“
                      </p>
                    </div>
                    <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0 flex items-center justify-center overflow-hidden mix-blend-screen">
                      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
                            <path d="M25 0l25 14.4v28.8L25 57.7 0 43.3V14.5z" fill="none" stroke="#fbcfe8" strokeWidth="2" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hexagons)" className="animate-[pulse_4s_ease-in-out_infinite]" />
                      </svg>
                      <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 rounded-full blur-xl opacity-80 animate-[pulse_3s_ease-in-out_infinite] shadow-[0_0_50px_rgba(236,72,153,0.6)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Articles and Mind Map Sections */}
            {(selectedSubject.isIskm06 || selectedSubject.isInfoBehavior) && (
              <div className="mt-24 pt-16 border-t border-slate-200/60">
                {selectedSubject.isIskm06 && (
                  <div>
                    <h3 className="font-headline text-3xl font-bold text-slate-900 mb-10">Moje publikační cesta</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                      {selectedSubject.articles?.map((article, index) => {
                        if (article.isMasterpiece) {
                          return (
                            <div key={index} className="relative rounded-2xl group h-full">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000 animate-pulse"></div>
                              <div className="relative bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 rounded-2xl p-6 flex flex-col h-full border border-white/20 shadow-xl">
                                <div className="relative z-10 flex-grow">
                                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mb-4 backdrop-blur-md">
                                    <FileText size={20} strokeWidth={1.5} />
                                  </div>
                                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">{article.title}</h4>
                                  <p className="text-sm text-white/90 mb-6">{article.subtitle}</p>
                                </div>
                                <div className="relative z-10 mt-auto pt-4 border-t border-white/20 flex items-center justify-between">
                                  <span className="text-xs font-sans uppercase tracking-widest text-white font-bold flex items-center gap-2">
                                    [ FINAL PUBLICATION / IN PROGRESS ]
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return (
                          <a key={index} href={article.url} target="_blank" rel="noopener noreferrer" className="relative bg-white/60 backdrop-blur-sm border rounded-2xl p-6 flex flex-col h-full transition-all cursor-pointer group border-slate-200/60 hover:bg-white hover:shadow-lg hover:border-purple-200">
                            <div className="relative z-10 flex-grow">
                              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 mb-4 group-hover:bg-purple-100 transition-colors">
                                <FileText size={20} strokeWidth={1.5} />
                              </div>
                              <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{article.title}</h4>
                              <p className="text-sm text-slate-600 mb-6">{article.subtitle}</p>
                            </div>
                            <div className="relative z-10 mt-auto pt-4 border-t border-slate-200/60 flex items-center justify-between">
                              <span className="text-sm font-sans font-semibold text-purple-600 group-hover:text-purple-700 transition-colors flex items-center gap-1">
                                Read on Medium <ArrowLeft size={14} className="rotate-180" />
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

                {selectedSubject.isInfoBehavior && (
                  <div>
                    <h3 className="font-headline text-3xl font-bold text-slate-900 mb-10">Interaktivní myšlenková mapa</h3>
                    <div className="w-full relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 backdrop-blur-xl border border-indigo-100 rounded-[2.5rem] shadow-lg group">
                      <div className="relative z-10 px-8 py-24 flex flex-col items-center justify-center text-center">
                        <div className="mb-8 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-indigo-600 border border-indigo-50 transform group-hover:scale-110 transition-transform duration-500">
                          <Network size={40} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-headline text-2xl font-bold text-slate-900 mb-4">Master Mind Map</h4>
                        <p className="text-slate-600 max-w-lg mb-10 font-sans text-lg">
                          Prozkoumej komplexní vizualizaci mého informačního chování. Mapa ukazuje všechny klíčové body, myšlenkové pochody a souvislosti.
                        </p>
                        <a
                          href="https://miro.com/welcomeonboard/bWdvT1NtbnpMbzBLQUwrQW4wb25sNkI5RGtDL1dzcU9hQjlvY2ZCRXU0eUpGSHFFcWJ6Vlg0UlZLZklyVTlRZWQvRmJjUCtLYWlNRWV6YWxnVnpQY1hBZU1pQ1lzY2VvZVA0ZnBEZXdISmtBejVvYUUwcktXTmw1WklpZWNNTGNBS2NFMDFkcUNFSnM0d3FEN050ekl3PT0hdjE=?share_link_id=514181148446"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-sans font-bold shadow-lg hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] transition-all hover:-translate-y-1 cursor-pointer"
                        >
                          Prozkoumat myšlenkovou mapu (Miro)
                          <ExternalLink size={20} strokeWidth={2} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </motion.div>
  );
};
