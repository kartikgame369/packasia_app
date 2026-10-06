import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      animate={{ 
        x: mousePosition.x - 16, 
        y: mousePosition.y - 4,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.5 }}
    >
      <img 
        src="/complete_images/new_pointer.png" 
        alt="" 
        width={40} 
        height={40}
        style={{ 
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
          pointerEvents: "none"
        }} 
        draggable={false}
      />
    </motion.div>
  );
}
