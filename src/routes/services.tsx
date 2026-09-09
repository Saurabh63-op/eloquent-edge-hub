import { createFileRoute } from "@tanstack/react-router";
import personalImg from "@/assets/personal-coaching.jpg";
import groupImg from "@/assets/group-workshop.jpg";
import onlineImg from "@/assets/online-resources.jpg";
import { BlobImage, PillLink, Section, SectionHeading } from "@/components/ui-kit";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Personal Coaching, Group Workshops & Online Resources" },
      {
        name: "description",
        content:
          "Voxa Coaching offers one-to-one personal coaching, small-group communication workshops and a library of online speaking resources.",
      },
      { property: "og:title", content: "Services — Voxa Coaching" },
      {
        property: "og:description",
        content: "Personal coaching, group workshops and online resources for confident communication.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    title: "Personal Coaching",
    img: personalImg,
    shape: "blob-a" as const,
    text: "A private track shaped entirely around you. We diagnose what actually gets in your way — pace, filler words, structure, nerves — and build a session plan against it. Each meeting is recorded so you can hear the change rather than take our word for it.",
    points: ["Weekly 1-to-1 sessions", "Recorded feedback", "Goal-based session plan"],
  },
  {
    title: "Group Workshops",
    img: groupImg,
    shape: "blob-b" as const,
    text: "Small cohorts of eight to twelve people who practise on each other every week. The pressure of a real audience is the point: you learn to hold attention, handle interruptions and recover from a stumble without losing the room.",
    points: ["Batches of 8-12", "Weekly live practice", "Peer and coach feedback"],
  },
  {
    title: "Online Resources",
    img: onlineImg,
    shape: "blob-c" as const,
    text: "Between sessions you get drills, worksheets and short video breakdowns you can work through in fifteen minutes a day. Available to every enrolled learner, on any device.",
    points: ["Daily 15-minute drills", "Downloadable worksheets", "Session recordings library"],
  },
];

function Services() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Three ways to work with us"
          subtitle="Start with one, combine two, or move between them as your schedule changes."
        />
      </Section>

      {services.map((s, i) => (
        <Section key={s.title} tone={i % 2 === 0 ? "mint" : "white"} className={i === 0 ? "pt-0 sm:pt-0" : ""}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <BlobImage src={s.img} alt={s.title} shape={s.shape} width={1024} height={768} />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-4xl">{s.title}</h2>
              <p className="mt-5 text-muted-foreground">{s.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-primary/25 bg-background px-4 py-1.5 text-xs font-medium text-primary"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PillLink to="/contact" variant="outline">
                  Enquire about {s.title}
                </PillLink>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section tone="navy">
        <Reveal className="text-center">
          <h2 className="text-3xl text-navy-foreground sm:text-4xl">Unlock Your Voice.</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/70">
            Tell us your goal and we will recommend the right mix.
          </p>
          <div className="mt-8 flex justify-center">
            <PillLink to="/contact">Get Started</PillLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
