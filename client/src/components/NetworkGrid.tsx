import { motion } from "framer-motion";

export function NetworkGrid() {
  // Create a visually pleasing but performant grid
  const nodes = Array.from({ length: 144 }); // 12x12 grid roughly

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-30 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] grid grid-cols-12 gap-8 transform rotate-12">
        {nodes.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="w-2 h-2 rounded-full bg-primary"
          />
        ))}
      </div>
    </div>
  );
}
