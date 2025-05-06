"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      { duration: 2, delay: stagger(0.2) }
    );
  }, [scope, animate]);

  const renderWords = () => {
    const wordsArray = words.split(" ");
    return (
      <motion.div ref={scope} className={className}>
        {wordsArray.map((word, idx) => {
          // Apply purple color to "Make" and "Sense"
          const isPurple = word === "Shashank" || word === "Jha";
          return (
            <motion.span
              key={word + idx}
              className={`opacity-0 ${isPurple ? "text-purple" : ""}`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return renderWords();
};

export { TextGenerateEffect };
