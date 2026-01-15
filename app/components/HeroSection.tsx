"use client";

import { useState, useEffect } from "react";
import Loader from "./loader";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CursorGlow from "./cursor-glow";
import GridBackground from "./grid-background";
import FloatingParticles from "./floating-particles";
import Aurora from "./Aurora";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const words = [
    { text: "Innovación", className: "text-primary" },
    { text: "Velocidad", className: "text-primary" },
    { text: "Excelencia", className: "text-primary" },
    { text: "Resultados", className: "text-primary" },
  ];

  if (loading) return <Loader />;

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Aurora Background Effect */}
      <Aurora
        colorStops={["#3a06e5", "#034a96", "#3a06e5"]}
        amplitude={1.5}
        blend={0.9}
        speed={0.8}
      />

      {/* Background Effects */}
      <CursorGlow />
      <GridBackground />
      <FloatingParticles />

      {/* Gradient Overlay - Subtle to let Aurora shine */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-background/90 pointer-events-none z-10" />

      <header
        id="home"
        className="relative w-full h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-6 gap-6 md:gap-8 z-20"
      >
        {/* Left Side: Content */}
        <div className="flex-1 flex flex-col items-start text-left space-y-4 md:space-y-6 z-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-primary/30 shadow-lg shadow-primary/20">
              <Image
                src="/LogoWhite.jpg"
                alt="Logo CodeRAM"
                width={96}
                height={96}
                className="p-2 w-full h-full object-contain rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 text-xs md:text-sm font-medium text-foreground shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Líderes en Desarrollo de Software
          </motion.div>

          <div className="space-y-2 md:space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              Crea Experiencias
              <br />
              <span className="bg-gradient-blue bg-clip-text text-transparent">
                Inolvidables
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-lg md:text-2xl lg:text-3xl font-bold text-foreground/90"
            >
              <span>Somos sinónimo de</span>
              <TypewriterEffect
                words={words}
                className="text-left"
                cursorClassName="bg-primary"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              No solo escribimos código; diseñamos el futuro de tu empresa.
              Combinamos arquitectura robusta, diseño premium y tecnología de
              punta para entregarte aplicaciones que dominan el mercado. Con{" "}
              <b className="text-primary">Kodi</b>, la excelencia está
              garantizada.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection("servicios")}
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transform hover:-translate-y-1 text-sm md:text-base"
            >
              Nuestros Servicios
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-md border border-primary/20 text-foreground font-bold rounded-xl hover:bg-card/80 hover:border-primary/40 transition-all text-sm md:text-base"
            >
              Contáctanos
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-4 md:gap-6 pt-2"
          >
            <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm">
              <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>+50 Proyectos</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm">
              <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>Soporte 24/7</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Mascot */}
        <div className="flex-1 flex items-center justify-center relative md:justify-end z-10 max-w-md lg:max-w-lg">
          {/* Background Glow for Mascot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full relative"
            >
              <Image
                src="/Kodi.png"
                alt="Kodi Mascota CodeRAM"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating Cards around Mascot */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -left-2 md:-left-4 top-12 md:top-20 bg-card/80 backdrop-blur-md p-3 rounded-xl border border-primary/20 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                  🚀
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Crecimiento</p>
                  <p className="text-foreground font-bold text-sm">+150%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -right-4 md:-right-8 bottom-20 md:bottom-32 bg-card/80 backdrop-blur-md p-3 rounded-xl border border-secondary/20 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-lg">
                  ⚡
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Eficiencia</p>
                  <p className="text-foreground font-bold text-sm">
                    Maximizada
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>
    </div>
  );
}
