import { Award } from "lucide-react";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "./scroll-reveal";

interface TeamSectionProps {
  isActive: boolean;
}

export default function TeamSection({ isActive }: TeamSectionProps) {
  return (
    <section id="equipo" className={`${isActive ? "block" : "hidden"}`}>
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-blue bg-clip-text text-transparent mb-6">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesionales apasionados comprometidos con la excelencia
          </p>
        </div>
      </ScrollReveal>

      <ScrollRevealStagger
        staggerDelay={0.15}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          {
            name: "Santiago Cárdenas",
            role: "CEO & Fundador",
            bio: "Visionario tecnológico con pasión por la innovación y el liderazgo.",
            skills: ["Liderazgo", "Estrategia", "Innovación"],
            gradient: "from-primary to-secondary",
          },
          {
            name: "Ricardo Colmenares",
            role: "COO",
            bio: "Experto en operaciones y gestión de proyectos tecnológicos.",
            skills: ["Operaciones", "Gestión", "Logística"],
            gradient: "from-secondary to-primary",
          },
          {
            name: "Rodrigo Bayona",
            role: "CMO",
            bio: "Estrategias de crecimiento y relaciones corporativas.",
            skills: ["Marketing", "Ventas", "Negocios"],
            gradient: "from-primary to-purple-500",
          },
          {
            name: "Mariana Morales",
            role: "Ingeniero de Sistemas",
            bio: "Experta en infraestructura, bases de datos y seguridad.",
            skills: ["Backend", "Cloud", "Seguridad"],
            gradient: "from-secondary to-cyan-500",
          },
          {
            name: "Adrian Vergel",
            role: "Ingeniero de Sistemas",
            bio: "Especialista en desarrollo frontend, móvil y experiencia de usuario.",
            skills: ["Frontend", "Mobile", "UX/UI"],
            gradient: "from-cyan-500 to-secondary",
          },
        ].map((member, index) => (
          <ScrollRevealItem key={index} variant="scale">
            <div className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              {/* Gradient Top Border */}
              <div className={`h-1 bg-gradient-to-r ${member.gradient}`}></div>

              {/* Card Content */}
              <div className="p-8 flex flex-col items-center relative">
                {/* Avatar with Gradient Ring */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity`}
                  ></div>
                  <div className="relative w-28 h-28 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-4xl font-bold text-primary group-hover:scale-110 transition-transform border-2 border-primary/30">
                    {member.name.charAt(0)}
                  </div>
                </div>

                {/* Name and Role */}
                <h3 className="text-2xl font-bold mb-2 text-foreground text-center">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3 text-center">
                  {member.role}
                </p>

                {/* Founder Badge */}
                {index < 3 && (
                  <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-bold mb-4 border border-secondary/30">
                    <Award className="w-3 h-3" />
                    <span>Socio y Fundador</span>
                  </div>
                )}

                {/* Bio */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed text-center">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
              ></div>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>

      <ScrollReveal variant="fadeInUp" delay={0.3}>
        <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-12 rounded-2xl mt-16 border border-primary/30 shadow-2xl shadow-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              ¿Quieres unirte a nuestro equipo?
            </h3>
            <p className="text-lg opacity-90">
              Estamos siempre en búsqueda de talento apasionado por la
              tecnología y la innovación.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="#contacto"
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-foreground transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Oportunidades
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
