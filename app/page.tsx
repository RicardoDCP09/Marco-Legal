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

export default function CodeRAMPage() {
  const [activeSection, setActiveSection] = useState("sobre");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
      await fetch("http://localhost:3001/proposals", {
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
    setActiveSection("sobre");
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navigation showSection={showSection} activeSection={activeSection} />
      <HeroSection scrollToSection={scrollToSection} />

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
