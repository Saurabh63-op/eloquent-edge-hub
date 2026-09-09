import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "mint" | "navy";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 px-5 py-16 sm:py-20",
        tone === "mint" && "bg-mint",
        tone === "navy" && "bg-navy",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold tracking-[0.18em] uppercase",
            invert ? "text-primary-soft" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn("mt-3 text-3xl sm:text-4xl", invert && "text-navy-foreground")}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base", invert ? "text-navy-foreground/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}

export type AppPath =
  | "/"
  | "/about"
  | "/courses"
  | "/services"
  | "/gallery"
  | "/blog"
  | "/contact";

export function PillLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: AppPath;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.03]",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-card hover:bg-primary-soft hover:shadow-lift",
        variant === "outline" &&
          "border border-primary/40 text-primary hover:border-primary hover:bg-mint",
        variant === "light" &&
          "bg-background text-navy shadow-card hover:shadow-lift",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function BlobImage({
  src,
  alt,
  shape = "blob-a",
  className,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  shape?: "blob-a" | "blob-b" | "blob-c";
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="dot-grid absolute -top-5 -left-5 hidden size-24 rounded-xl sm:block" />
      <div className="dot-grid absolute -right-5 -bottom-5 hidden size-24 rounded-xl sm:block" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={cn("relative w-full object-cover shadow-lift", shape)}
      />
    </div>
  );
}
