"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/graphics/WhatsAppIcon";
import { cn } from "@/lib/cn";

export function WhatsAppFloat() {
  const [showTip, setShowTip] = useState(false);
  const href = buildWhatsAppUrl(WHATSAPP_MESSAGES.essai);

  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8">
      <div className="relative">
        <div
          className={cn(
            "pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-xl bg-white px-3 py-2 text-xs text-text shadow-[0_4px_16px_rgba(0,0,0,.12)] ring-1 ring-line transition",
            showTip ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
          )}
        >
          Une question ? Écrivez-nous
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter sur WhatsApp"
          onMouseEnter={() => setShowTip(true)}
          onMouseLeave={() => setShowTip(false)}
          onFocus={() => setShowTip(true)}
          onBlur={() => setShowTip(false)}
          onClick={() =>
            trackEvent({
              event: "whatsapp_click",
              category: "conversion",
              label: "float_button",
            })
          }
          className="flex size-[56px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_2px_10px_rgba(0,0,0,.22)] transition hover:brightness-105"
        >
          <WhatsAppIcon className="size-[28px] text-white" />
        </a>
      </div>
    </div>
  );
}
