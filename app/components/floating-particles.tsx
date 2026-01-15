"use client";

export default function FloatingParticles() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-primary/40 blur-sm animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
