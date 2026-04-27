import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/faculty", label: "Faculty" },
  { to: "/results", label: "Results" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gradient-saffron)] text-primary-foreground font-display text-lg font-bold shadow-[var(--shadow-soft)] transition-transform group-hover:scale-105">
            V
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold text-primary md:text-lg">
              Vivekananda
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              High School
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--saffron-deep)]" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/admissions"
          className="hidden rounded-full btn-saffron px-5 py-2.5 text-sm font-medium transition-all hover:scale-[1.02] lg:inline-flex"
        >
          Apply Now
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-primary"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="py-3 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full btn-saffron px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
