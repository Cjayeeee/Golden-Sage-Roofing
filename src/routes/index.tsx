import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/concept1/Shell";
import { company, images, products, projects, selectionFactors, whyUs } from "@/content/site";
import { organizationJsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo({
      title: "Roofing Shingles in Canada | Golden Sage Roofing Pvt. Ltd.",
      description:
        "Golden Sage Roofing Pvt. Ltd. supplies architectural, asphalt and premium roofing shingles plus roofing solutions for Canadian residential and commercial buildings.",
      path: "/",
    }),
    scripts: [organizationJsonLd],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Shell>
      {/* Hero */}
      <section className="relative">
        <img
          src={images.heroPremium}
          alt="Canadian home with a dark architectural shingle roof, stone and cedar facade"
          width={1920}
          height={1088}
          className="h-[78vh] min-h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow-gold">Canadian Roofing Shingles &amp; Solutions</p>
              <h1 className="display-serif mt-5 text-4xl text-warm-white sm:text-5xl lg:text-6xl">
                Roofing Built for Protection.<br />Designed for Your Home.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-white/80">
                Quality roofing shingles and roofing solutions designed to bring lasting protection,
                performance, and character to Canadian homes and buildings.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-sm bg-gold px-7 py-4 text-sm font-semibold tracking-wide text-charcoal transition hover:bg-warm-white"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/roofing-shingles"
                  className="rounded-sm border border-warm-white/40 px-7 py-4 text-sm font-semibold tracking-wide text-warm-white transition hover:border-warm-white hover:bg-warm-white/10"
                >
                  Explore Roofing Shingles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Golden Sage */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Golden Sage Roofing</p>
          <h2 className="display-serif mt-4 text-3xl text-foreground sm:text-4xl">
            A considered approach to every roof
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We focus on roofing shingles and roofing solutions, and on helping clients choose a
            product that suits the building rather than the shortest route to a sale.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <article key={item.title} className="bg-card p-8">
              <span className="display-serif text-2xl text-gold">0{i + 1}</span>
              <h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Roofing shingles */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow">Roofing Shingles</p>
              <h2 className="display-serif mt-4 text-3xl text-foreground sm:text-4xl">
                Shingles and roofing products we supply
              </h2>
            </div>
            <Link to="/roofing-shingles" className="text-sm font-semibold text-sage-deep underline underline-offset-4">
              Explore Our Roofing Shingles
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-sm border border-border bg-card shadow-card transition hover:shadow-lift">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-6">
                  <h3 className="display-serif text-xl text-foreground">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                  <Link
                    to="/roofing-shingles"
                    hash={p.slug}
                    className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-sage-deep"
                  >
                    View details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Designed for Canadian homes */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">Designed for Canadian Homes</p>
            <h2 className="display-serif mt-4 text-3xl text-foreground sm:text-4xl">
              The right roof depends on the building
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              No single shingle suits every property or every part of the country. Selecting a
              roofing product means weighing several factors together, and confirming the
              manufacturer's documented requirements before installation.
            </p>
            <img
              src={images.rooflineDetail}
              alt="Steep shingled roofline and gable edge against a soft grey Canadian sky"
              loading="lazy"
              width={1408}
              height={1056}
              className="mt-10 w-full rounded-sm object-cover"
            />
          </div>

          <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {selectionFactors.map((f) => (
              <li key={f.title} className="bg-card p-7">
                <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-charcoal text-warm-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow-gold">Featured Projects</p>
              <h2 className="display-serif mt-4 text-3xl sm:text-4xl">Recent work</h2>
              <p className="mt-4 text-sm text-warm-white/65">
                Project entries below are placeholders and will be replaced with confirmed project
                information and photography.
              </p>
            </div>
            <Link to="/projects" className="text-sm font-semibold text-gold underline underline-offset-4">
              View Our Projects
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.slug} className="overflow-hidden rounded-sm bg-warm-white/5">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1408}
                  height={1056}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-gold">
                    {p.type} · {p.category}
                  </p>
                  <h3 className="display-serif mt-3 text-xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-warm-white/60">{p.location}</p>
                  <p className="mt-4 text-sm leading-relaxed text-warm-white/70">{p.description}</p>
                  <p className="mt-4 text-xs text-warm-white/50">Roofing solution: {p.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <img
            src={images.projectResidential}
            alt="Canadian family home with a newly installed grey architectural shingle roof"
            loading="lazy"
            width={1408}
            height={1056}
            className="w-full rounded-sm object-cover"
          />
          <div>
            <p className="eyebrow">About Golden Sage Roofing</p>
            <h2 className="display-serif mt-4 text-3xl text-foreground sm:text-4xl">
              A Canadian roofing company focused on shingles
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {company.name} supplies roofing shingles and roofing solutions for residential and
              commercial buildings in Canada. Our work centres on product selection, clear
              specification and dependable service from first enquiry to completion.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Company history, certifications and partnerships will be published here once
              confirmed.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block rounded-sm border border-sage-deep px-7 py-3.5 text-sm font-semibold text-sage-deep transition hover:bg-sage-deep hover:text-primary-foreground"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between lg:py-20">
          <div className="max-w-2xl">
            <h2 className="display-serif text-3xl text-sage-deep sm:text-4xl">
              Planning a Roofing Project?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Tell us about your project and our team will help you explore the right roofing
              solution.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-sm bg-charcoal px-8 py-4 text-sm font-semibold text-warm-white transition hover:bg-sage-deep"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </Shell>
  );
}
