import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Mic, Phone, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Mic className="size-4" />
            </span>
            <span className="text-lg font-bold text-navy-foreground">Voxa Coaching</span>
          </div>
          <p className="mt-4 text-sm text-navy-foreground/70">
            Training people to speak with clarity, structure and confidence since 2025.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-navy-foreground uppercase">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/courses", label: "Courses" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-navy-foreground/70 transition-colors duration-200 hover:text-primary-soft"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-navy-foreground uppercase">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary-soft" />
              221 Orator Lane, Bengaluru 560001
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary-soft" />
              +91 98000 12345
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary-soft" />
              hello@voxacoaching.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-navy-foreground uppercase">
            Follow
          </h4>
          <div className="mt-4 flex gap-3">
            {[Instagram, Linkedin, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex size-10 items-center justify-center rounded-full bg-white/5 text-navy-foreground/80 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} Voxa Coaching. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
