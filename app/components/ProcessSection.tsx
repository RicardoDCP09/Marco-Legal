import {
  Target,
  Lightbulb,
  Code,
  CheckCircle,
  Zap,
  Settings,
} from "lucide-react";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "./scroll-reveal";

interface ProcessSectionProps {
  isActive: boolean;
}

export default function ProcessSection({ isActive }: ProcessSectionProps) {
  return (
    <section id="proceso" className={`${isActive ? "block" : "hidden"}`}>
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-blue bg-clip-text text-white mb-6">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seguimos una metodología probada que garantiza resultados
            excepcionales en cada proyecto
          </p>
        </div>
      </ScrollReveal>

      <ScrollRevealStagger staggerDelay={0.2} className="space-y-12">
        {[
          {
            step: "01",
            title: "Análisis y Planificación",
            description:
              "Estudiamos a fondo tus necesidades y objetivos para crear una estrategia personalizada.",
            icon: <Target className="w-8 h-8" />,
            details: [
              "Reuniones de descubrimiento",
              "Análisis de requerimientos",
              "Definición de alcance",
              "Planificación de cronograma",
            ],
          },
          {
            step: "02",
            title: "Diseño y Prototipado",
            description:
              "Creamos wireframes y prototipos interactivos para validar la experiencia de usuario.",
            icon: <Lightbulb className="w-8 h-8" />,
            details: [
              "Diseño UX/UI",
              "Prototipado interactivo",
              "Validación con cliente",
              "Refinamiento de diseños",
            ],
          },
          {
            step: "03",
            title: "Desarrollo",
            description:
              "Nuestro equipo de desarrolladores expertos construye tu solución usando las mejores tecnologías.",
            icon: <Code className="w-8 h-8" />,
            details: [
              "Desarrollo frontend",
              "Desarrollo backend",
              "Integración de APIs",
              "Pruebas continuas",
            ],
          },
          {
            step: "04",
            title: "Testing y QA",
            description:
              "Realizamos pruebas exhaustivas para garantizar la calidad y funcionamiento óptimo.",
            icon: <CheckCircle className="w-8 h-8" />,
            details: [
              "Pruebas funcionales",
              "Pruebas de rendimiento",
              "Pruebas de seguridad",
              "Testing de usuario",
            ],
          },
          {
            step: "05",
            title: "Lanzamiento",
            description:
              "Desplegamos tu solución y te acompañamos en el proceso de puesta en marcha.",
            icon: <Zap className="w-8 h-8" />,
            details: [
              "Despliegue en producción",
              "Configuración de servidores",
              "Migración de datos",
              "Capacitación de usuarios",
            ],
          },
          {
            step: "06",
            title: "Soporte y Mantenimiento",
            description:
              "Brindamos soporte continuo y actualizaciones para mantener tu sistema siempre optimizado.",
            icon: <Settings className="w-8 h-8" />,
            details: [
              "Soporte técnico 24/7",
              "Actualizaciones regulares",
              "Monitoreo de rendimiento",
              "Mejoras continuas",
            ],
          },
        ].map((phase, index) => (
          <ScrollRevealItem key={index} variant="fadeInUp">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/30">
                  {phase.step}
                </div>
              </div>
              <div className="flex-1 bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    {phase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  {phase.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {phase.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>
    </section>
  );
}
