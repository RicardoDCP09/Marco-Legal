"use client";

import { motion } from "framer-motion";

export default function Loader() {
  // Generate particles with random positions
  const particles = Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * 360;
    const distance = 150 + Math.random() * 80;
    return {
      id: i,
      startX: Math.cos((angle * Math.PI) / 180) * distance,
      startY: Math.sin((angle * Math.PI) / 180) * distance,
      delay: i * 0.15,
      duration: 2 + Math.random() * 1,
      size: 2 + Math.random() * 3,
    };
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
      {/* Container centrado */}
      <div className="relative flex items-center justify-center w-96 h-96">
        {/* Outer Glow Effect */}
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.4) 0%, rgba(0,128,255,0.3) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Spiral Effect Lines */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`spiral-${i}`}
            className="absolute w-32 h-32 rounded-full border border-primary/20"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              delay: i * 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Main Circle - Center */}
        <motion.div
          className="absolute w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #00D4FF 0%, #0080FF 100%)",
            boxShadow:
              "0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,128,255,0.4), inset 0 0 20px rgba(255,255,255,0.2)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,128,255,0.4)",
              "0 0 60px rgba(0,212,255,0.8), 0 0 120px rgba(0,128,255,0.6)",
              "0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,128,255,0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner Light */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 60%)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo */}
          <span className="relative z-10 text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            C
          </span>
        </motion.div>

        {/* Particles Being Attracted */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: particle.id % 2 === 0 ? "#00D4FF" : "#0080FF",
              boxShadow: `0 0 ${particle.size * 2}px ${
                particle.id % 2 === 0 ? "#00D4FF" : "#0080FF"
              }`,
              left: "50%",
              top: "50%",
              marginLeft: -particle.size / 2,
              marginTop: -particle.size / 2,
            }}
            initial={{
              x: particle.startX,
              y: particle.startY,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: [particle.startX, 0],
              y: [particle.startY, 0],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeIn",
              repeatDelay: 0.5,
            }}
          />
        ))}

        {/* Loading Text */}
        <div className="absolute top-full mt-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <motion.p
            className="text-foreground font-semibold text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Cargando
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ...
            </motion.span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
