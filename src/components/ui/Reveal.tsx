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

const ease = [0.25, 0.1, 0.25, 1] as const;

/** Transform + opacity only — no blur (blur tanks scroll FPS). */
function getVariants(variant: RevealVariant, y: number): Variants {
  const hidden =
    variant === "up"
      ? { opacity: 0, y }
      : variant === "down"
        ? { opacity: 0, y: -y }
        : variant === "left"
          ? { opacity: 0, x: y }
          : variant === "right"
            ? { opacity: 0, x: -y }
            : variant === "scale"
              ? { opacity: 0, scale: 0.97 }
              : { opacity: 0 };

  return {
    hidden,
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  variant = "up",
  duration = 0.45,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      variants={getVariants(variant, y)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -5% 0px", amount: 0.12 }}
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
  stagger = 0.05,
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
      viewport={{ once: true, margin: "0px 0px -5% 0px" }}
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
  y = 14,
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
      className={cn("will-change-transform", className)}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
