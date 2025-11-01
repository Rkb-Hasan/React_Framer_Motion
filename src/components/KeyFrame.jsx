import { motion } from "motion/react";
export default function KeyFrame() {
  return (
    <motion.div
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 90, 180, 270, 360],
        scale: [1, 1, 2, 1, 1],
      }}
      transition={{ duration: 2 }}
      className="bg-blue-500 w-32 h-32 border m-4"
    ></motion.div>
  );
}
