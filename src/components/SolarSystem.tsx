import { motion } from "motion/react";

export const SolarSystem = () => {
  const planets = [
    { size: 12, orbit: 160, duration: 20, color: "bg-orange-400", delay: 0 },
    { size: 18, orbit: 240, duration: 35, color: "bg-blue-400", delay: -5 },
    { size: 14, orbit: 320, duration: 50, color: "bg-red-400", delay: -10 },
    { size: 22, orbit: 420, duration: 80, color: "bg-yellow-600", delay: -15 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* The Sun */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 bg-primary rounded-full blur-xl opacity-50"
        />
        <div className="w-16 h-16 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_50px_rgba(255,153,51,0.8)]" />

        {/* Orbits and Planets */}
        {planets.map((planet, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
            style={{ width: planet.orbit * 2, height: planet.orbit * 2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: planet.duration,
                repeat: Infinity,
                ease: "linear",
                delay: planet.delay,
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ height: planet.orbit }}
            >
              <div
                className={`rounded-full ${planet.color} shadow-lg`}
                style={{ width: planet.size, height: planet.size }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
