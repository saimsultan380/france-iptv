"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { TRUST_STATS } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

function CountUp({
  value,
  suffix,
  display,
}: {
  value: number;
  suffix: string;
  display?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || display || reduce) return;
    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, display, reduce]);

  return (
    <span ref={ref} className="tabular">
      {display ?? `${n.toLocaleString("fr-FR")}${suffix}`}
    </span>
  );
}

export function TrustStrip() {
  return (
    <section className="border-y border-line/60 bg-transparent py-7 md:py-12">
      <Container>
        <Stagger className="grid grid-cols-4 gap-2 md:grid-cols-5 md:gap-4" stagger={0.07}>
          {TRUST_STATS.map((stat, i) => (
            <StaggerItem
              key={stat.label}
              className={cn(
                "text-center md:text-left",
                i === TRUST_STATS.length - 1 && "hidden md:block",
              )}
            >
              <p className="font-display text-lg font-semibold tracking-tight text-blue sm:text-2xl md:text-4xl">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  display={"display" in stat ? stat.display : undefined}
                />
              </p>
              <p className="mt-1 text-[10px] leading-tight text-muted sm:text-xs md:mt-2 md:text-sm">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
