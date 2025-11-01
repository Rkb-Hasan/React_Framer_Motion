import { motion } from "motion/react";

export default function ButtonTap() {
  return (
    <div>
      <motion.button
        className="bg-black text-white p-1 border-r cursor-pointer"
        whileTap={{ scale: 0.8, rotate: 10 }}
        whileHover={{
          opacity: 0.8,
          scale: 1.2,
        }}
      >
        Tap Me
      </motion.button>
      <motion.button
        className="bg-black text-white p-1 border-r cursor-pointer"
        whileTap={{ scale: 0.8, rotate: 10 }}
        whileHover={{
          opacity: 0.8,
          scale: 1.2,
          transition: { yoyo: Infinity },
        }}
      >
        Tap Me
      </motion.button>
    </div>
  );
}
