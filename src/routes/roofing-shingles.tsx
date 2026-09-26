import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, Shell } from "@/components/concept1/Shell";
import { productSpecFields, products } from "@/content/site";
import { breadcrumbJsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/roofing-shingles")({
  head: () => ({
    ...seo({
      title: "Roofing Shingles | Architectural, Asphalt & Premium | Golden Sage Roofing",
      description:
        "Explore roofing shingles supplied by Golden Sage Roofing Pvt. Ltd.: architectural shingles, asphalt shingles, premium shingles and other roofing products for Canadian buildings.",
      path: "/roofing-shingles",
    }),
    scripts: [breadcrumbJsonLd("Roofing Shingles", "/roofing-shingles")],
  }),
  component: ShinglesPage,
});

function ShinglesPage() {
  return (
    <Shell>
      <Breadcrumbs page="Roofing Shingles" />

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Roofing Shingles &amp; Products</p>
          <h1 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            Roofing shingles for Canadian homes and buildings
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Roofing shingles are the outer, weather-facing layer of a steep-slope roof. Installed in
            overlapping courses over underlayment and decking, they shed water down the slope and
            protect the structure below. They are the most common roof covering on Canadian
            residential buildings and are also used on many low-rise commercial properties.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The categories below describe the types of shingles we supply. Detailed specifications,
            colour ranges, warranties and manufacturer information are added per product once
            confirmed with the supplier.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="space-y-px overflow-hidden rounded-sm border border-border bg-border">
          {products.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-32 gap-10 bg-card p-8 lg:grid-cols-12 lg:p-12"
            >
              <div className="lg:col-span-5">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading={i === 0 ? undefined : "lazy"}
                  width={1200}
                  height={912}
                  className="aspect-4/3 w-full rounded-sm object-cover"
                />
              </div>

              <div className="lg:col-span-7">
                <h2 className="display-serif text-3xl text-foreground">{p.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.summary}</p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.detail}</p>

                <h3 className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sage-deep">
                  Recommended applications
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.applications.map((a) => (
                    <li key={a} className="rounded-sm bg-secondary px-3 py-1.5 text-xs text-foreground/80">
                      {a}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sage-deep">
                  Product information
                </h3>
                <dl className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {productSpecFields.map((f) => (
                    <div key={f} className="flex justify-between gap-4 border-b border-border py-2 text-sm">
                      <dt className="text-muted-foreground">{f}</dt>
                      <dd className="text-right text-foreground/70">[TO BE CONFIRMED]</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="rounded-sm bg-sage-deep px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-charcoal"
                  >
                    Request Information
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-sm border border-input px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-sage"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Individual product pages (for example /roofing-shingles/architectural-shingles) can be
          added for each product once manufacturer specifications and brochures are supplied.
        </p>
      </section>
    </Shell>
  );
}
