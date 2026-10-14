import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "blue" | "red" | "line" | "soft";
};

export function Badge({ children, className, tone = "line" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        tone === "blue" && "bg-blue/8 text-blue ring-1 ring-blue/15",
        tone === "red" && "bg-red text-white",
        tone === "line" && "bg-surface text-muted ring-1 ring-line",
        tone === "soft" && "bg-surface-2 text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
