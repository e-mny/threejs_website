import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HeroAdjectives } from "@/constants/index.js";

const HeroText = React.memo(() => {
  const wordRef = useRef([]);
  const wordIndex = useRef(0);

  useEffect(() => {
    const animateWord = () => {
      const currentWord = HeroAdjectives[wordIndex.current];
      const letters = Array.from(currentWord);

      wordRef.current.forEach((span, i) => {
        if (!letters[i]) {
          span.textContent = ""; // Clear unused spans
          return;
        }

        span.textContent = letters[i];
        gsap.killTweensOf(span); // Avoid overlapping animations
        gsap.fromTo(
          span,
          { rotationX: -90, opacity: 0 },
          { rotationX: 0, opacity: 1, duration: 0.1, delay: i * 0.1 }
        );
      });

      wordIndex.current = (wordIndex.current + 1) % HeroAdjectives.length;
      gsap.delayedCall(2, animateWord);
    };

    animateWord();

    return () => {
      gsap.killTweensOf(wordRef.current);
    };
  }, [HeroAdjectives]);

  return (
    <div className="h-[15vh] md:h-[75vh] w-full flex flex-col">
      {/* Top Container */}
      <div className="w-full h-2/5 flex items-center justify-center md:items-end md:justify-start">
        <span className="text-3xl md:text-2xl font-light text-left">
          Hi! I am
        </span>
      </div>

      {/* Bottom Container */}
      <div className="w-full flex items-center md:items-start justify-center md:justify-start align-top">
        <div className="text-4xl text-left md:text-5xl font-bold text-white">
          {Array.from({ length: 30 }, (_, i) => (
            <span
              key={i}
              ref={(el) => {
                if (!wordRef.current[i]) wordRef.current[i] = el;
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default HeroText;
