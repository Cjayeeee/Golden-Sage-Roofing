import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, Shell } from "@/components/concept1/Shell";
import { company } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    ...seo({
      title: "Privacy Policy | Golden Sage Roofing Pvt. Ltd.",
      description:
        "How Golden Sage Roofing Pvt. Ltd. handles information submitted through quote requests and enquiries.",
      path: "/privacy",
    }),
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Shell>
      <Breadcrumbs page="Privacy Policy" />
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-10">
        <h1 className="display-serif text-4xl text-foreground">Privacy Policy</h1>
        <p className="mt-6 text-sm text-muted-foreground">
          This page is a template. Final wording should be reviewed against Canadian privacy
          legislation (PIPEDA and any applicable provincial legislation) before publication.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/80">
          <div>
            <h2 className="display-serif text-2xl text-foreground">Information we collect</h2>
            <p className="mt-3">
              When you submit a quote request we collect the details you provide, such as your name,
              phone number, email address, location and project information.
            </p>
          </div>
          <div>
            <h2 className="display-serif text-2xl text-foreground">How we use it</h2>
            <p className="mt-3">
              We use the information to respond to your enquiry, prepare a quotation and communicate
              about your roofing project. We do not sell personal information.
            </p>
          </div>
          <div>
            <h2 className="display-serif text-2xl text-foreground">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be sent to {company.email} or {company.phone}.
            </p>
          </div>
        </div>
      </section>
    </Shell>
  );
}
