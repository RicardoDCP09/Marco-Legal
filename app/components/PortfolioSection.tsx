import { CheckCircle } from "lucide-react";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "./scroll-reveal";
import academia from "../assets/academia.png";
import gimnasio from "../assets/fitmax.png";
import erp from "../assets/erp.png";
import ecommerce from "../assets/Ecommerce.png";
import healcare from "../assets/healcare.png";
import logitrak from "../assets/logitrak.png";

interface PortfolioSectionProps {
  isActive: boolean;
}

export default function PortfolioSection({ isActive }: PortfolioSectionProps) {
  return (
    <section id="portafolio" className={`${isActive ? "block" : "hidden"}`}>
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-blue bg-clip-text text-white mb-6">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proyectos exitosos que demuestran nuestra experiencia y calidad
          </p>
        </div>
      </ScrollReveal>

      <ScrollRevealStagger
        staggerDelay={0.15}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {[
          {
            title: "Academia Digital Plus",
            category: "Sistema Educativo",
            description:
              "Plataforma completa de gestión académica para una red de 5 academias con más de 2,000 estudiantes.",
            image: academia,
            results: [
              "40% aumento en matrículas",
              "60% reducción en tiempo administrativo",
              "99.9% uptime",
            ],
            tech: ["React", "Node.js", "PostgreSQL", "AWS"],
          },
          {
            title: "FitMax Pro",
            category: "Gestión Deportiva",
            description:
              "Sistema integral para cadena de gimnasios con 8 sucursales y app móvil para 5,000+ usuarios.",
            image: gimnasio,
            results: [
              "25% aumento en retención",
              "50% mejora en experiencia",
              "Automatización completa",
            ],
            tech: ["React Native", "Python", "MongoDB", "Firebase"],
          },
          {
            title: "ERP Empresarial",
            category: "Sistema Empresarial",
            description:
              "Solución ERP personalizada para empresa manufacturera con módulos de inventario, ventas y finanzas.",
            image: erp,
            results: [
              "30% reducción en costos",
              "Real-time reporting",
              "Integración completa",
            ],
            tech: ["Vue.js", "Laravel", "MySQL", "Docker"],
          },
          {
            title: "E-commerce Gourmet",
            category: "Comercio Electrónico",
            description:
              "Tienda online para productos gourmet con sistema de suscripciones y delivery tracking.",
            image: ecommerce,
            results: [
              "200% aumento en ventas",
              "Mobile-first design",
              "Pagos seguros",
            ],
            tech: ["Next.js", "Stripe", "Prisma", "Vercel"],
          },
          {
            title: "HealthCare Manager",
            category: "Sistema Médico",
            description:
              "Plataforma de gestión para clínicas con historiales médicos digitales y telemedicina.",
            image: healcare,
            results: [
              "Cumplimiento HIPAA",
              "Telemedicina integrada",
              "Historiales digitales",
            ],
            tech: ["Angular", "C#", "SQL Server", "Azure"],
          },
          {
            title: "LogiTrack",
            category: "Logística",
            description:
              "Sistema de tracking y gestión logística para empresa de transporte con GPS en tiempo real.",
            image: logitrak,
            results: [
              "Real-time tracking",
              "Optimización de rutas",
              "Reducción de costos",
            ],
            tech: ["React", "Express", "Redis", "Google Maps API"],
          },
        ].map((project, index) => (
          <ScrollRevealItem key={index} variant="scale">
            <div
              key={index}
              className="bg-card rounded-xl border border-border hover:border-primary/50 transition-all overflow-hidden group"
            >
              <img
                src={
                  typeof project.image === "string"
                    ? project.image
                    : project.image?.src || "/placeholder.svg"
                }
                alt={project.title}
                className="w-full h-48 object-cover"
                width={300}
                height={200}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Resultados:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary/10 text-secondary-foreground border border-secondary/20 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>

      <ScrollReveal variant="fadeInUp" delay={0.2}>
        <div className="text-center">
          <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/90 transition font-bold">
            Ver Más Proyectos
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
