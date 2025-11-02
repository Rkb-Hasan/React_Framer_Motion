import { motion } from "motion/react";

function Box({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.2 },
      }}
      viewport={{ once: false }}
      className="w-32 h-32 rounded-sm text-black m-4 bg-pink-300 text-center"
    >
      {text}
    </motion.div>
  );
}

export default function ScrollReveal() {
  const greetings = ["hello", "hola", "hi", "namaste"];

  return (
    <div>
      {greetings.map((greeting, index) => (
        <Box key={index} text={greeting}></Box>
      ))}
    </div>
  );
}
