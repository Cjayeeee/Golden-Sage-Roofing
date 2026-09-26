import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, Shell } from "@/components/concept1/Shell";
import { company, images, values } from "@/content/site";
import { breadcrumbJsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...seo({
      title: "About Us | Golden Sage Roofing Pvt. Ltd.",
      description:
        "Golden Sage Roofing Pvt. Ltd. is a Canadian roofing company focused on roofing shingles and roofing solutions for residential and commercial buildings.",
      path: "/about",
    }),
    scripts: [breadcrumbJsonLd("About Us", "/about")],
  }),
  component: AboutPage,
});

const approach = [
  { title: "Quality products", body: "We supply roofing shingles and components we are prepared to stand behind." },
  { title: "Professional service", body: "Site visits, quotations and scheduling handled in an orderly way." },
  { title: "Attention to detail", body: "Flashing, ventilation and edge work are specified, not improvised." },
  { title: "Appropriate product selection", body: "Recommendations follow the building, the slope and the exposure." },
  { title: "Reliable communication", body: "You know who to speak to and what happens next at each stage." },
  { title: "Customer satisfaction", body: "A finished roof you understand, with documentation you can keep." },
];

function AboutPage() {
  return (
    <Shell>
      <Breadcrumbs page="About Us" />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h1 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
              A Canadian roofing company built around roofing shingles
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {company.name} supplies roofing shingles and roofing solutions for homes and
              commercial buildings in Canada. Our focus is narrow on purpose: knowing shingle
              systems well enough to recommend the right one, and detailing them properly.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Founding date, team size, years of experience, completed project counts, awards,
              certifications and manufacturer partnerships are shown here as placeholders and will
              be published once confirmed: {"[COMPANY DETAILS TO BE CONFIRMED]"}.
            </p>
          </div>
          <img
            src={images.rooflineDetail}
            alt="Clean shingled roofline of a Canadian house seen against a grey sky"
            loading="lazy"
            width={1408}
            height={1056}
            className="w-full rounded-sm object-cover"
          />
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Approach</p>
            <h2 className="display-serif mt-4 text-3xl text-foreground sm:text-4xl">
              How we work with clients
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((a) => (
              <article key={a.title} className="bg-card p-8">
                <h3 className="text-base font-semibold text-foreground">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Our Values</p>
          <h2 className="display-serif mt-4 text-3xl text-foreground sm:text-4xl">
            What we hold ourselves to
          </h2>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article key={v.title} className="border-t-2 border-gold pt-6">
              <h3 className="display-serif text-2xl text-foreground">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="display-serif max-w-xl text-3xl text-sage-deep">
            Want to talk through a roofing project?
          </h2>
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
