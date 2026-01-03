/**
 * @copyright 2025 ekeneakabogu
 */

import { motion } from "motion/react";

export const Cover = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <motion.section
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-neutral-950 text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, scale: 1, letterSpacing: "0.15em" }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="text-[12vw] font-extrabold tracking-widest uppercase"
        onAnimationComplete={onFinish}
      >
        Portfolio
      </motion.h1>
    </motion.section>
  );
};
