"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { TRUST_STATS } from "@/data/home";
import { Container } from "@/components/ui/Container";
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
    const duration = 1100;
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
    <section className="border-y border-line bg-white py-7 md:py-12">
      <Container>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-5 md:gap-4">
          {TRUST_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "text-center md:text-left",
                /* Mobile: keep 4 stats in one row — hide Installation */
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
