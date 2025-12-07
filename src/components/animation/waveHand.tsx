"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WaveHand() {
  return (
    <motion.div
      style={{
        transformOrigin: "70% 80%",
        display: "inline-block",
      }}
      animate={{ rotate: [0, 18, -12, 18, 0] }}
      transition={{
        duration: 1.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/assets/images/wave-icon.svg"
        alt="wave"
        width={60}
        height={60}
        className="inline-block select-none"
      />
    </motion.div>
  );
}
