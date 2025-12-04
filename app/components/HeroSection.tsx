import Image from "next/image";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <header
      id="home"
      className="bg-primary text-primary-foreground min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

      <div className="z-10 flex flex-col items-center">
        {/* Logo placeholder */}
        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4">
          <Image
            src="/LogoWhite.jpg"
            alt="Logo CodeRAM"
            className="w-120 h-120 object-contain rounded-full"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          CodeRAM
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-primary-foreground/90">
          Soluciones digitales que impulsan el crecimiento de academias,
          gimnasios y empresas.
        </p>

        {/* Call to action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection("servicios")}
            className="px-8 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transform hover:scale-105 transition-all shadow-lg"
          >
            Nuestros Servicios
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground font-bold rounded-lg hover:bg-primary-foreground/10 transform hover:scale-105 transition-all shadow-lg"
          >
            Contáctanos
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="z-10 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        <div className="bg-white/20 p-4 rounded-lg">
          <p className="text-4xl font-extrabold">+50</p>
          <p className="text-sm text-primary-foreground/80 mt-1">
            Proyectos Exitosos
          </p>
        </div>
        <div className="bg-white/20 p-4 rounded-lg">
          <p className="text-4xl font-extrabold">+30</p>
          <p className="text-sm text-primary-foreground/80 mt-1">
            Clientes Satisfechos
          </p>
        </div>
        <div className="bg-white/20 p-4 rounded-lg">
          <p className="text-4xl font-extrabold">99%</p>
          <p className="text-sm text-primary-foreground/80 mt-1">
            Tasa de Satisfacción
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="z-10 mt-8 max-w-2xl">
        <blockquote className="bg-transparent p-4 rounded-lg">
          <p className="italic text-lg text-primary-foreground/90">
            "Gracias a CodeRAM, nuestra academia digitalizó todo su proceso,
            aumentando la matrícula en un 40%."
          </p>
          <footer className="mt-2 font-semibold text-primary-foreground">
            - María G, Directora de Academia
          </footer>
        </blockquote>
      </div>
    </header>
  );
}
