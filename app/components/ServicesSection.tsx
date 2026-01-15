import {
  Code,
  Smartphone,
  Settings,
  HelpCircle,
  CheckCircle,
} from "lucide-react";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "./scroll-reveal";

interface ServicesSectionProps {
  isActive: boolean;
}

export default function ServicesSection({ isActive }: ServicesSectionProps) {
  return (
    <section id="servicios" className={`${isActive ? "block" : "hidden"}`}>
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-blue bg-clip-text text-transparent mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios de desarrollo de software
            para impulsar tu negocio
          </p>
        </div>
      </ScrollReveal>

      <ScrollRevealStagger
        staggerDelay={0.1}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
      >
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
          <ScrollRevealItem key={index} variant="fadeInUp">
            <div className="bg-card p-8 rounded-xl border border-border text-center transform hover:-translate-y-2 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10">
              <div className="bg-primary/20 p-4 rounded-full mb-6 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="text-left space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>

      <ScrollReveal variant="fadeInUp" delay={0.3}>
        <div className="bg-card/50 border border-border p-12 rounded-xl">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-blue bg-clip-text text-transparent">
            Servicios Especializados
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="text-xl font-bold mb-4 text-primary">
                Sistemas de Gestión Académica
              </h4>
              <p className="text-muted-foreground mb-4">
                Plataformas completas para instituciones educativas con gestión
                de estudiantes, profesores, calificaciones y más.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Gestión de Matrículas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-foreground">
                    Control de Calificaciones
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Portal de Padres</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Reportes Académicos</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="text-xl font-bold mb-4 text-primary">
                E-Commerce Personalizado
              </h4>
              <p className="text-muted-foreground mb-4">
                Tiendas online completas con gestión de inventario, pagos
                seguros y experiencia de compra optimizada.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Pasarelas de Pago</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Gestión de Inventario</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Panel Administrativo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Marketing Integrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
