import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Briefcase, Check, Feather, Mic, PenLine, Sparkles } from "lucide-react";
import { Card, PillLink, Section } from "@/components/ui-kit";
import { Reveal } from "@/components/reveal";
import { courses } from "@/data/site";

const icons = { Briefcase, BookOpen, PenLine, Feather, Mic, Sparkles };

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Course unavailable — Voxa Coaching" }, { name: "robots", content: "noindex" }],
      };
    }
    const { course } = loaderData;
    return {
      meta: [
        { title: `${course.title} — Voxa Coaching` },
        { name: "description", content: course.short },
        { property: "og:title", content: `${course.title} — Voxa Coaching` },
        { property: "og:description", content: course.short },
      ],
    };
  },
  component: CourseDetail,
});

function CourseDetail() {
  const { course } = Route.useLoaderData();
  const Icon = icons[course.icon];

  return (
    <>
      <Section>
        <Reveal>
          <Link
            to="/courses"
            className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            <ArrowLeft className="mr-1.5 size-4" /> All courses
          </Link>
          <span className="mt-8 flex size-14 items-center justify-center rounded-2xl bg-mint text-primary">
            <Icon className="size-6" />
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl">{course.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{course.long}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink to="/contact">Enroll Now</PillLink>
            <PillLink to="/courses" variant="outline">
              Compare programs
            </PillLink>
          </div>
        </Reveal>
      </Section>

      <Section tone="mint" className="pt-0 sm:pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <Card className="h-full">
              <h3 className="text-lg">Duration</h3>
              <p className="mt-2 text-sm text-muted-foreground">{course.duration}</p>
            </Card>
          </Reveal>
          <Reveal delay={90}>
            <Card className="h-full">
              <h3 className="text-lg">Who it's for</h3>
              <p className="mt-2 text-sm text-muted-foreground">{course.audience}</p>
            </Card>
          </Reveal>
          <Reveal delay={180}>
            <Card className="h-full">
              <h3 className="text-lg">Format</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                In-person or online, small batches, recorded feedback after each session.
              </p>
            </Card>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <Card>
            <h3 className="text-xl">What you'll walk away with</h3>
            <ul className="mt-5 space-y-3">
              {course.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {o}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}
