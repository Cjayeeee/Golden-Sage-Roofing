import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { company } from "@/content/site";

const links = [
  { label: "Home", to: "/v2" },
  { label: "About Us", to: "/v2/about" },
  { label: "Roofing Shingles", to: "/v2/roofing-shingles" },
  { label: "Projects", to: "/v2/projects" },
  { label: "Contact Us", to: "/v2/contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/12 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-[110rem] items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/v2" aria-label="Golden Sage Roofing home">
          <Logo height={64} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/v2" }}
              activeProps={{ className: "text-charcoal after:w-full" }}
              className="relative text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-graphite transition after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-sage after:transition-all hover:text-charcoal hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/v2/contact"
            className="bg-charcoal px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.13em] text-warm-white transition hover:bg-sage-deep"
          >
            Get a Quote
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to="/v2/contact"
            className="bg-charcoal px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-warm-white"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border border-charcoal/15"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-charcoal/10 bg-white lg:hidden">
          <ul className="px-6 py-2">
            {links.map((l) => (
              <li key={l.to} className="border-b border-charcoal/8 last:border-0">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="display-grotesk block py-4 text-2xl text-charcoal"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-5 py-4 text-sm font-semibold">
              <a href={`tel:${company.phone}`} className="text-sage-deep">Call us</a>
              <a href={`mailto:${company.email}`} className="text-sage-deep">Email us</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-charcoal/12 bg-white">
      <div className="mx-auto max-w-[110rem] px-6 py-20 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="display-grotesk text-4xl text-charcoal sm:text-5xl">
              Golden Sage<br />Roofing
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-graphite">
              {company.description}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sage-deep">Navigation</h2>
            <ul className="mt-6 space-y-3 text-sm text-graphite">
              {links.map((l) => (
                <li key={l.to}><Link to={l.to} className="transition hover:text-charcoal">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sage-deep">Contact</h2>
            <address className="mt-6 space-y-3 text-sm not-italic text-graphite">
              <p>{company.address}</p>
              <p><a href={`tel:${company.phone}`} className="transition hover:text-charcoal">{company.phone}</a></p>
              <p><a href={`mailto:${company.email}`} className="transition hover:text-charcoal">{company.email}</a></p>
              <p>{company.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-charcoal/12 pt-6 text-xs text-graphite sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name} All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="transition hover:text-charcoal">Privacy Policy</Link>
            <Link to="/terms" className="transition hover:text-charcoal">Terms &amp; Conditions</Link>
            <Link to="/" className="text-sage-deep transition hover:text-charcoal">View Design Concept 1</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ page }: { page: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-[110rem] px-6 pt-10 lg:px-12">
      <ol className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-graphite">
        <li><Link to="/v2" className="transition hover:text-charcoal">Home</Link></li>
        <li aria-hidden="true">—</li>
        <li className="text-charcoal">{page}</li>
      </ol>
    </nav>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
