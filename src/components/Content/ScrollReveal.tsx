import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ScrollReveal({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,        // 🔑 anima sempre
        amount: 0.25,       // quanto do card precisa aparecer
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // easing suave premium
      }}
    >
      {children}
    </motion.div>
  );
}
