import { ChevronDown } from "lucide-react";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "./scroll-reveal";

interface FAQSectionProps {
  isActive: boolean;
}

export default function FAQSection({ isActive }: FAQSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="faq" className={`${isActive ? "block" : "hidden"}`}>
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-blue bg-clip-text text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios y procesos
          </p>
        </div>
      </ScrollReveal>

      <ScrollRevealStagger
        staggerDelay={0.1}
        className="max-w-4xl mx-auto space-y-6"
      >
        {[
          {
            question: "¿Cuánto tiempo toma desarrollar un proyecto?",
            answer:
              "El tiempo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que una aplicación compleja puede requerir 3-6 meses. Siempre proporcionamos un cronograma detallado en la fase de planificación.",
          },
          {
            question: "¿Ofrecen soporte después del lanzamiento?",
            answer:
              "Sí, ofrecemos diferentes planes de soporte que incluyen mantenimiento, actualizaciones, monitoreo y soporte técnico 24/7. También brindamos capacitación para que tu equipo pueda usar el sistema eficientemente.",
          },
          {
            question: "¿Trabajan con empresas fuera de Venezuela?",
            answer:
              "Absolutamente. Trabajamos con clientes en toda Latinoamérica y tenemos experiencia en proyectos internacionales. Nos adaptamos a diferentes zonas horarias y metodologías de trabajo remoto.",
          },
          {
            question: "¿Qué incluye el proceso de desarrollo?",
            answer:
              "Nuestro proceso incluye análisis de requerimientos, diseño UX/UI, desarrollo, testing, despliegue y soporte. También incluimos documentación completa, capacitación de usuarios y garantía de calidad.",
          },
          {
            question: "¿Pueden integrar sistemas existentes?",
            answer:
              "Sí, tenemos amplia experiencia en integración de sistemas. Podemos conectar tu nueva solución con CRMs, ERPs, sistemas de pago, APIs de terceros y cualquier sistema que ya uses en tu empresa.",
          },
          {
            question: "¿Qué metodologías de desarrollo utilizan?",
            answer:
              "Utilizamos metodologías ágiles como Scrum, con sprints de 2 semanas, reuniones regulares de seguimiento y entregas incrementales. Esto nos permite adaptarnos rápidamente a cambios y mantener al cliente informado.",
          },
          {
            question: "¿Ofrecen aplicaciones móviles?",
            answer:
              "Sí, desarrollamos aplicaciones nativas para iOS y Android, así como aplicaciones híbridas usando React Native y Flutter. Evaluamos cada proyecto para recomendar la mejor opción según tus necesidades.",
          },
          {
            question: "¿Cómo manejan la seguridad de los datos?",
            answer:
              "La seguridad es nuestra prioridad. Implementamos encriptación de datos, autenticación segura, copias de seguridad automáticas y cumplimos con estándares internacionales como GDPR y mejores prácticas de ciberseguridad.",
          },
        ].map((faq, index) => (
          <ScrollRevealItem key={index} variant="fadeInUp">
            <div
              key={index}
              className="bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>

      <ScrollReveal variant="fadeInUp" delay={0.3}>
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <button
            onClick={() => scrollToSection("contacto")}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition font-bold shadow-lg shadow-primary/20"
          >
            Contáctanos Directamente
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
