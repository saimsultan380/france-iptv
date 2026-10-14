import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { APPS, DEVICES } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { DeviceIcon } from "@/components/graphics/DeviceIcon";

export function Compatibility() {
  return (
    <Section tone="white">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Compatibilité
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Sur vos écrans, sans friction.
          </h2>
          <p className="mt-4 text-muted">
            Smart TV, mobile, box ou PC — M3U et Xtream Codes supportés.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/abonnement-iptv-12-mois-smart-tv-guide/"
              className="inline-flex items-center gap-1 font-medium text-blue-bright hover:underline"
            >
              Guide Smart TV <ArrowUpRight className="size-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/iptv-smarters-pro/"
              className="inline-flex items-center gap-1 font-medium text-blue-bright hover:underline"
            >
              IPTV Smarters Pro <ArrowUpRight className="size-4" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} variant="scale">
          <div className="relative">
            <Image
              src="/devices.webp"
              alt="Appareils compatibles Premium French IPTV"
              width={800}
              height={520}
              className="h-auto w-full object-contain"
            />
          </div>
        </Reveal>
      </div>

      <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4" stagger={0.06} delay={0.05}>
        {DEVICES.map((device) => (
          <StaggerItem key={device.id}>
            <div className="glass-card glass-card-hover flex flex-col items-start gap-3 rounded-2xl p-5">
              <DeviceIcon id={device.id} className="text-blue" />
              <span className="text-sm font-medium">{device.label}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Applications compatibles
        </p>
        <div className="flex flex-wrap gap-2">
          {APPS.map((app) => (
            <span
              key={app}
              className="glass-chip rounded-full px-3 py-1.5 text-xs font-medium text-muted"
            >
              {app}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
