import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, Shell } from "@/components/concept1/Shell";
import { company } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    ...seo({
      title: "Terms & Conditions | Golden Sage Roofing Pvt. Ltd.",
      description:
        "Terms governing use of the Golden Sage Roofing Pvt. Ltd. website and the information published on it.",
      path: "/terms",
    }),
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Shell>
      <Breadcrumbs page="Terms & Conditions" />
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-10">
        <h1 className="display-serif text-4xl text-foreground">Terms &amp; Conditions</h1>
        <p className="mt-6 text-sm text-muted-foreground">
          This page is a template and should be reviewed by a legal adviser before publication.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/80">
          <div>
            <h2 className="display-serif text-2xl text-foreground">Website content</h2>
            <p className="mt-3">
              Information on this website is provided for general guidance. Product specifications,
              warranties and installation requirements are set by the manufacturer and should be
              confirmed in writing before purchase.
            </p>
          </div>
          <div>
            <h2 className="display-serif text-2xl text-foreground">Quotations</h2>
            <p className="mt-3">
              A quote request does not create a contract. Any work proceeds on the terms set out in
              a written quotation accepted by both parties.
            </p>
          </div>
          <div>
            <h2 className="display-serif text-2xl text-foreground">Contact</h2>
            <p className="mt-3">Enquiries about these terms: {company.email}, {company.phone}.</p>
          </div>
        </div>
      </section>
    </Shell>
  );
}
