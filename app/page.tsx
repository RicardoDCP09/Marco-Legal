"use client";

import type React from "react";
import { useState, useEffect } from "react";

// Components
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import MissionVisionSection from "./components/MissionVisionSection";
import ProcessSection from "./components/ProcessSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SuccessModal from "./components/SuccessModal";
import Chatbot from "./components/chatbot";
import PageHeader from "./components/PageHeader";
import LatestPostsSection from "./components/LatestPostsSection";

// Helper to get header info
const getSectionInfo = (section: string) => {
  switch (section) {
    case "sobre":
      return {
        title: "Sobre Nosotros",
        description: "Conoce al equipo y la historia detrás de CodeRAM.",
        breadcrumbs: [{ label: "Inicio", href: "#" }, { label: "Nosotros" }],
      };
    case "mision":
      return {
        title: "Misión y Visión",
        description: "Nuestros valores y el futuro que estamos construyendo.",
        breadcrumbs: [{ label: "Inicio", href: "#" }, { label: "Misión" }],
      };
    case "proceso":
      return {
        title: "Nuestro Proceso",
        description: "Cómo transformamos tus ideas en realidad, paso a paso.",
        breadcrumbs: [{ label: "Inicio", href: "#" }, { label: "Proceso" }],
      };
    case "tecnologias":
      return {
        title: "Tecnologías",
        description: "Herramientas de vanguardia para soluciones robustas.",
        breadcrumbs: [{ label: "Inicio", href: "#" }, { label: "Tech" }],
      };
    case "servicios":
      return {
        title: "Servicios",
        description: "Soluciones digitales a medida para escalar tu negocio.",
        breadcrumbs: [{ label: "Inicio", href: "#" }, { label: "Servicios" }],
      };
    case "portafolio":
      return {
        title: "Portafolio",
        description: "Explora nuestros casos de éxito y proyectos destacados.",
        breadcrumbs: [{ label: "Inicio", href: "#" }, { label: "Proyectos" }],
      };
    case "equipo":
      return {
        title: "Nuestro Equipo",
        description: "Expertos apasionados por la innovación y el código.",
        breadcrumbs: [{ label: "Inicio", href: "#" }, { label: "Equipo" }],
      };
    case "testimonios":
      return {
        title: "Testimonios",
        description: "Lo que dicen nuestros clientes sobre nuestro trabajo.",
        breadcrumbs: [{ label: "Inicio", href: "#" }, { label: "Reseñas" }],
      };
    case "faq":
      return {
        title: "Preguntas Frecuentes",
        description:
          "Respuestas a las dudas más comunes sobre nuestros servicios.",
        breadcrumbs: [{ label: "Inicio", href: "#" }, { label: "FAQ" }],
      };
    case "contacto":
      return {
        title: "Contáctanos",
        description: "¿Listo para empezar? Hablemos de tu próximo proyecto.",
        breadcrumbs: [{ label: "Inicio", href: "#" }, { label: "Contacto" }],
      };
    default:
      return {
        title: "CodeRAM",
        description: "Soluciones Digitales",
      };
  }
};

export default function CodeRAMPage() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle navigation and section switching
  const handleSectionChange = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showSection = (id: string) => handleSectionChange(id);
  const scrollToSection = (id: string) => handleSectionChange(id);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      empresa: formData.get("empresa"),
      servicio: formData.get("servicio"),
      mensaje: formData.get("mensaje"),
      date: new Date().toISOString(),
      status: "pending",
    };

    try {
      await fetch("/api/proposals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsModalOpen(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Hubo un error al enviar el formulario. Por favor intenta de nuevo."
      );
    }
  };

  useEffect(() => {
    // Ensure we start at the top with Hero visible
    setActiveSection("inicio");
    window.scrollTo(0, 0);
  }, []);

  const sectionInfo = getSectionInfo(activeSection);

  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <Chatbot />
      <Navigation showSection={showSection} activeSection={activeSection} />
      {/* Hero Section - Acts as Home Page */}
      <div className={activeSection === "inicio" ? "block" : "hidden"}>
        <HeroSection scrollToSection={scrollToSection} />
        <LatestPostsSection />
      </div>
      {/* Mini Hero (PageHeader) for other sections */}
      {activeSection !== "inicio" && (
        <PageHeader
          title={sectionInfo.title}
          description={sectionInfo.description}
          breadcrumbs={sectionInfo.breadcrumbs as any}
        />
      )}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        <AboutSection isActive={activeSection === "sobre"} />
        <MissionVisionSection isActive={activeSection === "mision"} />
        <ProcessSection isActive={activeSection === "proceso"} />
        <TechnologiesSection isActive={activeSection === "tecnologias"} />
        <ServicesSection isActive={activeSection === "servicios"} />
        <PortfolioSection isActive={activeSection === "portafolio"} />
        <TeamSection isActive={activeSection === "equipo"} />
        <TestimonialsSection isActive={activeSection === "testimonios"} />
        <FAQSection isActive={activeSection === "faq"} />
        <ContactSection
          isActive={activeSection === "contacto"}
          handleSubmit={handleSubmit}
        />
      </main>
      <Footer />
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
