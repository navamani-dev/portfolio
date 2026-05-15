const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
          <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-ink text-lg font-black text-white shadow-lg shadow-slate-900/20">
            NR
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-extrabold text-ink">Navamani R</span>
            <span className="block text-xs font-semibold text-muted">Junior Web Developer</span>
          </span>
        </a>

        <div className="hidden items-center rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm lg:flex">
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
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:border-emerald-300">
            <i className="fa-solid fa-bars" aria-hidden="true"></i>
          </summary>
          <div className="absolute right-0 mt-3 w-56 rounded-[8px] border border-slate-200 bg-white p-2 shadow-lift">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-[8px] px-4 py-3 text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
