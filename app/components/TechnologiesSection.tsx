import { Globe, Database, Smartphone, Cloud } from "lucide-react";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "./scroll-reveal";

interface TechnologiesSectionProps {
  isActive: boolean;
}

export default function TechnologiesSection({
  isActive,
}: TechnologiesSectionProps) {
  return (
    <section id="tecnologias" className={`${isActive ? "block" : "hidden"}`}>
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-blue bg-clip-text text-white mb-6">
            Tecnologías que Utilizamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabajamos con las herramientas más modernas y eficientes del
            mercado
          </p>
        </div>
      </ScrollReveal>

      <ScrollRevealStagger
        staggerDelay={0.15}
        className="grid md:grid-cols-4 gap-8 mb-16"
      >
        {[
          {
            category: "Frontend",
            icon: <Globe className="w-8 h-8" />,
            techs: [
              "React",
              "Next.js",
              "Vue.js",
              "Angular",
              "TypeScript",
              "Tailwind CSS",
            ],
          },
          {
            category: "Backend",
            icon: <Database className="w-8 h-8" />,
            techs: ["Node.js", "Python", "PHP", "Java", "C#", ".NET"],
          },
          {
            category: "Móvil",
            icon: <Smartphone className="w-8 h-8" />,
            techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
          },
          {
            category: "Cloud",
            icon: <Cloud className="w-8 h-8" />,
            techs: ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify"],
          },
        ].map((category, index) => (
          <ScrollRevealItem key={index} variant="scale">
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.techs.map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-primary/10 px-3 py-1 rounded-full text-sm text-foreground border border-primary/20"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>

      <ScrollReveal variant="fadeInUp" delay={0.3}>
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 rounded-xl">
          <h3 className="text-3xl font-bold text-center mb-8">
            Stack Tecnológico Completo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-secondary">
                Bases de Datos
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• PostgreSQL</li>
                <li>• MySQL</li>
                <li>• MongoDB</li>
                <li>• Redis</li>
                <li>• Firebase</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-secondary">
                DevOps & Herramientas
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Docker</li>
                <li>• Kubernetes</li>
                <li>• CI/CD Pipelines</li>
                <li>• Git & GitHub</li>
                <li>• Monitoring Tools</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-secondary">
                Metodologías
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Agile/Scrum</li>
                <li>• Test-Driven Development</li>
                <li>• Clean Architecture</li>
                <li>• Microservicios</li>
                <li>• API-First Design</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
