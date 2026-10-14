type GtagEvent = {
  event: string;
  category?: string;
  label?: string;
  value?: string | number;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent({ event, category, label, value }: GtagEvent) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    event_category: category,
    event_label: label,
    value,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}
