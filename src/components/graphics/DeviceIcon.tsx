import { cn } from "@/lib/cn";

type DeviceIconProps = {
  id: string;
  className?: string;
};

/** Monoline device glyphs — no trademarked logos. */
export function DeviceIcon({ id, className }: DeviceIconProps) {
  const common = cn("size-7 text-text", className);

  switch (id) {
    case "samsung":
    case "lg":
    case "android-tv":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden>
          <rect x="3" y="6" width="26" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 26h8M16 22v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "firestick":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden>
          <rect x="4" y="12" width="24" height="8" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case "ios":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden>
          <rect x="9" y="3" width="14" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "windows":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden>
          <rect x="4" y="7" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 20h24" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "android-box":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden>
          <rect x="5" y="9" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="16" r="1.5" fill="currentColor" />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case "mag":
      return (
        <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden>
          <rect x="6" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
