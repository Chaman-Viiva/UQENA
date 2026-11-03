import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section-pad bg-horizon flex flex-1 items-center">
        <div className="container-uq text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-gray">
            The page you requested is not on {siteConfig.name}. It may have moved or the link may
            be incorrect.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact us
            </Button>
          </div>
          <p className="mt-8 text-sm text-gray">
            Or browse{" "}
            <Link href="/services" className="text-blue hover:underline">
              services
            </Link>
            ,{" "}
            <Link href="/work" className="text-blue hover:underline">
              work
            </Link>
            , or{" "}
            <Link href="/insights" className="text-blue hover:underline">
              insights
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
