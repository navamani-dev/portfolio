export default function Content() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="animate-fadeUp text-left">
          <span className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Junior Web Developer | MERN Stack
          </span>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Navamani R builds <span className="accent-text">clean web products</span> with product-team discipline.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I am Navamani R, a Junior Web Developer at BSEtec working on Quantum Wallet, a crypto wallet platform inspired by modern DeFi products like Uniswap and MetaMask. I focus on feature development, bug fixing, UI quality, and performance-minded delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="primary-button">
              <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
              View Projects
            </a>
            <a href="/Navamani's Resume.pdf" download="Navamani's Resume.pdf" className="secondary-button">
              <i className="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
              Download Resume
            </a>
            <a href="#contact" className="secondary-button">
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              Connect
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              ["Developer", "Current Role"],
              ["MERN", "Web Stack"],
              ["Live", "Deployed Apps"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[8px] border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-black text-white sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fadeUp lg:max-w-lg" style={{ animationDelay: "120ms" }}>
          <div className="absolute -left-6 top-8 z-20 hidden rounded-[8px] border border-white/10 bg-slate-950/85 p-4 shadow-soft backdrop-blur md:block">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Now Building</p>
            <p className="mt-1 text-lg font-black text-white">Quantum Wallet</p>
          </div>
          <div className="absolute -right-4 top-28 z-20 hidden rounded-[8px] bg-amber-500 p-4 text-ink shadow-lift md:block">
            <p className="text-3xl font-black">MERN</p>
            <p className="text-xs font-bold uppercase tracking-wide">Stack Developer</p>
          </div>
          <div className="relative z-10 overflow-hidden rounded-[8px] border border-white/10 bg-slate-950 p-3 shadow-soft">
            <div className="panel-grid absolute inset-3 rounded-[8px] opacity-20"></div>
            <img src="Navamani.jpg" alt="Navamani R" className="relative h-[30rem] w-full rounded-[8px] object-cover object-top" />
            <div className="absolute inset-x-6 bottom-6 rounded-[8px] border border-white/10 bg-slate-950/80 p-4 shadow-lg backdrop-blur">
              <p className="text-sm font-bold text-emerald-300">Feature work, fixes, UI improvements</p>
              <p className="mt-1 text-xl font-black text-white">A practical developer ready for serious product teams.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
