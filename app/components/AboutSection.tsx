import { useEffect, useState } from "react";
import { Target, Zap, Shield, CheckCircle } from "lucide-react";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "./scroll-reveal";
import AnimatedCounter from "./AnimatedCounter";

interface AboutSectionProps {
  isActive: boolean;
}

export default function AboutSection({ isActive }: AboutSectionProps) {
  const [content, setContent] = useState({
    title: "¿Quiénes Somos?",
    text: "CodeRAM se especializa en el desarrollo de sistemas administrativos, plataformas web empresariales y aplicaciones móviles personalizadas. Ofrecemos soluciones modulares, escalables y seguras para empresas que desean digitalizar su operatividad y potenciar su alcance.",
  });

  useEffect(() => {
    fetch("http://localhost:3001/content/1")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Error fetching about content:", err));
  }, []);

  return (
    <section id="sobre" className={`${isActive ? "block" : "hidden"}`}>
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-blue bg-clip-text text-white mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {content.text}
          </p>
        </div>
      </ScrollReveal>

      <ScrollRevealStagger
        staggerDelay={0.15}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        <ScrollRevealItem variant="fadeInUp">
          <div className="bg-card p-8 rounded-xl border border-border text-center transition-all hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">
              Enfoque Personalizado
            </h3>
            <p className="text-muted-foreground">
              Cada proyecto es único. Desarrollamos soluciones específicas para
              las necesidades de tu negocio.
            </p>
          </div>
        </ScrollRevealItem>
        <ScrollRevealItem variant="fadeInUp">
          <div className="bg-card p-8 rounded-xl border border-border text-center transition-all hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">
              Tecnología Avanzada
            </h3>
            <p className="text-muted-foreground">
              Utilizamos las últimas tecnologías y mejores prácticas del
              desarrollo de software.
            </p>
          </div>
        </ScrollRevealItem>
        <ScrollRevealItem variant="fadeInUp">
          <div className="bg-card p-8 rounded-xl border border-border text-center transition-all hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">
              Seguridad Garantizada
            </h3>
            <p className="text-muted-foreground">
              Implementamos los más altos estándares de seguridad en todos
              nuestros desarrollos.
            </p>
          </div>
        </ScrollRevealItem>
      </ScrollRevealStagger>

      <ScrollReveal variant="fadeInUp" delay={0.3}>
        <div className="bg-card/50 border border-border p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nuestra Historia
              </h3>
              <p className="text-muted-foreground mb-4">
                Fundada en 2025, CodeRAM nació con la visión de democratizar la
                tecnología para empresas venezolanas y latinoamericanas.
                Comenzamos como un pequeño equipo de desarrolladores apasionados
                y hemos crecido hasta convertirnos en una empresa reconocida en
                el sector.
              </p>
              <p className="text-muted-foreground">
                Hoy, con más de 50 proyectos exitosos, seguimos comprometidos
                con la excelencia y la innovación en cada línea de código que
                escribimos.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-bold text-lg mb-4">Logros Destacados</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="flex items-center gap-1 font-medium">
                    <AnimatedCounter value={50} suffix="+" /> proyectos
                    completados
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="flex items-center gap-1 font-medium">
                    <AnimatedCounter value={99} suffix="%" /> satisfacción del
                    cliente
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="flex items-center gap-1 font-medium">
                    Presencia en <AnimatedCounter value={5} /> países
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="flex items-center gap-1 font-medium">
                    Equipo de <AnimatedCounter value={15} suffix="+" />{" "}
                    profesionales
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
