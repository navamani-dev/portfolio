export default function Content() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="animate-fadeUp text-left">
          <span className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Available for impactful web roles
          </span>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Building polished web products with a comeback story recruiters remember.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            I am Navamani R, a Junior Web Developer at BSEtec working on Quantum Wallet, a crypto wallet platform inspired by modern DeFi products like Uniswap and MetaMask. I focus on feature development, bug fixing, UI quality, and performance-minded delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["2026", "Joined BSEtec"],
              ["Quantum", "Wallet Platform"],
              ["MERN", "Web Stack"],
              ["2020-25", "Industry Discipline"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[8px] border border-slate-200 bg-white/80 p-4 shadow-sm">
                <p className="text-2xl font-black text-ink">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fadeUp lg:max-w-lg" style={{ animationDelay: "120ms" }}>
          <div className="absolute -left-8 top-10 z-20 hidden rounded-[8px] border border-white bg-white/90 p-4 shadow-soft backdrop-blur md:block">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">Now Building</p>
            <p className="mt-1 text-lg font-black text-ink">Quantum Wallet</p>
          </div>
          <div className="absolute -right-4 top-28 z-20 hidden rounded-[8px] bg-ink p-4 text-white shadow-lift md:block">
            <p className="text-3xl font-black">6+</p>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-300">Months Backend Training</p>
          </div>
          <div className="relative z-10 overflow-hidden rounded-[8px] border border-white bg-white p-3 shadow-soft">
            <img src="Navamani.jpg" alt="Navamani R" className="h-[30rem] w-full rounded-[8px] object-cover object-top" />
            <div className="absolute inset-x-6 bottom-6 rounded-[8px] bg-white/90 p-4 shadow-lg backdrop-blur">
              <p className="text-sm font-bold text-emerald-700">Junior Web Developer</p>
              <p className="mt-1 text-xl font-black text-ink">Feature work, fixes, UI improvements, performance optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
