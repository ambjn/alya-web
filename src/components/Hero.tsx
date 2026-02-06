import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => (
  <div className="flex flex-col items-center text-center">
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="mb-8 md:mb-16"
    >
      <span className="text-white text-5xl md:text-7xl lg:text-[125px]">
        al<span className="text-black/70">ya</span>
        <span className="text-white/70">.</span>
      </span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease }}
      className="mb-8"
    >
      <h1 className="font-medium tracking-tight leading-[1.05]">
        <span className="text-white/90 text-2xl md:text-5xl lg:text-6xl block mb-2 md:mb-3 font-normal">
          Your Intelligent <span className="text-black/70">Companion</span>
        </span>

        <span className="text-white/40 text-xl md:text-4xl lg:text-5xl block mt-2 md:mt-4 font-normal">
          Natural. Intuitive. Human.
        </span>
      </h1>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease }}
      className="max-w-lg text-white/40 text-sm md:text-lg leading-relaxed mb-8 md:mb-14 mt-8 md:mt-12 font-light px-4 md:px-0"
    >
      experience ai that understands you{" "}
      <span className="text-white font-normal">like a real conversation</span>
      <br />
      thoughtful, empathetic, and truly helpful.
    </motion.p>
  </div>
);
