import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { CookieBanner } from "./CookieBanner";
import { SmoothScroll } from "./SmoothScroll";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </SmoothScroll>
  );
}
