import { useState, useEffect } from "react";
import Loader from "./loader";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { ArrowRight } from "lucide-react";
import CursorGlow from "./cursor-glow";
import GridBackground from "./grid-background";
import FloatingParticles from "./floating-particles";
import Aurora from "./Aurora";
import MagneticButton from "./MagneticButton";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [loading, setLoading] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const mascotMessages = [
    "¡Hola! Soy Kodi 👋",
    "Bienvenido a CodeRAM 🚀",
    "¿Listo para innovar? 💡",
    "Transformamos ideas ✨",
    "Soluciones a medida 🛠️",
  ];

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % mascotMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [mascotMessages.length]);

  const words = ["Innovación", "Velocidad", "Excelencia", "Resultados"];

  if (loading) return <Loader />;

  return (
    <div className="relative min-h-[100dvh] w-full bg-black overflow-hidden flex flex-col items-center justify-center">
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 py-20 sm:py-0 min-h-[100dvh]">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8 max-w-2xl">
          {/* Logo & Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/10 animate-pulse-slow">
              <Image
                src="/LogoWhite.jpg"
                alt="Logo CodeRAM"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-full p-2 opacity-90"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary shadow-glow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Líderes en Innovación Digital
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Impulsamos tu <br className="hidden md:block" />
              <span className="bg-gradient-blue bg-clip-text text-white drop-shadow-sm">
                Transformación Digital
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-2 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
              <span className="opacity-80">Somos sinónimo de</span>
              <FlipWords
                words={words}
                className="text-primary font-bold !px-0 !text-left"
              />
            </div>
          </motion.div>

          {/* Simplified Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
          >
            Diseñamos soluciones de software a medida que definen el futuro.
            Arquitectura robusta y diseño premium para empresas ambiciosas.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"
          >
            <MagneticButton onClick={() => scrollToSection("servicios")}>
              <div className="group relative min-w-[200px] px-8 py-3.5 bg-primary text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(0,212,255,0.5)] flex items-center justify-center gap-2 cursor-pointer">
                Explorar Servicios
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
              </div>
            </MagneticButton>

            <MagneticButton onClick={() => scrollToSection("contacto")}>
              <div className="min-w-[180px] px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all hover:border-white/20 cursor-pointer text-center">
                Contactar Ahora
              </div>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Mascot - Digital Companion Style */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 flex justify-center md:justify-end relative z-30 mt-8 md:mt-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            {/* Glow behind mascot */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-pulse-slow group-hover:bg-primary/30 transition-all" />

            {/* Floating Animation Wrapper */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full relative"
            >
              <Image
                src="/Kodi.png"
                alt="Kodi - Mascota CodeRAM"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(0,212,255,0.4)]"
                priority
              />

              {/* Dynamic Speech Bubble */}
              <div className="absolute -top-6 -right-6 hidden sm:block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMessageIndex}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black px-5 py-2.5 rounded-t-xl rounded-l-xl rounded-br-none shadow-xl font-bold text-sm transform rotate-2 whitespace-nowrap border-2 border-primary"
                  >
                    {mascotMessages[currentMessageIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Bottom Centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-0 w-full flex flex-col items-center justify-center gap-2 z-30 pointer-events-none"
      >
        <span className="text-gray-500/80 text-[10px] sm:text-xs uppercase tracking-widest font-medium">
          Descubre Más
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent opacity-60 animate-bounce" />
      </motion.div>
    </div>
  );
}
