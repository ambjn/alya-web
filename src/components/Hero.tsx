import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => (
  <>
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="mb-8 md:mb-16"
    >
      <span className="text-white text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter leading-[0.9]">
        alya
        <span className="font-normal text-white/70"> ai</span>
        <span className="text-white/70">.</span>
      </span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease }}
      className="mb-6 md:mb-10"
    >
      <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/80 font-medium shadow-lg shadow-black/20">
        AI That Feels Human
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
          Your Intelligent Companion
        </span>
        <span className="text-white text-4xl md:text-7xl lg:text-8xl block">
          The Future is{" "}
          <span className="italic text-white/80">Personal</span>
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
      className="max-w-lg text-white/40 text-sm md:text-lg leading-relaxed mb-8 md:mb-14 font-light px-4 md:px-0"
    >
      experience ai that understands you{" "}
      <span className="text-white font-normal">like a real conversation</span> —
      thoughtful, empathetic, and truly helpful.
    </motion.p>
  </>
);
