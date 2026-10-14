import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { CookieBanner } from "./CookieBanner";
import { SmoothScroll } from "./SmoothScroll";
import { PageMotion, HeaderMotion, FloatMotion } from "./PageMotion";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <HeaderMotion>
        <Header />
      </HeaderMotion>
      <PageMotion>
        <main className="flex-1">{children}</main>
        <Footer />
      </PageMotion>
      <FloatMotion>
        <WhatsAppFloat />
      </FloatMotion>
      <CookieBanner />
    </SmoothScroll>
  );
}
