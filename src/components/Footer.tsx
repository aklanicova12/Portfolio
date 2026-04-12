export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-10 border-t border-outline-variant/20 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans uppercase tracking-widest text-[10px] text-primary">
          © 2024 Architectural Narratives. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="font-sans uppercase tracking-widest text-[10px] text-primary/40 hover:text-primary transition-all duration-500 ease-in-out">
            Privacy
          </a>
          <a href="#" className="font-sans uppercase tracking-widest text-[10px] text-primary/40 hover:text-primary transition-all duration-500 ease-in-out">
            Terms
          </a>
          <a href="#" className="font-sans uppercase tracking-widest text-[10px] text-primary/40 hover:text-primary transition-all duration-500 ease-in-out">
            Colophon
          </a>
        </div>
      </div>
    </footer>
  );
}
