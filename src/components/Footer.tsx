import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-10 border-t border-outline-variant/20 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <a 
            href="https://medium.com/@aklanicova15" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.2)] cursor-pointer"
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
            className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.2)] cursor-pointer"
          >
            <Github size={20} />
          </a>
        </div>
        <p className="text-sm text-gray-600/60 font-light tracking-wide">
          Kód, data a empatie. Anna Klanicová © 2026
        </p>
      </div>
    </footer>
  );
}
