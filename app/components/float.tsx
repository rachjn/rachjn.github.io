import { motion } from "framer-motion"; // Correct import for Framer Motion

interface FloatingProps {
  children: React.ReactNode;
  height: string;
  width: string;
  shadowColor: string;
  delay: number;
}

const FloatingEffect = ({
  children,
  height,
  width,
  shadowColor,
  delay,
}: FloatingProps) => {
  // Define the animation
  const useFloatingAnimation = () => ({
    initial: { opacity: 1, x: 0, y: 0 }, // Start position
    animate: {
      x: [0, -6, 4, -4, 2, -3, 3, 0], // Random horizontal motion
      y: [0, 3, -1, 2, -3, 2, -1, 0], // Random vertical floating
      transition: {
        x: {
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: "loop", // Loop the animation
          duration: 9, // Duration of one complete loop
          ease: "easeInOut", // Smooth easing
          delay,
        },
        y: {
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: "loop", // Loop the animation
          duration: 8, // Duration of one complete loop
          ease: "easeInOut", // Smooth easing
          delay,
        },
      },
    },
  });

  const floatingAnimation = useFloatingAnimation();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={floatingAnimation}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className={`relative ${height} ${width} bg-lightest rounded-lg m-2 hover:shadow-xl ${shadowColor}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingEffect;
