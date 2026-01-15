import { ArrowRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

interface ContactSectionProps {
  isActive: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ContactSection({
  isActive,
  handleSubmit,
}: ContactSectionProps) {
  return (
    <section id="contacto" className={`${isActive ? "block" : "hidden"}`}>
      <ScrollReveal variant="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-blue bg-clip-text text-transparent mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para transformar tu negocio? Conversemos sobre tu próximo
            proyecto
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12">
        <ScrollReveal variant="fadeInLeft" delay={0.2}>
          <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Dirección</h4>
                <p className="text-muted-foreground">Táchira, Venezuela</p>
                <p className="text-muted-foreground">
                  Disponible para proyectos remotos
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground">infocodram@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Teléfono</h4>
                <p className="text-gray-600">+58 412-299-6916</p>
                <p className="text-gray-600">WhatsApp disponible</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold mb-4">Horarios de Atención</h4>
            <div className="space-y-2 text-gray-600">
              <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 2:00 PM</p>
              <p>Domingos: Cerrado</p>
              <p className="text-primary font-medium">
                Soporte de emergencia 24/7 para clientes
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeInRight" delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-xl border border-border space-y-6"
          >
            <div>
              <label
                htmlFor="nombre"
                className="block mb-2 font-semibold text-foreground"
              >
                Nombre Completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700"
              >
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="empresa"
                className="block mb-2 font-semibold text-gray-700"
              >
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="Nombre de tu empresa"
              />
            </div>
            <div>
              <label
                htmlFor="servicio"
                className="block mb-2 font-semibold text-gray-700"
              >
                Servicio de Interés
              </label>
              <select
                id="servicio"
                name="servicio"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
              >
                <option value="">Selecciona un servicio</option>
                <option value="desarrollo-web">Desarrollo Web</option>
                <option value="app-movil">Aplicación Móvil</option>
                <option value="sistema-gestion">Sistema de Gestión</option>
                <option value="automatizacion">Automatización</option>
                <option value="consultoria">Consultoría</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block mb-2 font-semibold text-gray-700"
              >
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground px-6 py-4 rounded-lg hover:bg-secondary/90 transition font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Enviar Mensaje
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
