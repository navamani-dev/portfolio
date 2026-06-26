const projects = [
  {
    title: "Quantum Wallet",
    type: "Professional Product",
    image: "portfolio.png",
    description:
      "Contributing to a crypto wallet platform at BSEtec with product flows similar to modern DeFi tools. Supporting feature development, bug resolution, UI refinement, and performance improvements before launch.",
    tags: ["React", "Crypto Wallet", "UI Improvements", "Performance", "Product Delivery"],
    demo: null,
    code: null,
    highlight: true,
  },
  {
    title: "Student Management System",
    type: "Full-stack CRUD App",
    image: "student.png",
    description:
      "Built a full-stack student record management application with create, read, update, and delete workflows, clean form handling, backend APIs, MySQL storage, and practical validation.",
    tags: ["Node.js", "Express.js", "MySQL", "CRUD", "Validation"],
    demo: "https://nodejs-mysql-crud-q6e0.onrender.com/",
    code: "https://github.com/navamani-dev",
  },
  {
    title: "Portfolio Website",
    type: "Personal Brand Platform",
    image: "portfolio.png",
    description:
      "Customized and integrated a professional portfolio experience with a Node.js contact backend and email delivery flow, demonstrating frontend polish and backend integration capability.",
    tags: ["React", "Node.js", "Email", "Responsive UI", "Deployment"],
    demo: "https://navamani-portfolio.onrender.com/",
    code: "https://github.com/navamani-dev",
  },
  {
    title: "Practice Projects",
    type: "Continuous Learning",
    image: "other.png",
    description:
      "A collection of focused mini projects used to sharpen development fundamentals, improve implementation speed, and practice real-world problem solving through hands-on code.",
    tags: ["JavaScript", "React", "Backend Basics", "GitHub"],
    demo: null,
    code: "https://github.com/navamani-dev",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 text-left lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2 className="section-title">Projects that show product thinking, backend fundamentals, and UI execution.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300">
            Recruiters can quickly see the mix that matters: current product experience, full-stack fundamentals, deployment practice, and consistent learning momentum.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className={`glass-card group overflow-hidden text-left ${project.highlight ? "lg:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]" : ""}`}>
              <div className="relative min-h-72 overflow-hidden bg-ink">
                <div className="panel-grid absolute inset-0 opacity-20"></div>
                <img src={project.image} alt={`${project.title} preview`} className="relative h-full min-h-72 w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/80 to-transparent"></div>
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-200 shadow-sm backdrop-blur">
                  {project.type}
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-white sm:text-3xl">{project.title}</h3>
                  {project.highlight && <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-black text-amber-200">Featured</span>}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.demo && (
                    <a className="primary-button" target="_blank" rel="noopener noreferrer" href={project.demo}>
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                      Live Demo
                    </a>
                  )}
                  {project.code && (
                    <a className="secondary-button" target="_blank" rel="noopener noreferrer" href={project.code}>
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                      View Code
                    </a>
                  )}
                  {!project.demo && !project.code && (
                    <span className="inline-flex items-center rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-black text-emerald-200">
                      Launch expected soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
