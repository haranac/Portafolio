import ProfileImage from "../assets/Profile.jpeg";

function Hero() {
  return (
    <section id="inicio" className="flex min-h-screen items-center pt-24">
      <div className="mx-auto grid w-[90%] max-w-6xl items-center gap-12 py-16 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-sky-400">Hola, soy</p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Sergio Ricardo Leal García
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300">
            Estudiante de Desarrollo de Software
          </h2>

          <p className="mt-6 max-w-xl leading-7 text-slate-400">
            Me interesa crear aplicaciones modernas, funcionales y
            orientadas a facilitar la vida de los usuarios. Actualmente estoy
            fortaleciendo mis conocimientos en React, JavaScript, Tailwind CSS y
            desarrollo de aplicaciones SPA.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
            >
              Contactarme
            </a>
          </div>
        </div>

        <div className="mx-auto h-96 w-72 overflow-hidden rounded-full border-4 border-sky-500/40 bg-slate-900 shadow-2xl shadow-sky-500/10 md:h-[28rem] md:w-80">
          <img
            src="/ruta-de-tu-foto.jpg"
            alt="Fotografía de Sergio Ricardo Leal García"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
