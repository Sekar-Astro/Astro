import { motion } from "motion/react";

export const Mandala = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: 360, opacity: 0.15 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full fill-accent"
      >
        <path d="M100 0 A100 100 0 0 1 200 100 A100 100 0 0 1 100 200 A100 100 0 0 1 0 100 A100 100 0 0 1 100 0 M100 20 A80 80 0 0 0 20 100 A80 80 0 0 0 100 180 A80 80 0 0 0 180 100 A80 80 0 0 0 100 20" opacity="0.5" />
        <path d="M100 40 A60 60 0 0 1 160 100 A60 60 0 0 1 100 160 A60 60 0 0 1 40 100 A60 60 0 0 1 100 40" opacity="0.3" />
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={100 + 70 * Math.cos((i * Math.PI) / 6)}
            cy={100 + 70 * Math.sin((i * Math.PI) / 6)}
            r="5"
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x="95"
            y="20"
            width="10"
            height="30"
            rx="5"
            transform={`rotate(${i * 45} 100 100)`}
          />
        ))}
      </svg>
    </motion.div>
  );
};
