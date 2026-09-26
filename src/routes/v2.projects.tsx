import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, Shell } from "@/components/concept2/Shell";
import { projects } from "@/content/site";
import { breadcrumbJsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/v2/projects")({
  head: () => ({
    ...seo({
      title: "Projects | Golden Sage Roofing Pvt. Ltd. (Concept 2)",
      description:
        "Residential and commercial roofing project portfolio for Golden Sage Roofing Pvt. Ltd. Entries are placeholders until confirmed project details are available.",
      path: "/v2/projects",
    }),
    scripts: [breadcrumbJsonLd("Projects", "/v2/projects")],
  }),
  component: ProjectsV2,
});

const filters = ["All", "Residential", "Commercial", "New Construction", "Renovation"] as const;

function ProjectsV2() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter(
    (p) => active === "All" || p.type === active || p.category === active,
  );

  return (
    <Shell>
      <Breadcrumbs page="Projects" />

      <section className="mx-auto max-w-[110rem] px-6 pb-12 pt-12 lg:px-12">
        <h1 className="display-grotesk max-w-4xl text-[2.75rem] text-charcoal sm:text-6xl">
          Project Portfolio
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite">
          A gallery structure ready for confirmed work. Every entry shown is a placeholder — we do
          not present a building as our project until it is.
        </p>

        <div className="mt-12 flex flex-wrap gap-6 border-t border-charcoal/12 pt-6" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`text-[0.75rem] font-semibold uppercase tracking-[0.14em] transition ${
                active === f ? "text-charcoal underline underline-offset-8" : "text-graphite hover:text-charcoal"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[110rem] px-6 pb-24 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2">
          {visible.map((p, i) => (
            <article key={p.slug} className={i % 2 === 1 ? "lg:mt-24" : ""}>
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                width={1408}
                height={1056}
                className="aspect-3/2 w-full object-cover"
              />
              <div className="mt-6 grid gap-6 border-t border-charcoal/15 pt-5 sm:grid-cols-12">
                <div className="sm:col-span-7">
                  <p className="text-[0.66rem] uppercase tracking-[0.18em] text-sage-deep">
                    {p.type} · {p.category}
                  </p>
                  <h2 className="display-grotesk mt-3 text-3xl text-charcoal">{p.name}</h2>
                  <p className="mt-2 text-sm text-graphite">{p.location}</p>
                </div>
                <div className="sm:col-span-5">
                  <p className="text-sm leading-relaxed text-graphite">{p.description}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-charcoal/60">
                    {p.solution}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-20 text-center text-sm text-graphite">
            No placeholder projects in this category yet.
          </p>
        )}

        <div className="mt-24 flex flex-wrap items-center justify-between gap-8 border-t border-charcoal/12 pt-12">
          <h2 className="display-grotesk max-w-xl text-3xl text-charcoal sm:text-4xl">
            Have a project in mind?
          </h2>
          <Link
            to="/v2/contact"
            className="bg-charcoal px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-warm-white transition hover:bg-sage-deep"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </Shell>
  );
}
