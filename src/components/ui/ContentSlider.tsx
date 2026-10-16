"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type ContentSlide = {
  name: string;
  image: string;
};

type ContentSliderProps = {
  items: readonly ContentSlide[];
  className?: string;
};

const GAP = 16;
const AUTO_MS = 4000;

export function ContentSlider({ items, className }: ContentSliderProps) {
  const n = items.length;
  // Triple list so we can loop seamlessly in both directions
  const loopItems = n > 0 ? [...items, ...items, ...items] : [];

  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardW, setCardW] = useState(0);
  const [index, setIndex] = useState(n); // start on middle copy
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const jumping = useRef(false);

  const measure = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const w = vp.clientWidth;
    // Match CSS widths: ~78% / 46% / 31%
    let next = w * 0.78;
    if (w >= 1024) next = w * 0.31;
    else if (w >= 640) next = w * 0.46;
    setCardW(Math.round(next));
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const logicalIndex = n > 0 ? ((index % n) + n) % n : 0;
  const offset = cardW > 0 ? index * (cardW + GAP) : 0;

  const go = useCallback(
    (dir: -1 | 1) => {
      if (jumping.current || n < 2) return;
      setAnimate(true);
      setIndex((i) => i + dir);
    },
    [n],
  );

  const goToLogical = useCallback(
    (target: number) => {
      if (n < 2 || jumping.current) return;
      setAnimate(true);
      // Always move within the middle copy for predictable distance
      setIndex(n + target);
    },
    [n],
  );

  // After transition, teleport when we leave the middle copy
  const onTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget) return;
      if (n < 2) return;
      if (index >= n * 2) {
        jumping.current = true;
        setAnimate(false);
        setIndex((i) => i - n);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            jumping.current = false;
            setAnimate(true);
          });
        });
      } else if (index < n) {
        jumping.current = true;
        setAnimate(false);
        setIndex((i) => i + n);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            jumping.current = false;
            setAnimate(true);
          });
        });
      }
    },
    [index, n],
  );

  // Autoplays forever
  useEffect(() => {
    if (paused || n < 2 || cardW === 0) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, n, cardW, go]);

  // Keep index valid if items length changes
  useEffect(() => {
    setIndex(n);
    setAnimate(false);
  }, [n]);

  if (!n) return null;

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div ref={viewportRef} className="overflow-hidden">
        <div
          className="flex"
          style={{
            gap: GAP,
            transform: `translate3d(-${offset}px, 0, 0)`,
            transition: animate
              ? "transform 520ms cubic-bezier(0.25, 0.1, 0.25, 1)"
              : "none",
            willChange: "transform",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {loopItems.map((item, i) => (
            <article
              key={`${item.name}-${i}`}
              className="group shrink-0 overflow-hidden rounded-lg border border-line bg-surface"
              style={{ width: cardW || "78%" }}
              aria-hidden={i % n !== logicalIndex}
            >
              <div className="relative aspect-[16/10] max-h-[180px] overflow-hidden bg-surface-2 sm:aspect-[4/3] sm:max-h-none">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 31vw"
                  priority={i >= n && i < n + 2}
                />
              </div>
              <p className="px-4 py-3 text-sm font-semibold text-text md:text-[15px]">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={i === logicalIndex}
              aria-label={`Aller à ${item.name}`}
              onClick={() => goToLogical(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === logicalIndex
                  ? "w-7 bg-red"
                  : "w-1.5 bg-line hover:bg-blue/40",
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Précédent"
            onClick={() => go(-1)}
            className="flex size-10 items-center justify-center rounded-md border border-blue/25 bg-surface text-blue transition hover:border-blue hover:bg-blue hover:text-white"
          >
            <ChevronLeft className="size-5" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Suivant"
            onClick={() => go(1)}
            className="flex size-10 items-center justify-center rounded-md border border-red/30 bg-surface text-red transition hover:border-red hover:bg-red hover:text-white"
          >
            <ChevronRight className="size-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
}
