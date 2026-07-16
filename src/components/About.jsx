const aboutItems = [
  {
    title: "Intereses profesionales",
    description:
      "Me interesa el desarrollo web y de escritorio, la creación de aplicaciones y el diseño de interfaces claras y funcionales.",
  },
  {
    title: "Habilidades desarrolladas",
    description:
      "He trabajado con React, JavaScript, Tailwind CSS, C#, C++, Git y GitHub.",
  },
  {
    title: "Áreas por aprender",
    description:
      "Me gustaría continuar aprendiendo sobre bases de datos, autenticación, consumo de APIs y pruebas de software.",
  },
];

function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 py-24">
      <div className="mx-auto w-[90%] max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Conóceme
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
          Sobre mí
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
          Lista de mis intereses, habilidades y áreas que me gustaría aprender en el futuro.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {aboutItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500"
            >
              <span className="text-sm font-bold text-sky-400">
                0{index + 1}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-slate-100">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
