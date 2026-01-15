import { Star } from "lucide-react";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "./scroll-reveal";
import placeholderW2 from "../assets/plaholderW2.png";
import placeholderM from "../assets/placeholderM.png";
import placeholderW from "../assets/placeholderW.png";

interface TestimonialsSectionProps {
  isActive: boolean;
}

export default function TestimonialsSection({
  isActive,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonios" className={`${isActive ? "block" : "hidden"}`}>
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-blue bg-clip-text text-transparent mb-6">
            Testimonios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lo que dicen nuestros clientes sobre nosotros
          </p>
        </div>
      </ScrollReveal>

      <ScrollRevealStagger
        staggerDelay={0.15}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        {[
          {
            name: "María González",
            role: "Directora de Academia",
            company: "Instituto Educativo San José",
            image: placeholderW2,
            rating: 5,
            testimonial:
              "Gracias a CodeRAM, nuestra academia digitalizó todo su proceso, aumentando la matrícula en un 40%. El sistema es intuitivo y el soporte excepcional.",
            project: "Sistema de Gestión Académica",
          },
          {
            name: "Carlos Pérez",
            role: "Gerente de Producto",
            company: "TechStart Solutions",
            image: placeholderM,
            rating: 5,
            testimonial:
              "El equipo desarrolló una app móvil que mejoró la experiencia de nuestros usuarios significativamente. Superaron todas nuestras expectativas.",
            project: "Aplicación Móvil Empresarial",
          },
          {
            name: "Laura Rodríguez",
            role: "CEO",
            company: "FitMax Gym",
            image: placeholderW,
            rating: 5,
            testimonial:
              "Su soporte y automatización nos ha hecho ahorrar mucho tiempo y reducir errores. La inversión se pagó sola en 6 meses.",
            project: "Sistema de Gestión de Gimnasio",
          },
        ].map((testimonial, index) => (
          <ScrollRevealItem key={index} variant="fadeInUp">
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={
                    typeof testimonial.image === "string"
                      ? testimonial.image
                      : testimonial.image?.src || "/placeholder.svg"
                  }
                  alt={testimonial.name}
                  width={300}
                  height={200}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "{testimonial.testimonial}"
              </p>
              <div className="bg-primary/5 p-3 rounded-lg">
                <p className="text-sm font-medium text-primary">
                  Proyecto: {testimonial.project}
                </p>
              </div>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>

      <ScrollReveal variant="fadeInUp" delay={0.3}>
        <div className="bg-primary/5 p-12 rounded-xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Casos de Éxito Destacados
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-primary">
                Academia Digital Plus
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Aumento en matrículas:</span>
                  <span className="font-bold text-green-600">+40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Reducción tiempo administrativo:</span>
                  <span className="font-bold text-green-600">-60%</span>
                </div>
                <div className="flex justify-between">
                  <span>Satisfacción de usuarios:</span>
                  <span className="font-bold text-green-600">98%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI en primer año:</span>
                  <span className="font-bold text-green-600">250%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-primary">
                FitMax Pro
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Retención de miembros:</span>
                  <span className="font-bold text-green-600">+25%</span>
                </div>
                <div className="flex justify-between">
                  <span>Automatización de procesos:</span>
                  <span className="font-bold text-green-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>Usuarios activos en app:</span>
                  <span className="font-bold text-green-600">5,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Tiempo de implementación:</span>
                  <span className="font-bold text-blue-600">3 meses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
