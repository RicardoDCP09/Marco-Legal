import { Users, Lightbulb, Award } from "lucide-react";

interface TeamSectionProps {
  isActive: boolean;
}

export default function TeamSection({ isActive }: TeamSectionProps) {
  return (
    <section id="equipo" className={`${isActive ? "block" : "hidden"}`}>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-6">Nuestro Equipo</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Conoce a los profesionales apasionados que hacen posible cada proyecto
          exitoso
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16 px-4">
        {[
          {
            name: "Ricardo Colmenares",
            role: "Ingeniero de Sistemas",
            bio: "Especialista en arquitectura de soluciones y gestión de productos.",
            skills: ["Arquitectura", "Producto", "Agile"],
          },
          {
            name: "Paulino Bueno C",
            role: "Director de Operaciones (COO)",
            bio: "Optimización de procesos y gestión eficiente de recursos.",
            skills: ["Operaciones", "Gestión", "Logística"],
          },
          {
            name: "Rodrigo Bayona",
            role: "Director Comercial (CMO)",
            bio: "Estrategias de crecimiento y relaciones corporativas.",
            skills: ["Marketing", "Ventas", "Negocios"],
          },
          {
            name: "Mariana Morales",
            role: "Ingeniero de Sistemas",
            bio: "Experta en infraestructura, bases de datos y seguridad.",
            skills: ["Backend", "Cloud", "Seguridad"],
          },
          {
            name: "Adrian Vergel",
            role: "Ingeniero de Sistemas",
            bio: "Especialista en desarrollo frontend, móvil y experiencia de usuario.",
            skills: ["Frontend", "Mobile", "UX/UI"],
          },
        ].map((member, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col"
          >
            <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="p-8 flex-1 flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-6 flex items-center justify-center text-3xl font-bold text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold mb-1 text-gray-800">
                {member.name}
              </h3>
              <p className="text-primary font-bold mb-2">{member.role}</p>
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold mb-4">
                <Award className="w-3 h-3" />
                <span>Socio y Fundador</span>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 rounded-xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">
            ¿Quieres unirte a nuestro equipo?
          </h3>
          <p className="text-xl text-primary-foreground/90">
            Siempre estamos buscando talento excepcional para formar parte de
            CodeRAM
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="font-bold mb-2">Ambiente Colaborativo</h4>
            <p className="text-primary-foreground/80 text-sm">
              Trabajamos en equipo y valoramos cada aporte
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h4 className="font-bold mb-2">Crecimiento Profesional</h4>
            <p className="text-primary-foreground/80 text-sm">
              Oportunidades de aprendizaje y desarrollo continuo
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h4 className="font-bold mb-2">Proyectos Desafiantes</h4>
            <p className="text-primary-foreground/80 text-sm">
              Trabaja en proyectos innovadores y de alto impacto
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition font-bold">
            Ver Oportunidades
          </button>
        </div>
      </div>
    </section>
  );
}
