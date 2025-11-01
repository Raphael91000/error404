"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  containerClassName?: string;
  textClassName?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  baseClassName?: string;
  initialVisibleCount?: number;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  containerClassName,
  textClassName,
  highlightWords = [],
  highlightClassName = '',
  baseClassName = 'text-black dark:text-white',
  initialVisibleCount = 0,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 75%', 'end 20%'],
  });
  const words = text.split(" ");
  const revealWordCount = Math.max(words.length - initialVisibleCount, 1);
  const revealStep = 1 / revealWordCount;
  const speedFactor = 0.5;

  const containerClasses = containerClassName
    ? cn('relative z-0', containerClassName)
    : 'relative z-0 h-[140vh]';
  const paragraphClasses = cn(
    "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl",
    textClassName,
  );

  return (
    <div ref={targetRef} className={containerClasses}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={paragraphClasses}
        >
          {words.map((word, i) => {
            const cleanedWord = word.replace(/[?!.,;:]/g, '').toLowerCase();
            const isHighlighted = highlightWords.includes(cleanedWord);
            const alwaysVisible = i < initialVisibleCount;
            const revealIndex = Math.max(i - initialVisibleCount, 0);
            const start = alwaysVisible ? 0 : Math.min(revealIndex * revealStep * speedFactor, 1);
            const end = alwaysVisible ? 0 : Math.min(start + revealStep * speedFactor, 1);
            return (
              <Word
                key={`${word}-${i}`}
                progress={scrollYProgress}
                range={[start, end]}
                highlight={isHighlighted}
                highlightClassName={highlightClassName}
                baseClassName={baseClassName}
                alwaysVisible={alwaysVisible}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  highlight: boolean;
  highlightClassName?: string;
  baseClassName?: string;
  alwaysVisible?: boolean;
}

const Word: FC<WordProps> = ({
  children,
  progress,
  range,
  highlight,
  highlightClassName,
  baseClassName = 'text-black dark:text-white',
  alwaysVisible = false,
}) => {
  const opacity = useTransform(progress, range, [0, 1], {
    clamp: true,
  });
  const wordClass = highlight ? highlightClassName || 'text-emerald-400' : baseClassName;
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={alwaysVisible ? { opacity: 1 } : { opacity }}
        className={wordClass}
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
