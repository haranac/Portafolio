function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 py-24">
      <div className="mx-auto w-[90%] max-w-4xl">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl shadow-sky-500/5 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Contacto profesional
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-100 sm:text-4xl">
            ¿Te interesa conocer más sobre mi trabajo?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Puedes consultar mis proyectos en GitHub o comunicarte conmigo
            mediante correo electrónico o LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:srlg117@proton.me"
              className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Correo electrónico
            </a>

            <a
              href="https://github.com/haranac"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sergio-ricardo-leal-garc%C3%ADa-550521422/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;