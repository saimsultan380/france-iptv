import Image from "next/image";
import { cn } from "@/lib/cn";

export type MarqueeItem = {
  name: string;
  image: string;
};

type MarqueeProps = {
  items: readonly MarqueeItem[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div className={cn("relative overflow-hidden border-y border-line bg-white", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-24" />
      <div className="animate-marquee flex w-max gap-4 py-5 pr-4">
        {row.map((item, i) => (
          <article
            key={`${item.name}-${i}`}
            className="flex w-[200px] shrink-0 flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line sm:w-[240px]"
          >
            <div className="relative h-[140px] w-full overflow-hidden bg-surface-2 sm:h-[180px] md:h-[200px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
            <p className="px-3 py-2.5 text-sm font-medium text-text">
              {item.name}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
