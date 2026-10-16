import {
  AppWindow,
  Clapperboard,
  MapPinned,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

const ICONS: Record<string, LucideIcon> = {
  france: MapPinned,
  quality: Clapperboard,
  apps: AppWindow,
  setup: Settings2,
};

/** Alternate France blue / red for visual balance. */
const TONES: Record<string, "blue" | "red"> = {
  france: "blue",
  quality: "red",
  apps: "blue",
  setup: "red",
};

type WhyIconProps = {
  id: string;
  className?: string;
};

export function WhyIcon({ id, className }: WhyIconProps) {
  const Icon = ICONS[id] ?? AppWindow;
  const tone = TONES[id] ?? "blue";

  return (
    <span
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-md border",
        tone === "red"
          ? "border-red/20 bg-red/8 text-red"
          : "border-blue/15 bg-blue/8 text-blue",
        className,
      )}
      aria-hidden
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  );
}
