const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
          <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-gradient-to-br from-emerald-400 via-cyan-500 to-amber-300 text-lg font-black text-slate-950 shadow-lg shadow-emerald-950/30">
            NR
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-extrabold text-white">Navamani R</span>
            <span className="block text-xs font-semibold text-slate-400">Junior Web Developer</span>
          </span>
        </a>

        <div className="hidden items-center rounded-full border border-white/10 bg-white/5 p-1 shadow-sm backdrop-blur lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="/Navamani's Resume.pdf" download="Navamani's Resume.pdf" className="secondary-button hidden sm:inline-flex">
          <i className="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
          Resume
        </a>

        <details className="relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-sm transition hover:border-emerald-300/50">
            <i className="fa-solid fa-bars" aria-hidden="true"></i>
          </summary>
          <div className="absolute right-0 mt-3 w-56 rounded-[8px] border border-white/10 bg-slate-950/95 p-2 shadow-lift backdrop-blur">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-[8px] px-4 py-3 text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-emerald-200">
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
