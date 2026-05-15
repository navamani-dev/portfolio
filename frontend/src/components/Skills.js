const skillGroups = [
  {
    icon: "fa-brands fa-react",
    title: "Frontend Engineering",
    description: "Building responsive, polished interfaces with attention to interaction quality and maintainable UI structure.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend Development",
    description: "Comfortable with server-side fundamentals, API flows, authentication basics, and database-backed features.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "PHP Basics"],
  },
  {
    icon: "fa-solid fa-database",
    title: "Data and Tools",
    description: "Practical workflow with databases, testing APIs, version control, and developer tooling used in daily delivery.",
    skills: ["MySQL", "MongoDB", "Postman", "GitHub", "VS Code"],
  },
  {
    icon: "fa-solid fa-gauge-high",
    title: "Product Quality",
    description: "Focused on real product outcomes: bug fixes, UI improvements, performance optimization, and stable releases.",
    skills: ["Debugging", "Performance", "UI Polish", "Code Review Readiness", "Production Mindset"],
  },
];

export default function Skill() {
  return (
    <section id="skills" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl text-left">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">A practical full-stack toolkit for building clean, reliable web products.</h2>
          <p className="section-copy">
            My skill set is centered on MERN-style web development, product UI implementation, backend fundamentals, and the daily engineering habits needed to contribute in a professional team.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="glass-card p-6 text-left" style={{ animationDelay: `${index * 90}ms` }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-emerald-50 text-xl text-emerald-700">
                <i className={group.icon} aria-hidden="true"></i>
              </div>
              <h3 className="mt-5 text-xl font-black text-ink">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
