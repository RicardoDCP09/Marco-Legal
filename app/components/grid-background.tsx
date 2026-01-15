"use client";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* Vertical lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"
          style={{
            left: `${i * 5}%`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}

      {/* Horizontal lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          style={{
            top: `${i * 10}%`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
