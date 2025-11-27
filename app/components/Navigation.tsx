interface NavigationProps {
  showSection: (id: string) => void;
}

export default function Navigation({ showSection }: NavigationProps) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-4 px-4 py-3 justify-center">
        <button
          onClick={() => showSection("sobre")}
          className="hover:text-primary font-medium transition"
        >
          Sobre Nosotros
        </button>
        <button
          onClick={() => showSection("mision")}
          className="hover:text-primary font-medium transition"
        >
          Misión y Visión
        </button>
        <button
          onClick={() => showSection("proceso")}
          className="hover:text-primary font-medium transition"
        >
          Nuestro Proceso
        </button>
        <button
          onClick={() => showSection("tecnologias")}
          className="hover:text-primary font-medium transition"
        >
          Tecnologías
        </button>
        <button
          onClick={() => showSection("servicios")}
          className="hover:text-primary font-medium transition"
        >
          Servicios
        </button>
        <button
          onClick={() => showSection("portafolio")}
          className="hover:text-primary font-medium transition"
        >
          Portafolio
        </button>
        <button
          onClick={() => showSection("equipo")}
          className="hover:text-primary font-medium transition"
        >
          Equipo
        </button>
        <button
          onClick={() => showSection("testimonios")}
          className="hover:text-primary font-medium transition"
        >
          Testimonios
        </button>
        <button
          onClick={() => showSection("faq")}
          className="hover:text-primary font-medium transition"
        >
          FAQ
        </button>
        <button
          onClick={() => showSection("contacto")}
          className="hover:text-primary font-medium transition"
        >
          Contacto
        </button>
      </div>
    </nav>
  );
}
