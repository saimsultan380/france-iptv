import { CONTENTS_SECTION } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ContentSlider } from "@/components/ui/ContentSlider";

export function Contents() {
  return (
    <Section id="contenus" tone="white" hairline>
      <Reveal>
        <h2 className="font-display max-w-3xl text-3xl leading-tight tracking-tight md:text-[2.6rem]">
          {CONTENTS_SECTION.h2}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          {CONTENTS_SECTION.intro}
        </p>
      </Reveal>

      <Reveal delay={0.06} className="mt-10 md:mt-12">
        <ContentSlider items={CONTENTS_SECTION.items} />
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-10 text-sm font-medium text-text md:text-[15px]">
          {CONTENTS_SECTION.qualityNote}
        </p>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
          {CONTENTS_SECTION.footer}
        </p>
      </Reveal>
    </Section>
  );
}
