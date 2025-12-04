"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Info,
  Target,
  Settings,
  Cpu,
  Briefcase,
  Folder,
  Users,
  MessageSquare,
  HelpCircle,
  Mail,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  showSection: (id: string) => void;
  activeSection: string;
}

export default function Navigation({
  showSection,
  activeSection,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "sobre", label: "Sobre Nosotros", icon: Info },
    { id: "mision", label: "Misión", icon: Target },
    { id: "proceso", label: "Proceso", icon: Settings },
    { id: "tecnologias", label: "Tecnologías", icon: Cpu },
    { id: "servicios", label: "Servicios", icon: Briefcase },
    { id: "portafolio", label: "Portafolio", icon: Folder },
    { id: "equipo", label: "Equipo", icon: Users },
    { id: "testimonios", label: "Testimonios", icon: MessageSquare },
    { id: "faq", label: "FAQ", icon: HelpCircle },
    { id: "contacto", label: "Contacto", icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    showSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled || isOpen
          ? "bg-white/80 backdrop-blur-md shadow-sm border-gray-200/50"
          : "bg-white/80 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => showSection("sobre")}
          >
            <div className="bg-primary/10 p-2 rounded-lg">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              CodeRAM
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1.5 group",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-4 h-4 transition-transform group-hover:scale-110",
                        isActive && "scale-110"
                      )}
                    />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "xl:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out origin-top",
          isOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 flex items-center gap-3",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive && "text-primary")} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
