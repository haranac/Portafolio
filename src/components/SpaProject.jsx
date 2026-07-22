import RecuerdaMedImage from "../assets/RecuerdaMed.png";

const projectUrl = "https://recuerda-med-psi.vercel.app/";

const features = [
  "Registro e inicio de sesión",
  "Administración de medicamentos",
  "Configuración de dosis y horarios",
  "Recordatorios de medicamentos",
  "Historial de tomas",
  "Edición y eliminación de registros",
];

function SpaProject() {
  return (
    <section
      id="spa-final"
      className="scroll-mt-20 bg-slate-900/50 py-24"
    >
      <div className="mx-auto w-[90%] max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Proyecto principal
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
          Proyecto SPA final
        </h2>

        <article className="mt-10 grid overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 lg:grid-cols-2">
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir proyecto RecuerdaMed"
            className="group block min-h-80 overflow-hidden bg-slate-800"
          >
            <img
              src={RecuerdaMedImage}
              alt="Vista previa del proyecto RecuerdaMed"
              className="h-full w-full cursor-pointer object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
            />
          </a>

          <div className="p-7 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-3xl font-bold text-slate-100">
                RecuerdaMed
              </h3>

              <span className="rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                En desarrollo
              </span>
            </div>

            <div className="mt-8 space-y-7">
              <div>
                <h4 className="font-semibold text-sky-400">
                  Problema que resuelve
                </h4>

                <p className="mt-2 leading-7 text-slate-400">
                  Ayuda a organizar medicamentos, dosis y horarios para reducir
                  olvidos y mejorar el seguimiento de tratamientos médicos.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sky-400">
                  Público objetivo
                </h4>

                <p className="mt-2 leading-7 text-slate-400">
                  Personas que siguen tratamientos médicos, adultos mayores y
                  familiares responsables del cuidado de un paciente.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sky-400">
                  Funcionalidades principales
                </h4>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sky-400">
                  Estado actual
                </h4>

                <p className="mt-2 leading-7 text-slate-400">
                  El proyecto se encuentra en etapa de diseño y desarrollo
                  inicial. Ya se definieron sus requisitos, historias de usuario
                  y estructura principal.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["React", "JavaScript", "Tailwind CSS"].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SpaProject;
