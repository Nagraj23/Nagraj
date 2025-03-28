"use client";

import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import SplitText from "./split";

export default function LoadingScreen({ onComplete }) {
  const [textComplete, setTextComplete] = useState(false);

  const fadeOut = useSpring({
    opacity: textComplete ? 0 : 1,
    config: { duration: 800 }, // Smooth fade-out effect
  });

  useEffect(() => {
    setTimeout(() => {
      setTextComplete(true);
      setTimeout(onComplete, 800); // Wait for fade-out before removing
    }, 2000);
  }, [onComplete]);

  return (
    <animated.div
      style={fadeOut}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
    >
      <SplitText
        text="Nagraj  Nandal"
        className="text-5xl font-semibold text-white"
        delay={100}
        animationFrom={{ opacity: 0, transform: "translateY(40px)" }}
        animationTo={{ opacity: 1, transform: "translateY(0)" }}
        easing="easeOutCubic"
        onLetterAnimationComplete={() => setTextComplete(true)}
      />
    </animated.div>
  );
}
