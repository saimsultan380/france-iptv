import { MonitorPlay, Smartphone, TabletSmartphone, Laptop } from "lucide-react";
import { cn } from "@/lib/cn";

type PlatformIconProps = {
  id: "smart-tv" | "ios" | "desktop" | "android";
  className?: string;
};

const MAP = {
  "smart-tv": MonitorPlay,
  ios: Smartphone,
  desktop: Laptop,
  android: TabletSmartphone,
} as const;

export function PlatformIcon({ id, className }: PlatformIconProps) {
  const Icon = MAP[id];
  return <Icon className={cn("size-5", className)} strokeWidth={1.75} aria-hidden />;
}
