"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const words = [
    { text: "Innovación" },
    { text: "Velocidad" },
    { text: "Excelencia" },
    { text: "Resultados" },
  ];

  return (
    <AuroraBackground className="min-h-screen bg-primary">
      <header
        id="home"
        className="bg-primary w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 md:py-0 gap-10 md:gap-0 z-10"
      >
        {/* Left Side: Content */}
        <div className="flex-1 flex flex-col items-start text-left space-y-8 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg">
              <Image
                src="/LogoWhite.jpg"
                alt="Logo CodeRAM"
                width={120}
                height={120}
                className="w-full h-full object-contain rounded-full p-2"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Líderes en Desarrollo de Software
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
            >
              Crea Experiencias <br />
              <span className="text-secondary">Inolvidables</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-2xl md:text-4xl font-bold text-white/90"
            >
              <span>Somos sinónimo de</span>
              <TypewriterEffect
                words={words}
                className="text-left text-white"
                cursorClassName="bg-secondary"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-white/80 max-w-xl leading-relaxed"
            >
              No solo escribimos código; diseñamos el futuro de tu empresa.
              Combinamos arquitectura robusta, diseño premium y tecnología de
              punta para entregarte aplicaciones que dominan el mercado. Con{" "}
              <b>Kodi</b>, la excelencia está garantizada.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection("servicios")}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-[0_0_20px_rgba(168,230,16,0.3)] hover:shadow-[0_0_30px_rgba(168,230,16,0.5)] transform hover:-translate-y-1"
            >
              Nuestros Servicios
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all hover:border-white/40"
            >
              Contáctanos
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-6 pt-4"
          >
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>+50 Proyectos</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>Soporte 24/7</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Mascot */}
        <div className="flex-1 flex items-center justify-center relative md:justify-end z-10 mt-12 md:mt-0">
          {/* Background Glow for Mascot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
          >
            <motion.div
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 2, -2, 0],
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
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -left-4 top-20 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  🚀
                </div>
                <div>
                  <p className="text-xs text-white/60">Crecimiento</p>
                  <p className="text-white font-bold">+150%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -right-8 bottom-32 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  ⚡
                </div>
                <div>
                  <p className="text-xs text-white/60">Eficiencia</p>
                  <p className="text-white font-bold">Maximizada</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>
    </AuroraBackground>
  );
}
