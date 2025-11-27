import {
  Code,
  Smartphone,
  Settings,
  HelpCircle,
  CheckCircle,
} from "lucide-react";

interface ServicesSectionProps {
  isActive: boolean;
}

export default function ServicesSection({ isActive }: ServicesSectionProps) {
  return (
    <section id="servicios" className={`${isActive ? "block" : "hidden"}`}>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Nuestros Servicios
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Ofrecemos una gama completa de servicios de desarrollo de software
          para impulsar tu negocio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: <HelpCircle className="h-10 w-10 text-primary" />,
            title: "Desarrollo Web",
            description:
              "Sitios web modernos, responsivos y optimizados para el éxito.",
            features: [
              "Responsive Design",
              "SEO Optimizado",
              "Alta Performance",
              "Seguridad Avanzada",
            ],
          },
          {
            icon: <Smartphone className="h-10 w-10 text-primary" />,
            title: "Aplicaciones Móviles",
            description: "Apps nativas y multiplataforma para iOS y Android.",
            features: [
              "Desarrollo Nativo",
              "Cross-Platform",
              "UI/UX Excepcional",
              "Integración APIs",
            ],
          },
          {
            icon: <Settings className="h-10 w-10 text-primary" />,
            title: "Automatización",
            description:
              "Optimización de procesos mediante sistemas inteligentes.",
            features: [
              "Workflows Automatizados",
              "Integración de Sistemas",
              "Reportes Automáticos",
              "Eficiencia Operativa",
            ],
          },
          {
            icon: <HelpCircle className="h-10 w-10 text-primary" />,
            title: "Soporte Técnico",
            description:
              "Asistencia para mantener tus sistemas siempre operativos.",
            features: [
              "Soporte 24/7",
              "Mantenimiento Preventivo",
              "Actualizaciones",
              "Monitoreo Continuo",
            ],
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-6 inline-block">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="text-left space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 p-12 rounded-xl">
        <h3 className="text-3xl font-bold text-center mb-8 text-primary">
          Servicios Especializados
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4 text-primary">
              Sistemas de Gestión Académica
            </h4>
            <p className="text-gray-700 mb-4">
              Plataformas completas para instituciones educativas con gestión de
              estudiantes, profesores, calificaciones y más.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Gestión de matrículas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Control de asistencia</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sistema de calificaciones</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Portal para padres</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4 text-primary">
              Sistemas para Gimnasios
            </h4>
            <p className="text-gray-700 mb-4">
              Soluciones integrales para la gestión de gimnasios y centros
              deportivos.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Gestión de membresías</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Control de acceso</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Programación de clases</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>App móvil para miembros</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
