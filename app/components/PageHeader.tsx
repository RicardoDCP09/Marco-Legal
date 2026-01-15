"use client";

import { motion } from "framer-motion";
import GridBackground from "./grid-background";
import Aurora from "./Aurora";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="relative w-full h-[40vh] min-h-[350px] bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Aurora Background - Subtle variation */}
      <Aurora
        colorStops={["#3a06e5", "#034a96", "#3a06e5"]}
        amplitude={1.0}
        blend={0.8}
        speed={0.5}
      />

      {/* Background Effects */}
      <GridBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Breadcrumbs (Optional) */}
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4"
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-600">/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="hover:text-primary transition-colors"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-primary font-medium">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            <span className="bg-gradient-blue bg-clip-text text-white drop-shadow-sm">
              {title}
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
