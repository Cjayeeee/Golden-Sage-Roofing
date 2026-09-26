import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { company } from "@/content/site";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Roofing Shingles", to: "/roofing-shingles" },
  { label: "Projects", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur">
      <div className="hidden bg-charcoal text-warm-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="text-warm-white/70">
            Roofing shingles and roofing solutions across {company.serviceArea}
          </p>
          <div className="flex items-center gap-6 text-warm-white/80">
            <a href={`tel:${company.phone}`} className="transition hover:text-gold">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="transition hover:text-gold">
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/" aria-label="Golden Sage Roofing home" className="flex items-center">
            <Logo height={72} className="shrink-0" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-sage-deep" }}
                className="text-[0.75rem] font-medium tracking-[0.01em] text-foreground/80 transition hover:text-sage-deep"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-sm border border-gold bg-gold/10 px-3.5 py-2 text-[0.75rem] font-semibold text-charcoal transition hover:bg-gold/25"
            >
              Get a Quote
            </Link>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/contact"
              className="rounded-sm border border-gold bg-gold/10 px-3 py-2 text-xs font-semibold text-charcoal"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-border"
            >
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-b border-border bg-card lg:hidden">
          <ul className="mx-auto max-w-7xl px-6 py-2">
            {links.map((l) => (
              <li key={l.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base font-medium text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-4 py-4 text-sm">
              <a href={`tel:${company.phone}`} className="font-semibold text-sage-deep">Call us</a>
              <a href={`mailto:${company.email}`} className="font-semibold text-sage-deep">Email us</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo height={64} />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-warm-white/65">
            {company.description} Product selection, specification support and quotations for
            homeowners, builders and property owners.
          </p>
        </div>

        <div>
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">Navigation</h2>
          <ul className="mt-5 space-y-3 text-sm text-warm-white/70">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-warm-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">Contact</h2>
          <address className="mt-5 space-y-3 text-sm not-italic text-warm-white/70">
            <p>{company.address}</p>
            <p><a href={`tel:${company.phone}`} className="transition hover:text-warm-white">{company.phone}</a></p>
            <p><a href={`mailto:${company.email}`} className="transition hover:text-warm-white">{company.email}</a></p>
            <p>{company.hours}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-warm-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-warm-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name} All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="transition hover:text-warm-white">Privacy Policy</Link>
            <Link to="/terms" className="transition hover:text-warm-white">Terms &amp; Conditions</Link>
            <Link to="/v2" className="text-gold transition hover:text-warm-white">View Design Concept 2</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ page }: { page: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-8">
      <ol className="flex items-center gap-2 text-xs text-muted-foreground">
        <li><Link to="/" className="transition hover:text-sage-deep">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li className="text-foreground">{page}</li>
      </ol>
    </nav>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
