import { motion } from "motion/react";
export default function TextMotion() {
  const mesage = "Is it motion or framer motion? Explore later!!";

  const wordArr = mesage.split(" ");
  return (
    <div className="text-xl m-4 text-center">
      {wordArr.map((wrd, index) => (
        <motion.span
          initial={{ opacity: 0.05 }}
          animate={{ opacity: 1 }}
          //   last index will get the most delay
          transition={{ duration: 0.5, delay: index / 10 }}
          key={index}
        >
          {" "}
          {wrd}
        </motion.span>
      ))}
    </div>
  );
}
