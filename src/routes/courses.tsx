import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Briefcase, Feather, Mic, PenLine, Sparkles } from "lucide-react";
import { Card, PillLink, Section, SectionHeading } from "@/components/ui-kit";
import { Reveal } from "@/components/reveal";
import { courses } from "@/data/site";

const icons = { Briefcase, BookOpen, PenLine, Feather, Mic, Sparkles };

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Voxa Coaching Speaking & Writing Programs" },
      {
        name: "description",
        content:
          "Six structured programmes: Career-Focused Communication, All-Rounder English, Young Author, Writer's Choice, Young Orator and Custom Coaching.",
      },
      { property: "og:title", content: "Courses — Voxa Coaching" },
      {
        property: "og:description",
        content: "Structured speaking and writing programmes for students, professionals and teams.",
      },
    ],
  }),
  component: Courses,
});

function Courses() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Programs"
          title="Find the course that fits"
          subtitle="Every programme is practice-led, capped at small batch sizes, and ends with you speaking or writing in public."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <Reveal key={c.slug} delay={(i % 3) * 90}>
                <Card className="flex h-full flex-col">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-mint text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.short}</p>
                  <p className="mt-4 text-xs font-medium tracking-wide text-primary uppercase">
                    {c.duration}
                  </p>
                  <Link
                    to="/courses/$slug"
                    params={{ slug: c.slug }}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-colors duration-200 hover:text-navy"
                  >
                    Learn More <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="mint">
        <Reveal className="text-center">
          <h2 className="text-3xl sm:text-4xl">Not sure which one?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us your goal and timeline and we will point you to the right track — or build one.
          </p>
          <div className="mt-8 flex justify-center">
            <PillLink to="/contact">Talk to a Coach</PillLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
