"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

const SPRING = {
  mass: 0.1,
  damping: 12,
  stiffness: 150,
};

export function SpringMouseFollow() {
  // console.log("🔥 SpringMouseFollow rendered");

  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);

  useEffect(() => {
    // console.log("🚀 useEffect mounted – Adding event listeners");

    const move = (e: MouseEvent) => {
      // console.log("🎯 mousemove:", { x: e.clientX, y: e.clientY });

      x.set(e.clientX);
      y.set(e.clientY);
      opacity.set(1);
    };

    const hide = () => {
      // console.log("👋 mouse left window – opacity 0");
      opacity.set(0);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);

    return () => {
      // console.log("🧹 Cleanup – removing listeners");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  // // Debug springs
  // x.on("change", (v) => console.log("👉 xSpring:", v));
  // y.on("change", (v) => console.log("👉 ySpring:", v));
  // opacity.on("change", (v) => console.log("✨ opacitySpring:", v));

  return (
    <div className="fixed inset-0 z-999999 pointer-events-none">
      <motion.div
        style={{ x, y, opacity }}
        className="w-6 h-6 bg-[#ff4500] rounded-full"
      />
    </div>
  );
}
