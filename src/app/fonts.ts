import localFont from "next/font/local";

/** Self-hosted to avoid Next 16 Turbopack Google Fonts flake (#99114). */
export const manrope = localFont({
  src: [
    {
      path: "./fonts/Manrope-latin-ext.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const display = localFont({
  src: [
    {
      path: "./fonts/Syne-latin-ext.woff2",
      weight: "500 800",
      style: "normal",
    },
    {
      path: "./fonts/Syne-latin.woff2",
      weight: "500 800",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: "Arial",
});
