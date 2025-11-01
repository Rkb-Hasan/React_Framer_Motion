import { motion } from "motion/react";
export default function TransitionType() {
  return (
    <>
      <motion.div
        className="m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 10 }}
        transition={{ duration: 2 }}
      >
        <h1>Learning Animation</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        </p>
      </motion.div>
      <motion.div
        className="m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 10 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <h1>Learning Animation</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        </p>
      </motion.div>
      <motion.div
        className="m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 10 }}
        transition={{ duration: 2, type: "spring", bounce: 0.5 }}
      >
        <h1>Learning Animation</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        </p>
      </motion.div>
    </>
  );
}
