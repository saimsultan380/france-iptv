import Image from "next/image";
import { Trophy } from "lucide-react";
import { SPORT_SECTION } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Sport() {
  return (
    <Section id="sport" tone="soft">
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <Reveal>
            <h2 className="font-display max-w-2xl text-3xl leading-tight tracking-tight md:text-[2.6rem]">
              {SPORT_SECTION.h2}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {SPORT_SECTION.intro}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {SPORT_SECTION.competitions.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.03}>
                <article className="flex items-center gap-3.5 border-b border-line py-3.5 last:border-b-0 sm:rounded-xl sm:border sm:border-line sm:bg-white sm:px-3.5 sm:last:border-b">
                  <span className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-white">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="size-full object-contain p-1.5"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold leading-snug text-text">
                      {item.name}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                      <Trophy className="size-3.5 text-red/70" strokeWidth={2} />
                      Compétition suivie en France
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
              {SPORT_SECTION.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.06} className="lg:sticky lg:top-28">
          <div className="relative mx-auto aspect-[16/10] max-h-[220px] w-full max-w-md overflow-hidden rounded-xl sm:aspect-[3/4] sm:max-h-none lg:max-w-none">
            <Image
              src="/section-sport.jpg"
              alt="Football — compétitions sportives en direct"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 420px, 480px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
              <p className="text-sm font-semibold text-white">Sport en direct</p>
              <p className="mt-1 text-xs text-white/75">
                Football européen & compétitions françaises
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
