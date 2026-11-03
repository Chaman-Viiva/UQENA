import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[var(--header-h)] [&:has(#site-hero)]:pt-0">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
