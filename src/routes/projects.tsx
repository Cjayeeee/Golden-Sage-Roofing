import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, Shell } from "@/components/concept1/Shell";
import { projects } from "@/content/site";
import { breadcrumbJsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => ({
    ...seo({
      title: "Roofing Projects | Golden Sage Roofing Pvt. Ltd.",
      description:
        "A portfolio of residential and commercial roofing projects by Golden Sage Roofing Pvt. Ltd. Project entries are placeholders until confirmed details are available.",
      path: "/projects",
    }),
    scripts: [breadcrumbJsonLd("Projects", "/projects")],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Residential", "Commercial", "New Construction", "Renovation"] as const;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = projects.filter(
    (p) => active === "All" || p.type === active || p.category === active,
  );

  return (
    <Shell>
      <Breadcrumbs page="Projects" />

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Projects</p>
          <h1 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            Residential and commercial roofing work
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            This portfolio is prepared and ready for real project content. Each entry below is a
            placeholder; confirmed project names, locations, products and photography will replace
            them so nothing is represented as our work before it is.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`rounded-sm border px-4 py-2 text-sm transition ${
                active === f
                  ? "border-sage-deep bg-sage-deep text-primary-foreground"
                  : "border-input text-foreground/75 hover:border-sage"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article key={p.slug} className="overflow-hidden rounded-sm border border-border bg-card shadow-card">
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                width={1408}
                height={1056}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-sage-deep">
                  {p.type} · {p.category}
                </p>
                <h2 className="display-serif mt-3 text-xl text-foreground">{p.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
                  Roofing product: {p.solution}
                </p>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-16 text-center text-sm text-muted-foreground">
            No placeholder projects in this category yet.
          </p>
        )}

        <div className="mt-16 rounded-sm border border-border bg-card p-10 text-center">
          <h2 className="display-serif text-2xl text-foreground">Have a project in mind?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Send us the details and we will help you work through product options and next steps.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-block rounded-sm bg-charcoal px-8 py-4 text-sm font-semibold text-warm-white transition hover:bg-sage-deep"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </Shell>
  );
}
