import { motion } from "motion/react";

const shapeVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1.5,
      type: "spring",
      bounce: 0.6,
    },
  },
};
const childVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.5,

    transition: {
      delay: 2,
      duration: 1.5,
      type: "spring",
      bounce: 0.6,
    },
  },
};
export default function Variants() {
  return (
    <motion.div
      variants={shapeVariants}
      initial="initial"
      animate="animate"
      className="bg-green-400 h-32 w-32 border rounded m-4 "
    >
      <motion.div
        variants={childVariants}
        className="bg-red-400 h-12 w-12 border rounded-full m-4 "
      ></motion.div>
    </motion.div>
  );
}
