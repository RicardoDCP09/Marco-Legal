import { Target, Zap, Shield, CheckCircle } from "lucide-react";

interface AboutSectionProps {
  isActive: boolean;
}

export default function AboutSection({ isActive }: AboutSectionProps) {
  return (
    <section id="sobre" className={`${isActive ? "block" : "hidden"}`}>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-6">
          ¿Quiénes Somos?
        </h2>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          CodeRAM se especializa en el desarrollo de sistemas administrativos,
          plataformas web empresariales y aplicaciones móviles personalizadas.
          Ofrecemos soluciones modulares, escalables y seguras para empresas que
          desean digitalizar su operatividad y potenciar su alcance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">Enfoque Personalizado</h3>
          <p className="text-gray-600">
            Cada proyecto es único. Desarrollamos soluciones específicas para
            las necesidades de tu negocio.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">Tecnología Avanzada</h3>
          <p className="text-gray-600">
            Utilizamos las últimas tecnologías y mejores prácticas del
            desarrollo de software.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">Seguridad Garantizada</h3>
          <p className="text-gray-600">
            Implementamos los más altos estándares de seguridad en todos
            nuestros desarrollos.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Nuestra Historia
            </h3>
            <p className="text-gray-700 mb-4">
              Fundada en 2025, CodeRAM nació con la visión de democratizar la
              tecnología para empresas venezolanas y latinoamericanas.
              Comenzamos como un pequeño equipo de desarrolladores apasionados y
              hemos crecido hasta convertirnos en una empresa reconocida en el
              sector.
            </p>
            <p className="text-gray-700">
              Hoy, con más de 50 proyectos exitosos, seguimos comprometidos con
              la excelencia y la innovación en cada línea de código que
              escribimos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-lg mb-4">Logros Destacados</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>50+ proyectos completados exitosamente</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>99% de satisfacción del cliente</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Presencia en 5 países de Latinoamérica</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Equipo de 15+ profesionales especializados</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
