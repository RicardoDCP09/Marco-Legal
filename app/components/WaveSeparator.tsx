"use client";

import { motion } from "framer-motion";

export default function WaveSeparator() {
  return (
    <div className="relative w-full h-24 md:h-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-background" />

      {/* Animated Wave SVG */}
      <motion.svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0080FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Main Wave */}
        <motion.path
          d="M0,60 C300,100 500,20 800,60 C1000,90 1100,40 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Secondary Wave for depth */}
        <motion.path
          d="M0,80 C300,50 500,90 800,70 C1000,60 1100,85 1200,75 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
        />
      </motion.svg>

      {/* Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm" />
    </div>
  );
}
