import {
  Target,
  Lightbulb,
  Code,
  CheckCircle,
  Zap,
  Settings,
} from "lucide-react";

interface ProcessSectionProps {
  isActive: boolean;
}

export default function ProcessSection({ isActive }: ProcessSectionProps) {
  return (
    <section id="proceso" className={`${isActive ? "block" : "hidden"}`}>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Nuestro Proceso de Trabajo
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Seguimos una metodología probada que garantiza resultados
          excepcionales en cada proyecto
        </p>
      </div>

      <div className="space-y-12">
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
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-shrink-0">
              <div className="bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold">
                {phase.step}
              </div>
            </div>
            <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  {phase.icon}
                </div>
                <h3 className="text-2xl font-bold">{phase.title}</h3>
              </div>
              <p className="text-gray-700 text-lg mb-4">{phase.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {phase.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
