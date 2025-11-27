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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  useEffect(() => {
    setActiveSection("sobre");
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <HeroSection scrollToSection={scrollToSection} />
      <Navigation showSection={showSection} />

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
