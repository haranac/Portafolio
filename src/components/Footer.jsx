function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex w-[90%] max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>
          © {currentYear} Sergio Ricardo Leal García.
        </p>

        <p>
          Desarrollado con React y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;