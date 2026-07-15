function CardTemplate2({
  title,
  description,
  image,
  imageUrl,
  technologies = [],
  links = [],
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/10">
      {image && (
        <a
          href={imageUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir proyecto ${title}`}
          className="block overflow-hidden bg-slate-800"
        >
          <img
            src={image}
            alt={`Captura del proyecto ${title}`}
            className="h-56 w-full cursor-pointer object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
          />
        </a>
      )}

      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-100">
          {title}
        </h2>

        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>

        {technologies.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-400"
              >
                {technology}
              </li>
            ))}
          </ul>
        )}

        {links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${link.label} de ${title}`}
                  className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-400"
                >
                  {link.icon && (
                    <img
                      src={link.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-5 object-contain"
                    />
                  )}

                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default CardTemplate2;