import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "SPA final", href: "#spa-final" },
    { name: "Contacto", href: "#contacto" },
  ];

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex w-[90%] max-w-6xl items-center justify-between py-4">
        <a
          href="#inicio"
          className="text-xl font-bold text-sky-400"
          onClick={closeMenu}
        >
          Portafolio
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-sky-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Abrir menú de navegación"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-200 transition hover:border-sky-400 hover:text-sky-400 md:hidden"
        >
          <span className="text-2xl">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <ul className="mx-auto flex w-[90%] max-w-6xl flex-col py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-sky-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar;
