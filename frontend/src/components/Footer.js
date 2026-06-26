const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-8 backdrop-blur">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-gradient-to-br from-emerald-400 via-cyan-500 to-amber-300 text-sm font-black text-slate-950">
            NR
          </span>
          <div>
            <p className="text-sm font-black text-white">Navamani R</p>
            <p className="text-xs font-semibold text-slate-400">Junior Web Developer | MERN Stack</p>
          </div>
        </div>

        <p className="text-sm font-semibold text-slate-400">
          &copy; {year} Navamani R. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
