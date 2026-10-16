"use client";

import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/graphics/WhatsAppIcon";
import { Button } from "./Button";
import { cn } from "@/lib/cn";

type WhatsAppButtonProps = {
  label: string;
  message: string;
  /** primary = blue · accent = red solid · outline = red border · outlineBlue = blue border */
  variant?:
    | "primary"
    | "accent"
    | "outline"
    | "outlineBlue"
    | "inverse"
    | "outlineLight";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
  eventLabel?: string;
};

export function WhatsAppButton({
  label,
  message,
  variant = "primary",
  size = "md",
  className,
  showIcon = true,
  eventLabel,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(message);

  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={cn(className)}
      icon={showIcon ? <WhatsAppIcon className="size-[1.15em] shrink-0" /> : undefined}
      onClick={() =>
        trackEvent({
          event: "whatsapp_click",
          category: "conversion",
          label: eventLabel ?? label,
        })
      }
    >
      {label}
    </Button>
  );
}
