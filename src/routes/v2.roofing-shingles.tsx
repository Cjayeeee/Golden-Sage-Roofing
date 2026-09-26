import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, Shell } from "@/components/concept2/Shell";
import { productSpecFields, products } from "@/content/site";
import { breadcrumbJsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/v2/roofing-shingles")({
  head: () => ({
    ...seo({
      title: "Roofing Shingles | Products | Golden Sage Roofing (Concept 2)",
      description:
        "Architectural shingles, asphalt shingles, premium shingles and other roofing products supplied by Golden Sage Roofing Pvt. Ltd. in Canada.",
      path: "/v2/roofing-shingles",
    }),
    scripts: [breadcrumbJsonLd("Roofing Shingles", "/v2/roofing-shingles")],
  }),
  component: ShinglesV2,
});

function ShinglesV2() {
  return (
    <Shell>
      <Breadcrumbs page="Roofing Shingles" />

      <section className="mx-auto max-w-[110rem] px-6 pb-16 pt-12 lg:px-12">
        <h1 className="display-grotesk max-w-4xl text-[2.75rem] text-charcoal sm:text-6xl">
          Roofing Shingles
        </h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <p className="text-lg leading-relaxed text-graphite lg:col-span-7">
            Roofing shingles are the weather-facing layer of a steep-slope roof, laid in overlapping
            courses over underlayment and decking so water runs down the slope rather than into the
            building. They are the most common roof covering on Canadian houses and are widely used
            on low-rise commercial buildings.
          </p>
          <p className="text-sm leading-relaxed text-graphite lg:col-span-5">
            The categories below describe what we supply. Colour ranges, dimensions, warranties,
            manufacturer details and technical specifications are published per product once
            confirmed with the supplier — nothing is stated here that we cannot document.
          </p>
        </div>
      </section>

      {products.map((p, i) => (
        <section
          key={p.slug}
          id={p.slug}
          className="scroll-mt-28 border-t border-charcoal/12"
        >
          <div className={`mx-auto grid max-w-[110rem] lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`}>
            <figure className="m-0">
              <img
                src={p.image}
                alt={p.alt}
                loading={i === 0 ? undefined : "lazy"}
                width={1200}
                height={912}
                className="h-full max-h-[38rem] w-full object-cover"
              />
            </figure>

            <div className="px-6 py-16 lg:px-16 lg:py-20">
              <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-sage-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="display-grotesk mt-4 text-4xl text-charcoal sm:text-5xl">{p.name}</h2>
              <p className="mt-6 text-base leading-relaxed text-graphite">{p.summary}</p>
              <p className="mt-4 text-base leading-relaxed text-graphite">{p.detail}</p>

              <h3 className="mt-10 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sage-deep">
                Recommended applications
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.applications.map((a) => (
                  <li key={a} className="border border-charcoal/15 px-3 py-1.5 text-xs text-graphite">
                    {a}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sage-deep">
                Product information
              </h3>
              <dl className="mt-3 grid gap-x-10 sm:grid-cols-2">
                {productSpecFields.map((f) => (
                  <div key={f} className="flex justify-between gap-4 border-b border-charcoal/12 py-2.5 text-sm">
                    <dt className="text-graphite">{f}</dt>
                    <dd className="text-right text-charcoal/60">[TO BE CONFIRMED]</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/v2/contact"
                  className="bg-charcoal px-7 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.13em] text-warm-white transition hover:bg-sage-deep"
                >
                  Request Information
                </Link>
                <Link
                  to="/v2/contact"
                  className="border border-charcoal/25 px-7 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.13em] text-charcoal transition hover:border-charcoal"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-charcoal/12">
        <p className="mx-auto max-w-[110rem] px-6 py-10 text-xs text-graphite lg:px-12">
          Individual product pages can be added later at SEO-friendly URLs such as
          /roofing-shingles/architectural-shingles once manufacturer specifications and brochures
          are supplied.
        </p>
      </section>
    </Shell>
  );
}
