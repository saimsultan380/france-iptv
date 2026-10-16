import { APPS_SECTION } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { AppBrandIcon } from "@/components/graphics/AppBrandIcon";
import { PlatformIcon } from "@/components/graphics/PlatformIcon";
import { cn } from "@/lib/cn";

export function AppsCompatible() {
  return (
    <Section id="applications" tone="soft">
      <Reveal>
        <h2 className="font-display max-w-3xl text-3xl leading-tight tracking-tight md:text-[2.6rem]">
          {APPS_SECTION.h2}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          {APPS_SECTION.intro}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {APPS_SECTION.groups.map((group, gi) => {
          const red = gi % 2 === 1;
          return (
            <Reveal key={group.id} delay={gi * 0.04}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-5 shadow-[0_8px_24px_rgba(11,27,58,0.04)] md:p-6">
                <div className="mb-5 flex items-center gap-3 border-b border-line pb-4">
                  <span
                    className={cn(
                      "inline-flex size-10 items-center justify-center rounded-lg",
                      red
                        ? "bg-red/10 text-red"
                        : "bg-blue/10 text-blue",
                    )}
                  >
                    <PlatformIcon id={group.id} />
                  </span>
                  <h3 className="font-display text-lg leading-snug tracking-tight md:text-xl">
                    {group.h3}
                  </h3>
                </div>

                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {group.apps.map((app) => (
                    <li
                      key={app}
                      className="flex items-center gap-3 rounded-lg border border-line/80 bg-bg px-3 py-2.5 transition hover:border-blue/25"
                    >
                      <AppBrandIcon name={app} />
                      <span className="text-sm font-medium leading-snug text-text">
                        {app}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.08}>
        <p className="mt-10 rounded-lg border border-red/20 bg-red/5 px-5 py-4 text-sm leading-relaxed text-muted">
          {APPS_SECTION.important}
        </p>
      </Reveal>
    </Section>
  );
}
