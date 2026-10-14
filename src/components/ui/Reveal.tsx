"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/cn";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: RevealVariant;
  duration?: number;
  once?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

function getVariants(variant: RevealVariant, y: number): Variants {
  const hidden =
    variant === "up"
      ? { opacity: 0, y, filter: "blur(6px)" }
      : variant === "down"
        ? { opacity: 0, y: -y, filter: "blur(6px)" }
        : variant === "left"
          ? { opacity: 0, x: y, filter: "blur(6px)" }
          : variant === "right"
            ? { opacity: 0, x: -y, filter: "blur(6px)" }
            : variant === "scale"
              ? { opacity: 0, scale: 0.94, filter: "blur(6px)" }
              : { opacity: 0, filter: "blur(4px)" };

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  variant = "up",
  duration = 0.7,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const variants = getVariants(variant, y);

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-8% 0px -6% 0px", amount: 0.15 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 22,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.65, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
