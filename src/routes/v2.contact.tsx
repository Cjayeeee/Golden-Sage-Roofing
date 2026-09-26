import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, Shell } from "@/components/concept2/Shell";
import { QuoteForm } from "@/components/QuoteForm";
import { company } from "@/content/site";
import { breadcrumbJsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/v2/contact")({
  head: () => ({
    ...seo({
      title: "Contact Us | Start Your Roofing Project | Golden Sage Roofing",
      description:
        "Contact Golden Sage Roofing Pvt. Ltd. about roofing shingles, product information or a quote for a residential or commercial roofing project in Canada.",
      path: "/v2/contact",
    }),
    scripts: [breadcrumbJsonLd("Contact Us", "/v2/contact")],
  }),
  component: ContactV2,
});

function ContactV2() {
  return (
    <Shell>
      <Breadcrumbs page="Contact Us" />

      <section className="mx-auto max-w-[110rem] px-6 pb-24 pt-12 lg:px-12">
        <h1 className="display-grotesk max-w-4xl text-[2.75rem] text-charcoal sm:text-6xl">
          Start Your Project
        </h1>

        <div className="mt-14 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sage-deep">
              {company.name}
            </h2>
            <dl className="mt-8 space-y-6 text-sm">
              <div className="border-t border-charcoal/12 pt-4">
                <dt className="text-[0.66rem] uppercase tracking-[0.16em] text-graphite">Address</dt>
                <dd className="mt-1 text-charcoal">{company.address}</dd>
              </div>
              <div className="border-t border-charcoal/12 pt-4">
                <dt className="text-[0.66rem] uppercase tracking-[0.16em] text-graphite">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${company.phone}`} className="text-charcoal underline underline-offset-4">
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div className="border-t border-charcoal/12 pt-4">
                <dt className="text-[0.66rem] uppercase tracking-[0.16em] text-graphite">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${company.email}`} className="text-charcoal underline underline-offset-4">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div className="border-t border-charcoal/12 pt-4">
                <dt className="text-[0.66rem] uppercase tracking-[0.16em] text-graphite">Business hours</dt>
                <dd className="mt-1 text-charcoal">{company.hours}</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${company.phone}`}
                className="bg-charcoal px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-warm-white"
              >
                Call Us
              </a>
              <a
                href={`mailto:${company.email}`}
                className="border border-charcoal/25 px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-charcoal"
              >
                Email Us
              </a>
            </div>

            <p className="mt-8 border border-dashed border-charcoal/20 p-5 text-xs leading-relaxed text-graphite">
              Google Maps and WhatsApp can be added here once the business address and messaging
              number are confirmed.
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="display-grotesk text-3xl text-charcoal">Quote request</h2>
            <p className="mt-3 text-sm text-graphite">
              Share the building, the roof and your timeline and we will come back with options.
            </p>
            <div className="mt-10">
              <QuoteForm tone="modern" />
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
