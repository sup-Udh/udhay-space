"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isCardHovering, setIsCardHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || target.closest(".interactive")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      if (target.closest(".bento-card")) {
        setIsCardHovering(true);
      } else {
        setIsCardHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Dot variants
  const dotVariants = {
    default: { x: mousePosition.x - 4, y: mousePosition.y - 4, scale: 1 },
    hover: { x: mousePosition.x - 4, y: mousePosition.y - 4, scale: 0 },
    cardHover: { x: mousePosition.x - 4, y: mousePosition.y - 4, scale: 1 },
  };

  // Ring variants
  const ringVariants = {
    default: { 
      x: mousePosition.x - 16, 
      y: mousePosition.y - 16, 
      scale: 1, 
      opacity: 1,
      borderRadius: "50%"
    },
    hover: { 
      x: mousePosition.x - 24, 
      y: mousePosition.y - 24, 
      scale: 1.5, 
      opacity: 0.5,
      borderWidth: "1px",
      borderRadius: "50%"
    },
    cardHover: {
      x: mousePosition.x - 24, 
      y: mousePosition.y - 24, 
      scale: 1.2, 
      opacity: 0.8,
      borderWidth: "1px",
      borderRadius: "20%" // Distort over cards
    },
    clicked: {
      x: mousePosition.x - 16, 
      y: mousePosition.y - 16, 
      scale: 0.8, 
      opacity: 1,
      borderRadius: "50%"
    }
  };

  // Determine state
  let cursorState = "default";
  if (isClicked) cursorState = "clicked";
  else if (isHovering) cursorState = "hover";
  else if (isCardHovering) cursorState = "cardHover";

  return (
    <>
      {/* Small Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        variants={dotVariants}
        animate={cursorState === "hover" ? "hover" : "default"}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      {/* Outer Ring with Lag */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-white/50 rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={ringVariants}
        animate={cursorState}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      />
      
      {/* Click Ripple Effect */}
      {isClicked && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] hidden md:block"
          initial={{ x: mousePosition.x - 16, y: mousePosition.y - 16, scale: 1, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}
    </>
  );
}
