import { WHY_TILES } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function WhyUs() {
  return (
    <Section tone="white">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Pourquoi nous
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-text md:text-[2.75rem] md:leading-[1.1]">
          Pourquoi choisir notre IPTV France Premium&nbsp;?
        </h2>
        <div className="france-hairline mt-5 h-[2px] w-20" />
      </Reveal>

      <Stagger className="mt-12 grid gap-4 md:grid-cols-6" stagger={0.09} delay={0.1}>
        {WHY_TILES.map((tile, i) => (
          <StaggerItem
            key={tile.id}
            className={cn(
              "glass-card glass-card-hover rounded-2xl p-6 md:p-7",
              tile.size === "large" && "md:col-span-3 md:row-span-2 md:min-h-[280px]",
              tile.size === "medium" && "md:col-span-3",
              tile.size === "small" && "md:col-span-3",
            )}
          >
            <div className="flex h-full flex-col justify-end">
              <span className="font-display text-4xl font-semibold tabular text-red/20 md:text-5xl">
                0{i + 1}
              </span>
              <h3 className="font-display mt-4 text-xl font-semibold tracking-tight">
                {tile.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted md:text-[15px]">
                {tile.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
