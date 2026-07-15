import CardTemplate2 from "./CardTemplate2.jsx";
import TetrisImage from "../assets/Tetris.png";
import BlackjackImage from "../assets/Blackjack.png";

const projects = [
  {
    id: 1,
    title: "Blackjack",
    description:
      "Aplicación web que permite jugar al blackjack en línea. Fue desarrollada junto a un compañero para practicar estados y eventos en React.",
    image: BlackjackImage,
    imageUrl: "https://new-blackjack.vercel.app/",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    links: [],
  },
  {
    id: 2,
    title: "Tetris",
    description:
      "Juego clásico de tetris utilizado para practicar en C# y desarrollo de aplicaciones de escritorio.",
    image: TetrisImage,
    imageUrl: "https://github.com/haranac/Tetris",
    technologies: ["C#", "Windows Forms", "Diseño de interfaces"],
    links: [],
  },
];

function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 py-24">
      <div className="mx-auto w-[90%] max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Trabajos realizados
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
          Mis proyectos
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
          Estos proyectos representan algunos de los conocimientos y conceptos
          que he aplicado durante mi formación.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <CardTemplate2
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
