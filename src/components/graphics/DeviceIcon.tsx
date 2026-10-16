import { cn } from "@/lib/cn";

type DeviceIconProps = {
  id: string;
  className?: string;
};

/** Monoline device glyphs — no trademarked logos. */
export function DeviceIcon({ id, className }: DeviceIconProps) {
  const common = cn("size-5 shrink-0", className);

  switch (id) {
    case "samsung":
    case "lg":
    case "android-tv":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect
            x="2"
            y="4"
            width="20"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9 20h6M12 17v3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "firestick":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect
            x="3"
            y="9"
            width="18"
            height="6"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="7.5" cy="12" r="1.25" fill="currentColor" />
          <path
            d="M11 12h6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "android-box":
    case "mag":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect
            x="3"
            y="7"
            width="18"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="8" cy="12" r="1.2" fill="currentColor" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
          <path
            d="M16 10.5v3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "android-phone":
    case "ios":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect
            x="7"
            y="2"
            width="10"
            height="20"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10 4.5h4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="18.5" r="0.9" fill="currentColor" />
        </svg>
      );
    case "tablets":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M11 16.5h2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mac":
    case "windows":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect
            x="2"
            y="4"
            width="20"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M2 14h20M8 20h8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}
