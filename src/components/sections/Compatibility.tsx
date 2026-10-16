import Image from "next/image";
import { DEVICES, DEVICES_SECTION } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { DeviceIcon } from "@/components/graphics/DeviceIcon";

export function Compatibility() {
  return (
    <Section id="appareils" tone="white" hairline>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-[2.6rem]">
            {DEVICES_SECTION.h2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {DEVICES_SECTION.intro}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-3">
            {DEVICES.map((device, i) => {
              const red = i % 2 === 1;
              return (
                <li
                  key={device.id}
                  className="flex items-center gap-3 rounded-md border border-line bg-surface px-3.5 py-3.5"
                >
                  <span
                    className={
                      red
                        ? "flex size-9 shrink-0 items-center justify-center rounded-md bg-red/8 text-red"
                        : "flex size-9 shrink-0 items-center justify-center rounded-md bg-blue/8 text-blue"
                    }
                  >
                    <DeviceIcon id={device.id} />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-text">
                    {device.label}
                  </span>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-muted">
            {DEVICES_SECTION.note}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Image
              src="/devices.webp"
              alt="Appareils compatibles avec Premium French IPTV"
              width={720}
              height={540}
              className="mx-auto h-auto max-h-[200px] w-full object-contain sm:max-h-none"
              sizes="(max-width: 1024px) 480px, 560px"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
