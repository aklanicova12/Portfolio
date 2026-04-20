import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, ArrowLeft, X, Lightbulb, Target, FileText, Star, Image as ImageIcon, BookOpen, ExternalLink, Network, Cpu, Hand, Sparkles, Waves, Users, Heart, Mic, Puzzle, Triangle } from 'lucide-react';

// Data
const SUBJECTS = [
  {
    id: 'iskm06',
    title: 'Učící se společnost',
    tags: ['EDTech', 'Systemic Change', 'Digital Evolution'],
    insightsTitle: 'Insights',
    insights: 'Tento předmět pro mě představoval zásadní milník. Pomohl mi hlouběji proniknout do profilace EDtech a ujasnit si, jakým tématům se chci v rámci magisterské práce věnovat. Získala jsem ucelený přehled o příležitostech i problémech, které hýbou dnešní učící se společností.',
    practiceTitle: 'Practice',
    practice: 'Skrze psaní odborných textů jsem se naučila efektivně vyhledávat a kriticky hodnotit zdroje. Tento proces mě inspiroval k hledání vlastních cest k informacím i mimo školu – aktivně nyní sleduji oborové podcasty a zahraniční trendy, což přímo aplikuji do své lektorské praxe.',
    visionTitle: 'Vision',
    vision: 'Moje vize směřuje k vytváření inkluzivního vzdělávacího prostředí, kde technologie slouží jako most, nikoli bariéra. Chci se nadále věnovat propojování teorie s reálnými potřebami studentů v digitálním věku.',
    quote: 'AI nenahradí učitele. Ale učitelé, kteří využívají AI, nahradí ty, kteří ji nevyužívají.',
    isIskm06: true,
    articles: [
      { title: 'Role chatbotů v seberegulaci', subtitle: 'Jak AI pomáhá studentům řídit vlastní proces učení.', url: 'https://medium.com/edtech-kisk/role-chatbotů-a-podpora-jednotlivých-fází-seberegulace-6ddd7b2ef202' },
      { title: 'Evoluce učitele: Od křídy k AI', subtitle: 'Transformace role pedagoga v digitální éře.', url: 'https://medium.com/edtech-kisk/učitel-a-jeho-evoluce-od-tabule-a-křídy-k-umělé-inteligenci-cec39d6348f9' },
      { title: 'Konec pevných rozvrhů', subtitle: 'Výzvy a svoboda asynchronního vzdělávání.', url: 'https://medium.com/edtech-kisk/konec-pevných-rozvrhů-proč-asynchronní-studium-vyžaduje-víc-než-jen-přístup-k-internetu-dfd304c73d66' },
      { title: 'RVP a realita', subtitle: 'Kritický pohled na systémové kurikulum vs. školní praxe.', url: 'https://medium.com/edtech-kisk/rvp-a-realita-a8925f051049' },
      { title: 'Fenomén Scioškoly', subtitle: 'Analýza inovativního přístupu k prostředí a výuce.', url: 'https://medium.com/edtech-kisk/scioškoly-1cab9ebaff27' },
      { title: 'Finální odborná publikace', subtitle: 'Komplexní studie semestrálního výzkumu pro konferenci.', isMasterpiece: true, url: '#' }
    ]
  },
  {
    id: 'creative-work',
    title: 'Kreativní práce s informacemi',
    tags: ['Journaling', 'Inspiration'],
    insightsTitle: 'Sebepoznání a práce s daty',
    insights: 'V tomto kurzu jsem se naučila efektivněji pracovat s informacemi a především je zaznamenávat tak, aby sloužily k hlubšímu pochopení tématu. Reflexe mých kolegů mi poskytly cenné srovnání, které mi pomohlo definovat, co mi při práci skutečně vyhovuje. S uspokojením jsem zjistila, že se v metodách zpracování informací již dobře orientuji a aktivně je využívám. Díky tomu jsem nyní schopná tyto postupy doporučovat i svým studentům na základě jejich konkrétních potřeb. Zároveň jsem si uvědomila, že stojí za to vzkřísit některé dřívější formy práce, které jsem opustila, a dát jim nový záměr.',
    practiceTitle: 'Lektorská praxe a journaling',
    practice: 'Kurz mi přinesl nové zdroje, které využívám pro sebe i pro své studenty při nastavování učebních metodik. Aktuálně se nejvíce soustředím na reflexivní journaling, který vnímám jako klíč k sebepoznání a dosahování cílů. Velmi mě baví představa kombinace journalingu s učením se novému jazyku – vést si deník přímo v cizí řeči.',
    visionTitle: 'Vize a budoucí rozvoj',
    vision: 'Přestože jsem o tématu měla povědomí už z bakalářského studia, kurz mě inspiroval k dalšímu bádání skrze podcasty a sociální sítě. Uvažuji o journalingu ve vzdělávání jako o základu své magisterské práce. Do budoucna se chci zaměřit na lepší organizaci – rozkládat práci do menších celků namísto nárazového plnění. Také mě nadchla myšlenka najít si pro studium „buddyho“ (parťáka), který mi pomůže hlídat progres, abych se nemusela spoléhat jen na náhodné reflexe od cizích lidí.',
    quote: '„Důležitým vhledem pro mě bylo uvědomění si vlastní odlišnosti – nezapadám do šablony tradičního studenta, protože vedu mnohem intenzivnější pracovní život než většina mých spolužáků. Tuto odlišnou perspektivu studentky-praktičky vnímám jako svou velkou přednost. Mým cílem je ji i nadále co nejúžeji propojovat se svým studiem a vytvářet tak synergii mezi akademickými znalostmi a reálnou lektorskou praxí.“',
    isCreativeWork: true
  },
  {
    id: 'info-behavior',
    title: 'Informační chování',
    tags: ['Academic writing', 'Research', 'Mapping'],
    insightsTitle: 'Nové dovednosti',
    insights: 'Naučila jsem se precizně vyhledávat odborné studie a identifikovat v nich tzv. „research gaps“ – místa, která si zaslouží další zkoumání. Procvičila jsem si akademické psaní i citování a díky zpětné vazbě od kolegů jsem mohla porovnat různé přístupy k teoretickému zkoumání témat.',
    practiceTitle: 'Vazba na praxi',
    practice: 'Možnost zvolit si vlastní výzkumný záměr mi umožnila vytvořit základ pro mou magisterské práci. Nyní se cítím mnohem jistější v tom, jak podklady vyhledat, kriticky ohodnotit a následně si je obhájit. Pochopila jsem, že orientace v literatuře vyžaduje úsilí, ale přináší hluboký vhled, který mi dříve chyběl.',
    visionTitle: 'Osobní posun',
    vision: 'Podařilo se mi studium rozložit do více částí, což je pro mě velký krok vpřed v time-managementu. Pro komplexní přehled jsem vytvořila podrobnou myšlenkovou mapu, která mi pomohla vidět problém v širších souvislostech. Tento systém nyní doporučuji i kolegům jako recept na udržení přehledu.',
    quote: 'Cvičení dělá mistra – vím, že mě čeká ještě hodně práce, ale díky tomuto kurzu už vím, jak na to a kam směřovat.',
    isInfoBehavior: true
  },
  {
    id: 'design-management',
    title: 'Design management a leadership masterclass',
    tags: ['Leadership', 'Design Thinking', 'AI Ethics'],
    insightsTitle: 'Teorie a realita',
    insights: 'Do kurzu jsem vstoupila se zájmem o design, který mě fascinuje, i když není mou primární profesí. Získala jsem vhled do aktuálních problémů designérů a potvrdila si, že teoretickým konceptům rozumím. Mojí největší výzvou zůstává přechod do reálného korporátního prostředí, ale kurz mi dodal sebevědomí – zjistila jsem, že k profesionální praxi nejsem tak daleko, jak jsem si myslela.',
    practiceTitle: 'Lektorská aplikace',
    practice: 'Získané principy už nyní aktivně přenáším do své práce. Maximálně cílím na individuální potřeby studentů a reflektuji jejich věková specifika v materiálech, které připravuji. Snažím se vystupovat z komfortní zóny, zejména v oblasti networkingu a navazování kontaktů.',
    visionTitle: 'Budoucí rozvoj',
    vision: 'Chci dál objevovat kvalitní zdroje v obrovském množství informací a hledat konkrétní nástroje, které hýbou oborem. Mým cílem je sledovat trendy a čerpat inspiraci tam, kde vzniká skutečná hodnota.',
    aiQuoteTitle: 'Člověk vs. Technologie',
    isDesignManagement: true,
    bookInspiration: {
      title: 'Atomic Habits (Atomové návyky)',
      author: 'James Clear, 2018',
      context: 'Klíčová inspirace pro seberozvoj a management'
    }
  },
  {
    id: 'effective-teaching',
    title: 'Praktikum lektora',
    tags: ['Instructional Design', 'Educational Leadership', 'Learning Experience'],
    quote: '„Zajímavým momentem pro mě bylo, když jsem ostatním dávala rady, které jsem vlastně adresovala i sama sobě – proces hlubšího zamyšlení mě dovedl k uvědoměním, která jsem dříve přehlížela.“',
    feelingsTitle: 'Moje pocity',
    feelings: '„Absolvování kurzu pro mě bylo ve výsledku velmi uklidňující. Bylo skvělé slyšet názory ostatních a opět pocítit sounáležitost s kolektivem. Odborná komunita mě dokáže psychicky i metodicky obrovsky obohatit.“',
    insightsTitle: 'Klíčové poznatky a aha-momenty',
    takeaways: [
      { title: 'Pochopení trémy:', description: 'Uvědomila jsem si, kolik lidí má strach z mluvení na veřejnosti. Já sama jsem tento ostych léty praxe ztratila, ale až teď dokážu plně ocenit hodnotu klidu při mluvení.' },
      { title: 'Respekt k učebním stylům:', description: 'Modely Honeyho a Mumforda mi pomohly pochopit, že i tiché pozorování je přínosná forma učení.' },
      { title: 'Struktura a kontext:', description: 'Ponořila jsem se do Kirkpatrickova modelu. Nyní dokážu lekce stavět koncepčněji s jasným vzdělávacím cílem.' },
      { title: 'Práce s velkou skupinou:', description: 'Zkušenost s online výukou pro velkou skupinu mi ukázala nutnost přizpůsobit nastavení výuky.' }
    ],
    applicationTitle: 'Aplikace v praxi',
    application: '„Kladu velký důraz na práci s tichem – jako aktivní a rychlá lektorka jsem si uvědomila, že musím žákům dopřát dostatek času na promyšlení odpovědí.“',
    isEffectiveTeaching: true
  }
];

const HOTSPOTS = [
  { id: 's1', letter: 'K', label: 'SEMESTR 1', delay: 0, isLocked: false },
  { id: 's2', letter: 'I', label: 'SEMESTR 2', delay: 1, isLocked: true },
  { id: 's3', letter: 'S', label: 'SEMESTR 3', delay: 2, isLocked: true },
  { id: 's4', letter: 'K', label: 'SEMESTR 4', delay: 3, isLocked: true },
];

const BackgroundParticles = () => {
  const particles = Array.from({ length: 60 });
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen">
      {particles.map((_, i) => {
        const isTeal = i % 2 === 0;
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-[1px] ${
              isTeal ? 'bg-teal-500/40' : 'bg-rose-400/30'
            }`}
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 10,
            }}
          />
        );
      })}
    </div>
  );
};

export default function StudyPage() {
  const [view, setView] = useState<'balloons' | 'semester1'>('balloons');
  const [selectedSubject, setSelectedSubject] = useState<typeof SUBJECTS[0] | null>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-900 text-white">
      {/* Background Video */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        animate={{ 
          scale: view === 'semester1' ? 1.5 : 1,
          filter: view === 'semester1' ? 'blur(20px)' : 'blur(0px)'
        }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <video
          src="/Flow_202604162211.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-slate-950/60 z-0 pointer-events-none"></div>
      </motion.div>

      <AnimatePresence mode="wait">
        {view === 'balloons' && (
          <motion.div
            key="balloons-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-10 flex items-center justify-center w-full h-full overflow-hidden"
          >
            <BackgroundParticles />
            
            {/* Architectural Lens System - Radiant Bloom */}
            <div className="absolute z-10 flex items-center justify-center gap-6 md:gap-12 w-full h-full px-4 md:px-20 overflow-hidden flex-wrap md:flex-nowrap">
              {HOTSPOTS.map((spot, index) => (
                <div key={spot.id} className="group relative flex flex-col items-center">
                  <motion.div
                    className={`relative flex items-center justify-center w-36 h-48 md:w-[180px] md:h-[250px] flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      spot.isLocked 
                        ? 'cursor-not-allowed z-0 opacity-60 hover:scale-105' 
                        : 'cursor-pointer z-10 hover:z-30 hover:scale-105'
                    }`}
                    animate={{
                      y: [0, -15, 0]
                    }}
                    transition={{
                      duration: 4 + (index * 0.2), // slight duration variation
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: spot.delay
                    }}
                    onClick={() => !spot.isLocked && setView('semester1')}
                  >
                    {/* Lens Structure & Frame */}
                    <div className={`absolute inset-0 rounded-[2.5rem] border-[4px] border-slate-950 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      !spot.isLocked 
                        ? 'group-hover:bg-white/40 group-hover:shadow-[0_0_25px_rgba(255,180,150,0.5)] group-hover:border-white/30' 
                        : ''
                    }`}>
                      {/* Inner Facets & Structural Lines */}
                      <div className={`absolute inset-2 md:inset-3 rounded-[1.8rem] border transition-all duration-400 ${!spot.isLocked ? 'border-white/20 group-hover:border-white/40' : 'border-white/20'}`}></div>
                      <div className={`absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 transition-colors duration-400 ${!spot.isLocked ? 'bg-white/10 group-hover:bg-white/30' : 'bg-white/10'}`}></div>
                      <div className={`absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 transition-colors duration-400 ${!spot.isLocked ? 'bg-white/10 group-hover:bg-white/30' : 'bg-white/10'}`}></div>
                    
                      {/* Subtle Light Caustics overlay */}
                      <motion.div 
                        className={`absolute inset-0 pointer-events-none transition-opacity duration-400 ${!spot.isLocked ? 'opacity-20 group-hover:opacity-40' : 'opacity-20'}`}
                        style={{ background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 40%, transparent 60%)', backgroundSize: '200% 200%' }}
                        animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
                        transition={{ duration: 8 + index, repeat: Infinity, ease: 'linear' }}
                      />
                    </div>
                    
                    <div className={`font-serif text-7xl md:text-9xl transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] relative z-10 text-white/90 ${
                      !spot.isLocked 
                        ? 'group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]' 
                        : ''
                    }`}>
                      {spot.letter}
                    </div>
                  </motion.div>

                  {/* Under-Card Hover Label */}
                  <div className="absolute top-[105%] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-[-10px] pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 font-sans font-semibold text-white tracking-widest text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap">
                      {spot.isLocked && <Lock size={14} className="text-white/80" />}
                      {spot.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {view === 'semester1' && (
          <motion.div
            key="semester1-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden pt-32 pb-24 px-6 md:px-12"
          >
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={() => setView('balloons')}
                className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors mb-12"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowLeft size={18} />
                </div>
                <span className="font-sans uppercase tracking-widest text-xs font-semibold">Zpět na výběr semestru</span>
              </button>

              <div className="mb-16">
                <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">Semester 1</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SUBJECTS.map((subject, index) => (
                  <motion.div
                    key={subject.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    onClick={() => setSelectedSubject(subject)}
                    className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col h-full"
                  >
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-sans uppercase tracking-wider text-white/80 mb-4">
                        {subject.tags[0]}
                      </span>
                      <h3 className="font-headline text-2xl font-bold text-white leading-tight">{subject.title}</h3>
                    </div>
                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-white/40 group-hover:text-white/80 transition-colors">
                      <span className="text-sm font-sans">View Reflection</span>
                      <ArrowLeft size={16} className="rotate-180" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Digital Journal Full-Screen Overlay */}
      <AnimatePresence>
        {selectedSubject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-50/90 backdrop-blur-[50px] overflow-y-auto text-slate-900"
          >
            {/* Faint blurry shapes */}
            <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-pink-300/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 -translate-y-1/4"></div>
            <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4"></div>

            {/* Top Navigation Bar */}
            <nav className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/40 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
              <button 
                onClick={() => { setSelectedSubject(null); setView('balloons'); }}
                className="group flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors shrink-0"
              >
                <div className="w-8 h-8 rounded-full bg-slate-200/50 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <ArrowLeft size={16} className="group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300" />
                </div>
                <span className="font-sans uppercase tracking-widest text-xs font-semibold hidden md:inline">Zpět na výběr semestru</span>
              </button>
              
              <div className="relative flex-1 ml-4 md:ml-6 overflow-hidden">
                {/* Left gradient fade */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                {/* Right gradient fade */}
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex items-center gap-2 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-8 py-2 w-full">
                  {SUBJECTS.map((subject) => (
                    <button
                      key={subject.id}
                      onClick={() => setSelectedSubject(subject)}
                      className={`whitespace-nowrap font-sans text-sm md:text-base font-semibold transition-all duration-300 px-5 py-2.5 rounded-full shrink-0 ${
                        selectedSubject.id === subject.id 
                          ? 'text-purple-700 bg-purple-100/50 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)] border border-purple-200/50 scale-105' 
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50 border border-transparent object-none'
                      }`}
                    >
                      {subject.title.includes(':') ? subject.title.split(':')[0] : subject.title}
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* Content Area with Cross-fade */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSubject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
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
                          
                          {/* Stylized Glassmorphism Book */}
                          <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-2">
                            <div className="w-24 h-32 relative perspective-1000 flex-shrink-0">
                              {/* Book shadow */}
                              <div className="absolute inset-0 bg-black/20 blur-md transform translate-y-2 translate-x-2 rounded-lg"></div>
                              {/* Book spine */}
                              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-amber-700 to-amber-600 rounded-l-md transform -skew-y-12 origin-right"></div>
                              {/* Book cover */}
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
                                  Přestože jsem o tématu měla povědomí už z bakalářského studia, kurz mě inspiroval k dalšímu bádání skrze podcasty a sociální sítě. Uvažuji o journalingu ve vzdělávání jako o základu své magisterské práce. Do budoucna se chci zaměřit na lepší organizaci – rozkládat práci do menších celků namísto nárazového plnění. Také mě nadchla myšlenka najít si pro studium „buddyho“ 
                                  <svg className="inline-block mx-1 w-6 h-6 -mt-1" viewBox="0 0 24 24" fill="none" stroke="url(#buddy-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <defs>
                                      <linearGradient id="buddy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop stopColor="#ec4899" offset="0%" />
                                        <stop stopColor="#8b5cf6" offset="100%" />
                                      </linearGradient>
                                    </defs>
                                    <circle cx="8" cy="12" r="5" />
                                    <circle cx="16" cy="12" r="5" />
                                  </svg>
                                  (parťáka), který mi pomůže hlídat progres, abych se nemusela spoléhat jen na náhodné reflexe od cizích lidí.
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

                  {/* Middle Section: Moje Pocity (Standalone Block) */}
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
                            {"„Absolvování kurzu pro mě bylo ve výsledku velmi "}
                            <strong className="font-bold text-[#b76e79] drop-shadow-[0_0_8px_rgba(183,110,121,0.3)]">uklidňující</strong>
                            {". Bylo skvělé slyšet názory ostatních a opět pocítit "}
                            <strong className="font-bold text-[#b76e79] drop-shadow-[0_0_8px_rgba(183,110,121,0.3)]">sounáležitost</strong>
                            {" s kolektivem. Odborná komunita mě dokáže psychicky i metodicky obrovsky "}
                            <strong className="font-bold text-[#b76e79] drop-shadow-[0_0_8px_rgba(183,110,121,0.3)]">obohatit</strong>
                            {".“"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Full-width Sections */}
                  {selectedSubject.isEffectiveTeaching && (
                    <div className="mt-16 pt-16 border-t border-slate-200/60">
                      <div className="relative p-10 md:p-16 rounded-[3rem] bg-gray-900 overflow-hidden group transition-all duration-700 hover:shadow-[0_0_60px_rgba(168,85,247,0.3)]">
                        {/* Noise texture */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
                        
                        {/* Pulsing glow on hover */}
                        <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-1000"></div>
                        <div className="absolute -inset-1/2 bg-gradient-to-r from-blue-600/0 via-purple-500/20 to-pink-500/0 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none transform rotate-12"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                          <div className="flex-1 text-center md:text-left">
                            <p className="font-display italic text-2xl md:text-3xl text-gray-300 leading-relaxed relative z-10">
                              {selectedSubject.application}
                            </p>
                          </div>
                          <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0 flex items-center justify-center overflow-hidden mix-blend-screen">
                            {/* Human Spark / Ripple */}
                            <div className="absolute w-12 h-12 rounded-full border border-pink-400/50 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                            <div className="absolute w-20 h-20 rounded-full border border-purple-400/40 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
                            <div className="absolute w-32 h-32 rounded-full border border-blue-400/30 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_2s]"></div>
                            <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 shadow-[0_0_20px_rgba(168,85,247,0.8)] z-10"></div>
                          </div>
                        </div>
                      </div>

                      {/* Navigate back button */}
                      <div className="pt-24 pb-12 flex justify-center w-full">
                        <button
                          onClick={() => { setSelectedSubject(null); setView('balloons'); }}
                          className="group relative px-8 md:px-12 py-5 bg-gradient-to-r from-slate-900 to-indigo-900 rounded-full font-headline font-bold text-white text-lg tracking-wide overflow-hidden shadow-[0_0_40px_rgba(79,70,229,0.2)] hover:shadow-[0_0_60px_rgba(79,70,229,0.4)] transition-all duration-500 hover:-translate-y-1"
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

                  {selectedSubject.isDesignManagement && (
                    <div className="mt-16 pt-16">
                      <div className="relative p-10 md:p-16 rounded-[3rem] bg-gray-900 overflow-hidden group transition-all duration-700 hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]">
                        {/* Noise texture */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
                        
                        {/* Pulsing glow on hover */}
                        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-1000"></div>
                        <div className="absolute -inset-1/2 bg-gradient-to-r from-blue-600/0 via-blue-500/20 to-purple-500/0 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none transform rotate-12"></div>
                        
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
                            {/* Hexagonal grid (using SVG pattern) */}
                            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
                                  <path d="M25 0l25 14.4v28.8L25 57.7 0 43.3V14.5z" fill="none" stroke="#fbcfe8" strokeWidth="2" />
                                </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill="url(#hexagons)" className="animate-[pulse_4s_ease-in-out_infinite]" />
                            </svg>
                            
                            {/* Human Spark - organic glowing orb */}
                            <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 rounded-full blur-xl opacity-80 animate-[pulse_3s_ease-in-out_infinite] shadow-[0_0_50px_rgba(236,72,153,0.6)]"></div>
                            <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-pink-200 rounded-full blur-md opacity-90 animate-[pulse_3s_ease-in-out_infinite_0.5s] shadow-[0_0_30px_rgba(255,192,203,0.8)]"></div>
                            
                            {/* Decorative particles */}
                            <div className="absolute w-2 h-2 bg-pink-300 rounded-full shadow-[0_0_10px_rgba(244,114,182,1)] top-1/4 right-1/4 animate-bounce"></div>
                            <div className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full shadow-[0_0_10px_rgba(192,132,252,1)] bottom-1/3 left-1/4 animate-ping"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
                                          <div className="relative flex items-center justify-center">
                                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                          </div>
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
                            
                            {/* Abstract background pattern simulating a mind map/network */}
                            <div className="absolute inset-0 opacity-[0.03] text-indigo-900 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, currentColor 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                            
                            <div className="absolute top-10 left-10 text-indigo-200 opacity-20 transform -rotate-12 pointer-events-none">
                              <Network size={200} strokeWidth={1} />
                            </div>

                            <div className="absolute bottom-10 right-10 text-purple-200 opacity-20 transform rotate-12 pointer-events-none">
                              <Network size={250} strokeWidth={1} />
                            </div>

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
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-sans font-bold shadow-lg hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] transition-all hover:-translate-y-1"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
