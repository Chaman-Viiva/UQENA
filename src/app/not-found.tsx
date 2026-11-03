import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section-pad section-cream flex min-h-[55vh] flex-1 items-center">
        <div className="container-uq text-center">
          <p className="eyebrow mb-4 justify-center">404</p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-slate">
            The page you requested is not on {siteConfig.name}. It may have moved or the link may
            be incorrect.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact us
            </Button>
          </div>
          <p className="mt-10 text-sm text-slate">
            Or browse{" "}
            <Link href="/services" className="link-arrow inline-flex">
              services <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            ,{" "}
            <Link href="/work" className="link-arrow inline-flex">
              work <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            , or{" "}
            <Link href="/insights" className="link-arrow inline-flex">
              insights <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
