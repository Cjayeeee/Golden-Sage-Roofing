import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, Shell } from "@/components/concept2/Shell";
import { company, images, values } from "@/content/site";
import { breadcrumbJsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/v2/about")({
  head: () => ({
    ...seo({
      title: "About Us | Golden Sage Roofing Pvt. Ltd. (Concept 2)",
      description:
        "Golden Sage Roofing Pvt. Ltd. is a Canadian roofing company specialising in roofing shingles and roofing solutions for residential and commercial projects.",
      path: "/v2/about",
    }),
    scripts: [breadcrumbJsonLd("About Us", "/v2/about")],
  }),
  component: AboutV2,
});

const approach = [
  "Quality products",
  "Professional service",
  "Attention to detail",
  "Appropriate product selection",
  "Reliable communication",
  "Customer satisfaction",
];

function AboutV2() {
  return (
    <Shell>
      <Breadcrumbs page="About Us" />

      <section className="mx-auto max-w-[110rem] px-6 pb-20 pt-12 lg:px-12">
        <h1 className="display-grotesk max-w-4xl text-[2.75rem] text-charcoal sm:text-6xl">
          Who We Are
        </h1>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-graphite">
              {company.name} is a Canadian roofing company focused on roofing shingles and roofing
              solutions. We work with homeowners, builders, architects, contractors and property
              owners on residential and commercial buildings.
            </p>
            <p className="mt-5 text-base leading-relaxed text-graphite">
              Founding date, team size, years of experience, completed project counts, awards,
              certifications and manufacturer partnerships are placeholders on this site and will be
              published only once confirmed: {"[COMPANY DETAILS TO BE CONFIRMED]"}.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={images.projectRenovation}
              alt="Canadian heritage home during a shingle roof renovation"
              loading="lazy"
              width={1408}
              height={1056}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/12 bg-secondary/40">
        <div className="mx-auto grid max-w-[110rem] gap-12 px-6 py-24 lg:grid-cols-12 lg:px-12">
          <h2 className="display-grotesk text-4xl text-charcoal sm:text-5xl lg:col-span-4">
            Our<br />Approach
          </h2>
          <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:col-span-8">
            {approach.map((a, i) => (
              <li key={a} className="flex items-baseline gap-5 border-t border-charcoal/15 pt-5">
                <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-sage-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xl text-charcoal">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[110rem] px-6 py-24 lg:px-12">
        <h2 className="display-grotesk text-4xl text-charcoal sm:text-5xl">Our Values</h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article key={v.title} className="border-t border-charcoal/15 pt-6">
              <h3 className="display-grotesk text-3xl text-charcoal">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-graphite">{v.body}</p>
            </article>
          ))}
        </div>
        <Link
          to="/v2/contact"
          className="mt-16 inline-block bg-charcoal px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-warm-white transition hover:bg-sage-deep"
        >
          Start Your Project
        </Link>
      </section>
    </Shell>
  );
}
