import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/concept2/Shell";
import { company, images, products, projects, selectionFactors, whyUs } from "@/content/site";
import { organizationJsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/v2/")({
  head: () => ({
    ...seo({
      title: "Roofing Shingles & Roofing Solutions | Golden Sage Roofing Pvt. Ltd.",
      description:
        "A roof is part of the architecture. Explore roofing shingles from Golden Sage Roofing Pvt. Ltd. for residential and commercial projects across Canada.",
      path: "/v2",
    }),
    scripts: [organizationJsonLd],
  }),
  component: HomeV2,
});

function HomeV2() {
  return (
    <Shell>
      {/* Hero — asymmetric split */}
      <section className="border-b border-charcoal/12">
        <div className="mx-auto grid max-w-[110rem] gap-0 lg:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-16 lg:col-span-5 lg:px-12 lg:py-28">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage-deep">
              Golden Sage Roofing — Canada
            </p>
            <h1 className="display-grotesk mt-8 text-[3rem] text-charcoal sm:text-[4.25rem] lg:text-[4.75rem]">
              A Roof Is Part<br />of the<br />
              <span className="text-sage-deep">Architecture.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-graphite">
              Explore roofing shingles that combine protection, performance, and visual character
              for residential and commercial projects.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/v2/roofing-shingles"
                className="bg-charcoal px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-warm-white transition hover:bg-sage-deep"
              >
                Explore Roofing Solutions
              </Link>
              <Link
                to="/v2/contact"
                className="border border-charcoal/25 px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-charcoal transition hover:border-charcoal"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <img
              src={images.heroArchitectural}
              alt="Contemporary Canadian house with a dark shingle roof, concrete and cedar exterior"
              width={1920}
              height={1088}
              className="h-full max-h-[46rem] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Roofing solutions — editorial rows */}
      <section className="mx-auto max-w-[110rem] px-6 py-24 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="display-grotesk text-4xl text-charcoal sm:text-5xl lg:col-span-5">
            Roofing<br />Solutions
          </h2>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-graphite">
              We supply shingle roofing systems for houses, multi-unit buildings and low-rise
              commercial properties — the shingles themselves, plus the underlayment, ventilation
              and edge details that let the roof do its job.
            </p>
            <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {["Residential roofing", "Commercial roofing", "New construction", "Roof replacement"].map(
                (item, i) => (
                  <div key={item} className="border-t border-charcoal/15 pt-5">
                    <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-sage-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-lg text-charcoal">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured products — large imagery */}
      <section className="border-y border-charcoal/12 bg-secondary/40">
        <div className="mx-auto max-w-[110rem] px-6 py-24 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display-grotesk text-4xl text-charcoal sm:text-5xl">Featured Products</h2>
            <Link
              to="/v2/roofing-shingles"
              className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-sage-deep"
            >
              All roofing shingles →
            </Link>
          </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-2">
            {products.map((p, i) => (
              <article key={p.slug} className={i % 2 === 1 ? "lg:mt-20" : ""}>
                <Link to="/v2/roofing-shingles" hash={p.slug} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      width={1200}
                      height={912}
                      className="aspect-16/10 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6 border-t border-charcoal/15 pt-5">
                    <div>
                      <h3 className="display-grotesk text-2xl text-charcoal sm:text-3xl">{p.name}</h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-graphite">{p.summary}</p>
                    </div>
                    <span className="mt-2 text-sm text-sage-deep">↗</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project portfolio — full bleed */}
      <section className="bg-charcoal py-24 text-warm-white">
        <div className="mx-auto max-w-[110rem] px-6 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display-grotesk text-4xl sm:text-5xl">Project Portfolio</h2>
            <Link to="/v2/projects" className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-sage">
              View all projects →
            </Link>
          </div>
          <p className="mt-6 max-w-xl text-sm text-warm-white/60">
            Placeholder entries. Confirmed project details and photography will be published as
            they become available.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.slug}>
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1408}
                  height={1056}
                  className="aspect-4/5 w-full object-cover"
                />
                <div className="mt-5 border-t border-warm-white/20 pt-4">
                  <p className="text-[0.66rem] uppercase tracking-[0.18em] text-sage">
                    {p.type} · {p.category}
                  </p>
                  <h3 className="display-grotesk mt-3 text-2xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-warm-white/55">{p.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-warm-white/70">{p.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Golden Sage */}
      <section className="mx-auto max-w-[110rem] px-6 py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="display-grotesk text-4xl text-charcoal sm:text-5xl lg:col-span-4">
            Why<br />Golden Sage
          </h2>
          <ul className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
            {whyUs.map((w, i) => (
              <li key={w.title} className="border-t border-charcoal/15 pt-6">
                <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-sage-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl text-charcoal">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{w.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our approach */}
      <section className="border-t border-charcoal/12">
        <div className="mx-auto grid max-w-[110rem] lg:grid-cols-2">
          <img
            src={images.rooflineDetail}
            alt="Geometric detail of a shingled gable roofline against a grey sky"
            loading="lazy"
            width={1408}
            height={1056}
            className="h-full max-h-[40rem] w-full object-cover"
          />
          <div className="px-6 py-20 lg:px-16">
            <h2 className="display-grotesk text-4xl text-charcoal sm:text-5xl">Our Approach</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-graphite">
              Roof selection is a set of decisions, not a single product choice. We work through
              them with you before anything is ordered.
            </p>
            <dl className="mt-10 space-y-6">
              {selectionFactors.map((f) => (
                <div key={f.title} className="border-t border-charcoal/12 pt-4">
                  <dt className="text-base font-semibold text-charcoal">{f.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-graphite">{f.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* About + CTA */}
      <section className="border-t border-charcoal/12 bg-sage-mist">
        <div className="mx-auto grid max-w-[110rem] gap-12 px-6 py-24 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-7">
            <h2 className="display-grotesk text-4xl text-charcoal sm:text-5xl">About the Company</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite">
              {company.name} supplies roofing shingles and roofing solutions in Canada for
              homeowners, builders, architects, contractors and property owners. Company history,
              certifications and partnerships will be published once confirmed.
            </p>
            <Link
              to="/v2/about"
              className="mt-8 inline-block border border-charcoal/25 px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-charcoal transition hover:border-charcoal"
            >
              About Us
            </Link>
          </div>
          <div className="lg:col-span-5">
            <h2 className="display-grotesk text-3xl text-charcoal">Planning a roofing project?</h2>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              Tell us about your project and our team will help you explore the right roofing
              solution.
            </p>
            <Link
              to="/v2/contact"
              className="mt-8 inline-block bg-charcoal px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-warm-white transition hover:bg-sage-deep"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
