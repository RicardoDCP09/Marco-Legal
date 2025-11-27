import { Target, Lightbulb, Award, Users, Shield } from "lucide-react";

interface MissionVisionSectionProps {
  isActive: boolean;
}

export default function MissionVisionSection({
  isActive,
}: MissionVisionSectionProps) {
  return (
    <section id="mision" className={`${isActive ? "block" : "hidden"}`}>
      <h2 className="text-4xl font-bold text-primary mb-12 text-center">
        Misión y Visión
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-secondary">
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold">Misión</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Desarrollar soluciones tecnológicas innovadoras, funcionales y
            escalables que impulsen la transformación digital de empresas y
            organizaciones, ofreciendo software de alta calidad adaptado al
            mercado venezolano y latinoamericano.
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-secondary">
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold">Visión</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ser reconocidos como líderes en el desarrollo de software en
            Venezuela, destacando por nuestra creatividad, compromiso con la
            calidad y capacidad de generar impacto positivo en la productividad
            y competitividad de nuestros clientes.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 rounded-xl">
        <h3 className="text-3xl font-bold text-center mb-8">
          Nuestros Valores
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h4 className="font-bold mb-2">Excelencia</h4>
            <p className="text-primary-foreground/80 text-sm">
              Buscamos la perfección en cada proyecto
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="font-bold mb-2">Colaboración</h4>
            <p className="text-primary-foreground/80 text-sm">
              Trabajamos en equipo con nuestros clientes
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h4 className="font-bold mb-2">Innovación</h4>
            <p className="text-primary-foreground/80 text-sm">
              Siempre buscamos nuevas formas de resolver problemas
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h4 className="font-bold mb-2">Integridad</h4>
            <p className="text-primary-foreground/80 text-sm">
              Actuamos con transparencia y honestidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
