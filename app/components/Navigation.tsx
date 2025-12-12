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
  Lock,
  BookOpen,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
    { id: "mision", label: "Misión", icon: Target },
    { id: "proceso", label: "Proceso", icon: Settings },
    { id: "tecnologias", label: "Tecnologías", icon: Cpu },
    { id: "servicios", label: "Servicios", icon: Briefcase },
    { id: "portafolio", label: "Portafolio", icon: Folder },
    { id: "equipo", label: "Equipo", icon: Users },
    { id: "testimonios", label: "Testimonios", icon: MessageSquare },
    { id: "faq", label: "FAQ", icon: HelpCircle },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "contacto", label: "Contacto", icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    const isHomePage = window.location.pathname === "/";

    if (id === "blog") {
      window.location.href = "/blog";
      return;
    }

    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }

    showSection(id);
    setIsOpen(false);
  };

  // Menu Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || isOpen
            ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-200/50"
            : "bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-200/50"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => showSection("sobre")}
            >
              <div className="bg-gradient-to-br from-primary to-blue-600 p-2.5 rounded-xl shadow-lg shadow-primary/20 text-white">
                <Code2 className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                CodeRAM
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden 2xl:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "relative px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 group",
                      isActive
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="w-px h-6 bg-gray-200 mx-2" />

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/admin/login"
                className="p-2 rounded-full text-gray-500 hover:text-primary hover:bg-blue-50 transition-colors"
                title="Acceso Administrativo"
              >
                <Lock className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="2xl:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors border border-gray-200/50 bg-white/50 backdrop-blur-sm"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 2xl:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl 2xl:hidden flex flex-col"
      >
        <div className="p-5 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold text-lg">Menú</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                variants={itemVariants}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-all flex items-center gap-3",
                  isActive
                    ? "text-primary bg-primary/10 shadow-sm shadow-primary/5"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5",
                    isActive ? "text-primary" : "text-gray-400"
                  )}
                />
                {item.label}
              </motion.button>
            );
          })}
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <motion.a
            variants={itemVariants}
            href="/admin/login"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:border-primary hover:text-primary hover:bg-white transition-all shadow-sm"
          >
            <Lock className="w-4 h-4" />
            Acceso Administrativo
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
