const skillGroups = [
  {
    category: "Tecnologías",
    skills: ["HTML5", "JavaScript", "React", "Tailwind CSS", "PostgreSQL", "C++", "C#"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "GitHub", "Visual Studio Code"],
  },
  {
    category: "Conceptos",
    skills: [
      "Componentes",
      "Estados",
      "Hooks",
      "Single Page Applications",
    ],
  },
];

function Skills() {
  return (
    <section
      id="habilidades"
      className="scroll-mt-20 bg-slate-900/50 py-24"
    >
      <div className="mx-auto w-[90%] max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Tecnologías y conceptos
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
          Habilidades
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-100">
                {group.category}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;