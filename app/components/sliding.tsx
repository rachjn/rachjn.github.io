"use client";
import { delay, motion } from "framer-motion";

interface aniProps {
  children: React.ReactNode;
  delay: number;
}

const SlideRight = ({ children, delay }: aniProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100px" }} // Start position
      whileInView={{ opacity: 1, x: 0 }} // End position
      transition={{ duration: 0.5, ease: "easeOut", delay }} // Animation settings
      viewport={{ once: false }} // Animation occurs once when the element comes into view
    >
      {children}
    </motion.div>
  );
};

const SlideLeft = ({ children, delay }: aniProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100px" }} // Start position
      whileInView={{ opacity: 1, x: 0 }} // End position
      transition={{ duration: 0.5, ease: "easeOut", delay }} // Animation settings
      viewport={{ once: false }} // Animation occurs once when the element comes into view
    >
      {children}
    </motion.div>
  );
};

export { SlideRight, SlideLeft };
