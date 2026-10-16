import Image from "next/image";
import { cn } from "@/lib/cn";

type AppBrandIconProps = {
  name: string;
  className?: string;
};

/** Official app icons downloaded from App Store / Play / Wikimedia. */
const ICON_SRC: Record<string, string> = {
  "Ibo TV Player": "/apps/ibo-tv.png",
  "Ibo Pro Player": "/apps/ibo-pro.png",
  "Ibo Player Pro": "/apps/ibo-player-pro.png",
  "Ibo Player": "/apps/ibo-player.png",
  "Hot IPTV": "/apps/hot-iptv.png",
  "Smart One IPTV": "/apps/smart-one-iptv.png",
  "Bob Player": "/apps/bob-player.png",
  "MyTV Online": "/apps/mytv-online.png",
  "IPTV Smarters Pro": "/apps/iptv-smarters-pro.png",
  iPlayTV: "/apps/iplaytv.png",
  "GSE Smart IPTV": "/apps/gse-smart-iptv.png",
  "VU IPTV Player": "/apps/vu-iptv.png",
  "IPTV Expert": "/apps/iptv-expert.png",
  "VLC Media Player": "/apps/vlc.png",
  Kodi: "/apps/kodi.png",
  TiviMate: "/apps/tivimate.png",
  "Perfect Player": "/apps/perfect-player.png",
};

export function AppBrandIcon({ name, className }: AppBrandIconProps) {
  const src = ICON_SRC[name];

  if (!src) {
    return (
      <span
        className={cn(
          "inline-flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-blue text-[10px] font-bold text-white",
          className,
        )}
        aria-hidden
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative inline-flex size-10 shrink-0 overflow-hidden rounded-[10px] bg-white ring-1 ring-line",
        className,
      )}
    >
      <Image
        src={src}
        alt=""
        width={40}
        height={40}
        className="size-full object-cover"
        aria-hidden
      />
    </span>
  );
}
