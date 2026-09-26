import { useState, type FormEvent } from "react";
import { projectTypes, propertyTypes, timelines } from "@/content/site";

type Props = { tone?: "classic" | "modern" };

export function QuoteForm({ tone = "classic" }: Props) {
  const [sent, setSent] = useState(false);

  const field =
    tone === "classic"
      ? "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/25"
      : "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-sm text-foreground outline-none transition focus:border-charcoal";
  const label = "mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground";
  const button =
    tone === "classic"
      ? "inline-flex items-center justify-center rounded-sm bg-sage-deep px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition hover:bg-charcoal"
      : "inline-flex items-center justify-center bg-charcoal px-10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-warm-white transition hover:bg-sage-deep";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-sage/40 bg-accent p-8">
        <h3 className="display-serif text-2xl text-sage-deep">Thank you — your request is noted.</h3>
        <p className="mt-3 text-sm text-foreground/80">
          This demonstration form does not yet send email. Connect a mailbox or CRM and the enquiry
          details will be delivered to {"[EMAIL ADDRESS]"}.
        </p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-sage-deep underline">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <div>
        <label className={label} htmlFor="qf-name">Full name</label>
        <input id="qf-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="qf-phone">Phone number</label>
        <input id="qf-phone" name="phone" type="tel" required autoComplete="tel" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="qf-email">Email</label>
        <input id="qf-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="qf-city">City / Province</label>
        <input id="qf-city" name="city" required autoComplete="address-level2" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="qf-project">Project type</label>
        <select id="qf-project" name="projectType" className={field} defaultValue="">
          <option value="" disabled>Select an option</option>
          {projectTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="qf-property">Property type</label>
        <select id="qf-property" name="propertyType" className={field} defaultValue="">
          <option value="" disabled>Select an option</option>
          {propertyTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="qf-requirement">Roofing requirement</label>
        <input id="qf-requirement" name="requirement" placeholder="e.g. architectural shingles" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="qf-timeline">Approximate timeline</label>
        <select id="qf-timeline" name="timeline" className={field} defaultValue="">
          <option value="" disabled>Select an option</option>
          {timelines.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="qf-message">Message</label>
        <textarea id="qf-message" name="message" rows={5} className={field} />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="qf-file">Photos or drawings (optional)</label>
        <input id="qf-file" name="file" type="file" multiple className="block w-full text-sm text-muted-foreground file:mr-4 file:border file:border-input file:bg-secondary file:px-4 file:py-2 file:text-sm file:text-foreground" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className={button}>Request a Quote</button>
        <p className="mt-3 text-xs text-muted-foreground">
          We reply to enquiries during {"[BUSINESS HOURS]"}.
        </p>
      </div>
    </form>
  );
}
