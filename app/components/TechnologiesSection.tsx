import { Globe, Database, Smartphone, Cloud } from "lucide-react";

interface TechnologiesSectionProps {
  isActive: boolean;
}

export default function TechnologiesSection({
  isActive,
}: TechnologiesSectionProps) {
  return (
    <section id="tecnologias" className={`${isActive ? "block" : "hidden"}`}>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Tecnologías que Dominamos
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Utilizamos las tecnologías más modernas y confiables del mercado para
          crear soluciones robustas y escalables
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-16">
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
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{category.category}</h3>
            <div className="space-y-2">
              {category.techs.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

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
    </section>
  );
}
