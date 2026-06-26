const timeline = [
  {
    period: "Jan 2026 - Present",
    title: "Junior Web Developer",
    company: "BSEtec",
    detail:
      "Contributing to Quantum Wallet, a crypto wallet platform with DeFi-style product flows. Working across feature development, bug fixing, UI improvements, and performance optimization as the product moves toward launch.",
  },
  {
    period: "Jun 2025 - Dec 2025",
    title: "Focused IT Career Relaunch",
    company: "Self-driven preparation",
    detail:
      "Returned to the software path with disciplined practice, project building, and active opportunity search, converting a career break into a stronger, more intentional developer journey.",
  },
  {
    period: "2022",
    title: "Backend Developer Training and Work",
    company: "Backend development exposure",
    detail:
      "Completed 3 months of backend training and worked for 6 months on server-side development fundamentals, API thinking, database operations, and production-oriented debugging.",
  },
  {
    period: "2020 - 2025",
    title: "Wood Manufacturing Industry",
    company: "Operations experience",
    detail:
      "Built strong professional discipline, ownership, consistency, and problem-solving habits while working in a fast-paced manufacturing environment.",
  },
  {
    period: "2019",
    title: "Postgraduate Degree",
    company: "Madurai Kamaraj University",
    detail:
      "Completed postgraduate education and developed the academic foundation that later supported the transition into full-stack web development.",
  },
];

const strengths = [
  "Feature development in active product teams",
  "Bug fixing with practical debugging discipline",
  "Responsive UI implementation and visual polish",
  "Performance-focused frontend improvements",
  "Backend fundamentals with Node.js and databases",
  "Career resilience, ownership, and long-term consistency",
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="text-left">
            <span className="eyebrow">About Me</span>
            <h2 className="section-title">A developer shaped by product work, discipline, and a determined comeback.</h2>
            <p className="section-copy">
              I am a web developer from India currently working at BSEtec as a Junior Web Developer. My present work on Quantum Wallet gives me real-world exposure to fintech-style interfaces, wallet flows, product stability, and performance-sensitive UI delivery.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              My path includes manufacturing industry experience, backend training, and a focused return to IT in 2025. That journey gives me a grounded work ethic, patience under pressure, and the hunger to keep improving every sprint.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div key={strength} className="flex items-start gap-3 rounded-[8px] border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-300/15 text-xs text-emerald-300">
                    <i className="fa-solid fa-check" aria-hidden="true"></i>
                  </span>
                  <span className="text-sm font-semibold leading-6 text-slate-200">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="experience" className="glass-card panel-grid p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Experience Timeline</p>
                <h3 className="mt-2 text-2xl font-black text-white">Professional Journey</h3>
              </div>
              <span className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-black text-slate-950">Current: BSEtec</span>
            </div>

            <div className="mt-7 space-y-6">
              {timeline.map((item, index) => (
                <article key={item.period} className="relative grid gap-4 pl-9 text-left">
                  <span className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-300/20 ring-8 ring-slate-950/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                  </span>
                  {index !== timeline.length - 1 && <span className="absolute left-2.5 top-7 h-[calc(100%+1rem)] w-px bg-white/10"></span>}
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{item.period}</p>
                    <h4 className="mt-1 text-lg font-black text-white">{item.title}</h4>
                    <p className="text-sm font-bold text-emerald-300">{item.company}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
