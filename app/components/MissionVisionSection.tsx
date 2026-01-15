import { useEffect, useState } from "react";
import { Target, Lightbulb, Award, Users, Shield } from "lucide-react";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "./scroll-reveal";

interface MissionVisionSectionProps {
  isActive: boolean;
}

export default function MissionVisionSection({
  isActive,
}: MissionVisionSectionProps) {
  const [mission, setMission] = useState({
    title: "Misión",
    text: "Desarrollar soluciones tecnológicas innovadoras, funcionales y escalables que impulsen la transformación digital de empresas y organizaciones, ofreciendo software de alta calidad adaptado al mercado venezolano y latinoamericano.",
  });
  const [vision, setVision] = useState({
    title: "Visión",
    text: "Ser reconocidos como líderes en el desarrollo de software en Venezuela, destacando por nuestra creatividad, compromiso con la calidad y capacidad de generar impacto positivo en la productividad y competitividad de nuestros clientes.",
  });

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3001/content/2").then((res) => res.json()),
      fetch("http://localhost:3001/content/3").then((res) => res.json()),
    ])
      .then(([missionData, visionData]) => {
        setMission(missionData);
        setVision(visionData);
      })
      .catch((err) => console.error("Error fetching mission/vision:", err));
  }, []);

  return (
    <section id="mision" className={`${isActive ? "block" : "hidden"}`}>
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <h2 className="text-4xl font-bold bg-gradient-blue bg-clip-text text-transparent mb-12 text-center">
          Misión y Visión
        </h2>
      </ScrollReveal>
      <ScrollRevealStagger
        staggerDelay={0.2}
        className="grid md:grid-cols-2 gap-12"
      >
        <ScrollRevealItem variant="fadeInLeft">
          <div className="bg-card shadow-xl rounded-xl p-8 border-t-4 border-secondary hover:border-primary transition-colors">
            <div className="flex items-center mb-6">
              <div className="bg-secondary/20 p-3 rounded-full mr-4">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                {mission.title}
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {mission.text}
            </p>
          </div>
        </ScrollRevealItem>
        <ScrollRevealItem variant="fadeInRight">
          <div className="bg-card shadow-xl rounded-xl p-8 border-t-4 border-primary hover:border-secondary transition-colors">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">{vision.title}</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {vision.text}
            </p>
          </div>
        </ScrollRevealItem>
      </ScrollRevealStagger>

      <ScrollReveal variant="fadeInUp" delay={0.3}>
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 rounded-xl">
          <h3 className="text-3xl font-bold text-center mb-8">
            Nuestros Valores
          </h3>
          <ScrollRevealStagger
            staggerDelay={0.1}
            className="grid md:grid-cols-4 gap-8"
          >
            <ScrollRevealItem variant="scale">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Excelencia</h4>
                <p className="text-primary-foreground/80 text-sm">
                  Buscamos la perfección en cada proyecto
                </p>
              </div>
            </ScrollRevealItem>
            <ScrollRevealItem variant="scale">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Colaboración</h4>
                <p className="text-primary-foreground/80 text-sm">
                  Trabajamos en equipo con nuestros clientes
                </p>
              </div>
            </ScrollRevealItem>
            <ScrollRevealItem variant="scale">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Innovación</h4>
                <p className="text-primary-foreground/80 text-sm">
                  Siempre buscamos nuevas formas de resolver problemas
                </p>
              </div>
            </ScrollRevealItem>
            <ScrollRevealItem variant="scale">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Integridad</h4>
                <p className="text-primary-foreground/80 text-sm">
                  Actuamos con transparencia y honestidad
                </p>
              </div>
            </ScrollRevealItem>
          </ScrollRevealStagger>
        </div>
      </ScrollReveal>
    </section>
  );
}
