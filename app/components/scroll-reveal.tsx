"use client";

import { motion, useInView, Variant } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  variant?:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "scale"
    | "fadeIn";
  delay?: number;
  duration?: number;
  amount?: number; // Percentage of element visible before triggering (0-1)
  once?: boolean; // Trigger animation only once
  className?: string;
}

const variants: Record<string, { hidden: Variant; visible: Variant }> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function ScrollReveal({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration = 0.6,
  amount = 0.3,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount,
    margin: "0px 0px -100px 0px", // Trigger slightly before element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // Custom easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger component for lists/grids
interface ScrollRevealStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function ScrollRevealStagger({
  children,
  staggerDelay = 0.1,
  className = "",
}: ScrollRevealStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Item component for stagger children
export function ScrollRevealItem({
  children,
  variant = "fadeInUp",
  className = "",
}: {
  children: ReactNode;
  variant?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scale";
  className?: string;
}) {
  return (
    <motion.div
      variants={variants[variant]}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
