import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, Shell } from "@/components/concept1/Shell";
import { QuoteForm } from "@/components/QuoteForm";
import { company } from "@/content/site";
import { breadcrumbJsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...seo({
      title: "Contact Us | Request a Roofing Quote | Golden Sage Roofing",
      description:
        "Contact Golden Sage Roofing Pvt. Ltd. to request a quote for roofing shingles or a roofing project in Canada.",
      path: "/contact",
    }),
    scripts: [breadcrumbJsonLd("Contact Us", "/contact")],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Shell>
      <Breadcrumbs page="Contact Us" />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Contact Us</p>
          <h1 className="display-serif mt-4 text-4xl text-foreground sm:text-5xl">
            Request a roofing quote
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Tell us about your building and what you need. The more detail you can share about the
            roof, the timeline and the products you are considering, the more useful our reply will
            be.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-border bg-card p-8">
              <h2 className="display-serif text-2xl text-foreground">{company.name}</h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-sage-deep">Address</dt>
                  <dd className="mt-1 text-foreground/80">{company.address}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-sage-deep">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${company.phone}`} className="text-foreground/80 underline underline-offset-4">
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-sage-deep">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${company.email}`} className="text-foreground/80 underline underline-offset-4">
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-sage-deep">Business hours</dt>
                  <dd className="mt-1 text-foreground/80">{company.hours}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${company.phone}`}
                  className="rounded-sm bg-sage-deep px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Call Us
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="rounded-sm border border-input px-5 py-3 text-sm font-semibold text-foreground"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-sm border border-dashed border-input bg-secondary/50 p-6 text-sm text-muted-foreground">
              A Google Maps location and WhatsApp contact can be added here once the business
              address and messaging number are confirmed.
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="display-serif text-2xl text-foreground">Quote request</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fields marked as required help us reply accurately.</p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
