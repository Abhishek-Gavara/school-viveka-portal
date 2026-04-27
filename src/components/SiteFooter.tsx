import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gradient-saffron)] font-display text-lg font-bold text-primary">
              V
            </div>
            <div>
              <div className="font-display text-lg font-semibold">Vivekananda High School</div>
              <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                Arise · Awake · Achieve
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Inspired by the timeless wisdom of Swami Vivekananda, we nurture young minds to grow
            with knowledge, character, and purpose.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--saffron)]">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-primary-foreground/80 hover:text-[var(--saffron)]">About Us</Link></li>
            <li><Link to="/academics" className="text-primary-foreground/80 hover:text-[var(--saffron)]">Academics</Link></li>
            <li><Link to="/faculty" className="text-primary-foreground/80 hover:text-[var(--saffron)]">Faculty</Link></li>
            <li><Link to="/results" className="text-primary-foreground/80 hover:text-[var(--saffron)]">Results</Link></li>
            <li><Link to="/gallery" className="text-primary-foreground/80 hover:text-[var(--saffron)]">Gallery</Link></li>
            <li><Link to="/admissions" className="text-primary-foreground/80 hover:text-[var(--saffron)]">Admissions</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/80 hover:text-[var(--saffron)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--saffron)]">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-[var(--saffron)]" /><span>Vivekananda Marg, Near City Park</span></li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-[var(--saffron)]" /><span>+91 98765 43210</span></li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-[var(--saffron)]" /><span>info@vmhs.edu.in</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Vivekananda High School. All rights reserved.</p>
          <p className="font-display italic">"Take up one idea. Make that one idea your life."</p>
        </div>
      </div>
    </footer>
  );
}
