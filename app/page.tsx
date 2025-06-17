"use client"

import type React from "react"
import Image from 'next/image'
//Import Images
import logo_Alt from "./assets/logo_Alt.png"
import academia from "./assets/academia.png"
import gimnasio from "./assets/fitmax.png"
import erp from "./assets/erp.png"
import ecommerce from "./assets/Ecommerce.png"
import healcare from "./assets/healcare.png"
import logitrak from "./assets/logitrak.png"
import placeholderW from "./assets/placeholderW.png"
import placeholderW2 from "./assets/plaholderW2.png"
import placeholderM from "./assets/placeholderM.png"
import { useState, useEffect } from "react"
import {
  Code,
  Smartphone,
  Settings,
  HelpCircle,
  CheckCircle,
  Users,
  Award,
  Zap,
  Target,
  Lightbulb,
  Shield,
  Star,
  ArrowRight,
  ChevronDown,
  Globe,
  Database,
  Cloud,
} from "lucide-react"

export default function ArepaTechPage() {
  const [activeSection, setActiveSection] = useState("sobre")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
    const form = e.target as HTMLFormElement
    form.reset()
  }

  useEffect(() => {
    setActiveSection("sobre")
  }, [])

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <header
        id="home"
        className="bg-gradient-to-br from-orange-500 to-orange-600 text-white min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4 relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

        <div className="z-10 flex flex-col items-center">
          {/* Logo placeholder */}
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <Image
              src={logo_Alt}
              alt="Logo ArepaTech"
              className="w-120 h-120 object-contain"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">ArepaTech</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-orange-100">
            Soluciones digitales que impulsan el crecimiento de academias, gimnasios y empresas.
          </p>

          {/* Call to action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("servicios")}
              className="px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all shadow-lg"
            >
              Nuestros Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all shadow-lg"
            >
              Contáctanos
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="z-10 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
          <div className="bg-white/20 p-4 rounded-lg">
            <p className="text-4xl font-extrabold">+50</p>
            <p className="text-sm text-orange-100 mt-1">Proyectos Exitosos</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg">
            <p className="text-4xl font-extrabold">+30</p>
            <p className="text-sm text-orange-100 mt-1">Clientes Satisfechos</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg">
            <p className="text-4xl font-extrabold">99%</p>
            <p className="text-sm text-orange-100 mt-1">Tasa de Satisfacción</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="z-10 mt-8 max-w-2xl">
          <blockquote className="bg-transparent p-4 rounded-lg">
            <p className="italic text-lg text-orange-100">
              "Gracias a ArepaTech, nuestra academia digitalizó todo su proceso, aumentando la matrícula en un 40%."
            </p>
            <footer className="mt-2 font-semibold text-white">- María G, Directora de Academia</footer>
          </blockquote>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 px-4 py-3 justify-center">
          <button onClick={() => showSection("sobre")} className="hover:text-orange-500 font-medium transition">
            Sobre Nosotros
          </button>
          <button onClick={() => showSection("mision")} className="hover:text-orange-500 font-medium transition">
            Misión y Visión
          </button>
          <button onClick={() => showSection("proceso")} className="hover:text-orange-500 font-medium transition">
            Nuestro Proceso
          </button>
          <button onClick={() => showSection("tecnologias")} className="hover:text-orange-500 font-medium transition">
            Tecnologías
          </button>
          <button onClick={() => showSection("servicios")} className="hover:text-orange-500 font-medium transition">
            Servicios
          </button>
          <button onClick={() => showSection("portafolio")} className="hover:text-orange-500 font-medium transition">
            Portafolio
          </button>
          <button onClick={() => showSection("equipo")} className="hover:text-orange-500 font-medium transition">
            Equipo
          </button>
          <button onClick={() => showSection("testimonios")} className="hover:text-orange-500 font-medium transition">
            Testimonios
          </button>
          <button onClick={() => showSection("faq")} className="hover:text-orange-500 font-medium transition">
            FAQ
          </button>
          <button onClick={() => showSection("contacto")} className="hover:text-orange-500 font-medium transition">
            Contacto
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Sobre Nosotros */}
        <section id="sobre" className={`${activeSection === "sobre" ? "block" : "hidden"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">¿Quiénes Somos?</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              ArepaTech se especializa en el desarrollo de sistemas administrativos, plataformas web empresariales y
              aplicaciones móviles personalizadas. Ofrecemos soluciones modulares, escalables y seguras para empresas
              que desean digitalizar su operatividad y potenciar su alcance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enfoque Personalizado</h3>
              <p className="text-gray-600">
                Cada proyecto es único. Desarrollamos soluciones específicas para las necesidades de tu negocio.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tecnología Avanzada</h3>
              <p className="text-gray-600">
                Utilizamos las últimas tecnologías y mejores prácticas del desarrollo de software.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seguridad Garantizada</h3>
              <p className="text-gray-600">
                Implementamos los más altos estándares de seguridad en todos nuestros desarrollos.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Nuestra Historia</h3>
                <p className="text-gray-700 mb-4">
                  Fundada en 2025, ArepaTech nació con la visión de democratizar la tecnología para empresas venezolanas
                  y latinoamericanas. Comenzamos como un pequeño equipo de desarrolladores apasionados y hemos crecido
                  hasta convertirnos en una empresa reconocida en el sector.
                </p>
                <p className="text-gray-700">
                  Hoy, con más de 50 proyectos exitosos, seguimos comprometidos con la excelencia y la innovación en
                  cada línea de código que escribimos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-4">Logros Destacados</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>50+ proyectos completados exitosamente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>99% de satisfacción del cliente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Presencia en 5 países de Latinoamérica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Equipo de 15+ profesionales especializados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section id="mision" className={`${activeSection === "mision" ? "block" : "hidden"}`}>
          <h2 className="text-4xl font-bold text-orange-600 mb-12 text-center">Misión y Visión</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-orange-500">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold">Misión</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Desarrollar soluciones tecnológicas innovadoras, funcionales y escalables que impulsen la transformación
                digital de empresas y organizaciones, ofreciendo software de alta calidad adaptado al mercado venezolano
                y latinoamericano.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-orange-500">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Lightbulb className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold">Visión</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ser reconocidos como líderes en el desarrollo de software en Venezuela, destacando por nuestra
                creatividad, compromiso con la calidad y capacidad de generar impacto positivo en la productividad y
                competitividad de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-xl">
            <h3 className="text-3xl font-bold text-center mb-8">Nuestros Valores</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Excelencia</h4>
                <p className="text-orange-100 text-sm">Buscamos la perfección en cada proyecto</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Colaboración</h4>
                <p className="text-orange-100 text-sm">Trabajamos en equipo con nuestros clientes</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Innovación</h4>
                <p className="text-orange-100 text-sm">Siempre buscamos nuevas formas de resolver problemas</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Integridad</h4>
                <p className="text-orange-100 text-sm">Actuamos con transparencia y honestidad</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Proceso */}
        <section id="proceso" className={`${activeSection === "proceso" ? "block" : "hidden"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">Nuestro Proceso de Trabajo</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Seguimos una metodología probada que garantiza resultados excepcionales en cada proyecto
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Análisis y Planificación",
                description: "Estudiamos a fondo tus necesidades y objetivos para crear una estrategia personalizada.",
                icon: <Target className="w-8 h-8" />,
                details: [
                  "Reuniones de descubrimiento",
                  "Análisis de requerimientos",
                  "Definición de alcance",
                  "Planificación de cronograma",
                ],
              },
              {
                step: "02",
                title: "Diseño y Prototipado",
                description: "Creamos wireframes y prototipos interactivos para validar la experiencia de usuario.",
                icon: <Lightbulb className="w-8 h-8" />,
                details: [
                  "Diseño UX/UI",
                  "Prototipado interactivo",
                  "Validación con cliente",
                  "Refinamiento de diseños",
                ],
              },
              {
                step: "03",
                title: "Desarrollo",
                description:
                  "Nuestro equipo de desarrolladores expertos construye tu solución usando las mejores tecnologías.",
                icon: <Code className="w-8 h-8" />,
                details: ["Desarrollo frontend", "Desarrollo backend", "Integración de APIs", "Pruebas continuas"],
              },
              {
                step: "04",
                title: "Testing y QA",
                description: "Realizamos pruebas exhaustivas para garantizar la calidad y funcionamiento óptimo.",
                icon: <CheckCircle className="w-8 h-8" />,
                details: [
                  "Pruebas funcionales",
                  "Pruebas de rendimiento",
                  "Pruebas de seguridad",
                  "Testing de usuario",
                ],
              },
              {
                step: "05",
                title: "Lanzamiento",
                description: "Desplegamos tu solución y te acompañamos en el proceso de puesta en marcha.",
                icon: <Zap className="w-8 h-8" />,
                details: [
                  "Despliegue en producción",
                  "Configuración de servidores",
                  "Migración de datos",
                  "Capacitación de usuarios",
                ],
              },
              {
                step: "06",
                title: "Soporte y Mantenimiento",
                description:
                  "Brindamos soporte continuo y actualizaciones para mantener tu sistema siempre optimizado.",
                icon: <Settings className="w-8 h-8" />,
                details: [
                  "Soporte técnico 24/7",
                  "Actualizaciones regulares",
                  "Monitoreo de rendimiento",
                  "Mejoras continuas",
                ],
              },
            ].map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-orange-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">{phase.icon}</div>
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">{phase.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {phase.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tecnologías */}
        <section id="tecnologias" className={`${activeSection === "tecnologias" ? "block" : "hidden"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">Tecnologías que Dominamos</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Utilizamos las tecnologías más modernas y confiables del mercado para crear soluciones robustas y
              escalables
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                category: "Frontend",
                icon: <Globe className="w-8 h-8" />,
                techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.techs.map((tech, idx) => (
                    <div key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 rounded-xl">
            <h3 className="text-3xl font-bold text-center mb-8">Stack Tecnológico Completo</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-orange-400">Bases de Datos</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• PostgreSQL</li>
                  <li>• MySQL</li>
                  <li>• MongoDB</li>
                  <li>• Redis</li>
                  <li>• Firebase</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-orange-400">DevOps & Herramientas</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Docker</li>
                  <li>• Kubernetes</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Git & GitHub</li>
                  <li>• Monitoring Tools</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-orange-400">Metodologías</h4>
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

        {/* Servicios */}
        <section id="servicios" className={`${activeSection === "servicios" ? "block" : "hidden"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">Nuestros Servicios</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios de desarrollo de software para impulsar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Code className="h-10 w-10 text-orange-500" />,
                title: "Desarrollo Web",
                description: "Sitios web modernos, responsivos y optimizados para el éxito.",
                features: ["Responsive Design", "SEO Optimizado", "Alta Performance", "Seguridad Avanzada"],
              },
              {
                icon: <Smartphone className="h-10 w-10 text-orange-500" />,
                title: "Aplicaciones Móviles",
                description: "Apps nativas y multiplataforma para iOS y Android.",
                features: ["Desarrollo Nativo", "Cross-Platform", "UI/UX Excepcional", "Integración APIs"],
              },
              {
                icon: <Settings className="h-10 w-10 text-orange-500" />,
                title: "Automatización",
                description: "Optimización de procesos mediante sistemas inteligentes.",
                features: [
                  "Workflows Automatizados",
                  "Integración de Sistemas",
                  "Reportes Automáticos",
                  "Eficiencia Operativa",
                ],
              },
              {
                icon: <HelpCircle className="h-10 w-10 text-orange-500" />,
                title: "Soporte Técnico",
                description: "Asistencia para mantener tus sistemas siempre operativos.",
                features: ["Soporte 24/7", "Mantenimiento Preventivo", "Actualizaciones", "Monitoreo Continuo"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              >
                <div className="bg-orange-100 p-4 rounded-full mb-6 inline-block">{service.icon}</div>
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

          <div className="bg-orange-50 p-12 rounded-xl">
            <h3 className="text-3xl font-bold text-center mb-8 text-orange-800">Servicios Especializados</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-orange-600">Sistemas de Gestión Académica</h4>
                <p className="text-gray-700 mb-4">
                  Plataformas completas para instituciones educativas con gestión de estudiantes, profesores,
                  calificaciones y más.
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
                <h4 className="text-xl font-bold mb-4 text-orange-600">Sistemas para Gimnasios</h4>
                <p className="text-gray-700 mb-4">
                  Soluciones integrales para la gestión de gimnasios y centros deportivos.
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

        {/* Portafolio */}
        <section id="portafolio" className={`${activeSection === "portafolio" ? "block" : "hidden"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">Nuestro Portafolio</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Algunos de nuestros proyectos más destacados que demuestran nuestra experiencia y calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Academia Digital Plus",
                category: "Sistema Educativo",
                description:
                  "Plataforma completa de gestión académica para una red de 5 academias con más de 2,000 estudiantes.",
                image: academia,
                results: ["40% aumento en matrículas", "60% reducción en tiempo administrativo", "99.9% uptime"],
                tech: ["React", "Node.js", "PostgreSQL", "AWS"],
              },
              {
                title: "FitMax Pro",
                category: "Gestión Deportiva",
                description:
                  "Sistema integral para cadena de gimnasios con 8 sucursales y app móvil para 5,000+ usuarios.",
                image: gimnasio,
                results: ["25% aumento en retención", "50% mejora en experiencia", "Automatización completa"],
                tech: ["React Native", "Python", "MongoDB", "Firebase"],
              },
              {
                title: "ERP Empresarial",
                category: "Sistema Empresarial",
                description:
                  "Solución ERP personalizada para empresa manufacturera con módulos de inventario, ventas y finanzas.",
                image: erp,
                results: ["30% reducción en costos", "Real-time reporting", "Integración completa"],
                tech: ["Vue.js", "Laravel", "MySQL", "Docker"],
              },
              {
                title: "E-commerce Gourmet",
                category: "Comercio Electrónico",
                description: "Tienda online para productos gourmet con sistema de suscripciones y delivery tracking.",
                image: ecommerce,
                results: ["200% aumento en ventas", "Mobile-first design", "Pagos seguros"],
                tech: ["Next.js", "Stripe", "Prisma", "Vercel"],
              },
              {
                title: "HealthCare Manager",
                category: "Sistema Médico",
                description: "Plataforma de gestión para clínicas con historiales médicos digitales y telemedicina.",
                image: healcare,
                results: ["Cumplimiento HIPAA", "Telemedicina integrada", "Historiales digitales"],
                tech: ["Angular", "C#", "SQL Server", "Azure"],
              },
              {
                title: "LogiTrack",
                category: "Logística",
                description:
                  "Sistema de tracking y gestión logística para empresa de transporte con GPS en tiempo real.",
                image: logitrak,
                results: ["Real-time tracking", "Optimización de rutas", "Reducción de costos"],
                tech: ["React", "Express", "Redis", "Google Maps API"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
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
                        <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition font-bold">
              Ver Más Proyectos
            </button>
          </div>
        </section>

        {/* Equipo */}
        <section id="equipo" className={`${activeSection === "equipo" ? "block" : "hidden"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">Nuestro Equipo</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Conoce a los profesionales apasionados que hacen posible cada proyecto exitoso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: "Ricardo Colmenares",
                role: "CEO & Founder",
                bio: "10+ años en desarrollo de software y liderazgo empresarial.",
                skills: ["Estrategia", "Liderazgo", "Arquitectura"],
              },
              {
                name: "Yoangel Godoy",
                role: "CTO",
                bio: "Experto en arquitectura de software y tecnologías emergentes.",
                skills: ["Arquitectura", "DevOps", "Cloud"],
              },
              {
                name: "Mariana Morales",
                role: "Lead Frontend Developer",
                bio: "Especialista en React, Vue.js y experiencias de usuario excepcionales.",
                skills: ["React", "Vue.js", "UX/UI"],
              },
              {
                name: "Adrian Vergel",
                role: "Lead Backend Developer",
                bio: "Experto en APIs, bases de datos y sistemas escalables.",
                skills: ["Node.js", "Python", "Databases"],
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden text-center">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">¿Quieres unirte a nuestro equipo?</h3>
              <p className="text-xl text-orange-100">
                Siempre estamos buscando talento excepcional para formar parte de ArepaTech
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Ambiente Colaborativo</h4>
                <p className="text-orange-100 text-sm">Trabajamos en equipo y valoramos cada aporte</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Crecimiento Profesional</h4>
                <p className="text-orange-100 text-sm">Oportunidades de aprendizaje y desarrollo continuo</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Proyectos Desafiantes</h4>
                <p className="text-orange-100 text-sm">Trabaja en proyectos innovadores y de alto impacto</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-bold">
                Ver Oportunidades
              </button>
            </div>
          </div>
        </section>

        {/* Testimonios Expandidos */}
        <section id="testimonios" className={`${activeSection === "testimonios" ? "block" : "hidden"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "María González",
                role: "Directora de Academia",
                company: "Instituto Educativo San José",
                image: placeholderW2,
                rating: 5,
                testimonial:
                  "Gracias a ArepaTech, nuestra academia digitalizó todo su proceso, aumentando la matrícula en un 40%. El sistema es intuitivo y el soporte excepcional.",
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
                    <p className="text-sm text-orange-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.testimonial}"</p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">Proyecto: {testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 p-12 rounded-xl">
            <h3 className="text-3xl font-bold text-center mb-8 text-orange-800">Casos de Éxito Destacados</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-orange-600">Academia Digital Plus</h4>
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
                <h4 className="text-xl font-bold mb-4 text-orange-600">FitMax Pro</h4>
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
        </section>

        {/* FAQ */}
        <section id="faq" className={`${activeSection === "faq" ? "block" : "hidden"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios y procesos
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
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
              <div key={index} className="bg-white rounded-lg shadow-md">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-orange-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-4">¿No encontraste la respuesta que buscabas?</p>
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition font-bold"
            >
              Contáctanos Directamente
            </button>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className={`${activeSection === "contacto" ? "block" : "hidden"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">Contáctanos</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              ¿Listo para transformar tu negocio? Conversemos sobre tu próximo proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-gray-600">Táchira, Venezuela</p>
                    <p className="text-gray-600">Disponible para proyectos remotos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">infoarepatech@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <p className="text-orange-600 font-medium">Soporte de emergencia 24/7 para clientes</p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                <div>
                  <label htmlFor="nombre" className="block mb-2 font-semibold text-gray-700">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block mb-2 font-semibold text-gray-700">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="servicio" className="block mb-2 font-semibold text-gray-700">
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
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
                  <label htmlFor="mensaje" className="block mb-2 font-semibold text-gray-700">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg hover:bg-orange-600 transition font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Enviar Mensaje
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ArepaTech</h3>
              <p className="text-gray-400 mb-4">
                Transformando ideas en soluciones digitales innovadoras para impulsar tu negocio.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Desarrollo Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Apps Móviles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sistemas de Gestión
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Automatización
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Nuestro Equipo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>infoarepatech@gmail.com</li>
                <li>+58 412-299-6916</li>
                <li>Táchira, Venezuela</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ArepaTech. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">¡Enviado!</h3>
            <p className="text-gray-600 mb-6">Gracias por contactarnos. Te responderemos muy pronto.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition font-bold w-full"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
