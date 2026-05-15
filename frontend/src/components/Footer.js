const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-ink text-sm font-black text-white">
            NR
          </span>
          <div>
            <p className="text-sm font-black text-ink">Navamani R</p>
            <p className="text-xs font-semibold text-muted">Junior Web Developer | MERN Stack</p>
          </div>
        </div>

        <p className="text-sm font-semibold text-muted">
          © {year} Navamani R. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
