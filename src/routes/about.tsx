import { createFileRoute } from "@tanstack/react-router";
import { Compass, HeartHandshake, Target } from "lucide-react";
import founderImg from "@/assets/founder.jpg";
import { BlobImage, Card, PillLink, Section, SectionHeading } from "@/components/ui-kit";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Voxa Coaching — 20+ Years of Helping People Find Their Voice" },
      {
        name: "description",
        content:
          "Meet the coach behind Voxa Coaching and read our mission: communication as a life skill, taught through practice rather than theory.",
      },
      { property: "og:title", content: "About Voxa Coaching" },
      {
        property: "og:description",
        content: "20+ years of coaching experience, built on practice, feedback and real stage time.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="About us"
          title="Communication is a life skill, not a subject"
          subtitle="Voxa Coaching was founded in 2025 to teach speaking the way it is actually used — live, unscripted and under a little pressure."
        />
      </Section>

      <Section tone="mint" className="pt-0 sm:pt-0">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <BlobImage
              src={founderImg}
              alt="Portrait of the founding coach at Voxa Coaching"
              shape="blob-c"
              width={900}
              height={1100}
              className="mx-auto max-w-sm"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              The founder
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Twenty years, one obsession</h2>
            <p className="mt-5 text-muted-foreground">
              Our founding coach has spent more than twenty years helping people find their voice —
              in classrooms, boardrooms, debate halls and on conference stages. That work started
              with school debate teams and grew into leadership coaching for managers who could do
              the job but could not yet explain it.
            </p>
            <p className="mt-4 text-muted-foreground">
              The method has stayed the same throughout: give people a frame to think in, put them
              on their feet, record it, and be honest about what to fix next. No scripts to memorise,
              no personality transplant. Just your own voice, sharpened.
            </p>
            <div className="mt-8">
              <PillLink to="/contact">Book a Session</PillLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our mission"
          title="What we believe"
          subtitle="Three principles shape every programme we run."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Clarity before polish",
              text: "A clear idea in plain words beats a beautiful sentence nobody follows. We start with thinking, then delivery.",
            },
            {
              icon: Compass,
              title: "Structure you can reuse",
              text: "You leave with frames that work in an interview, a stand-up meeting or a wedding toast.",
            },
            {
              icon: HeartHandshake,
              title: "Practice over theory",
              text: "Every session ends with you having spoken. Feedback is specific, kind and immediately actionable.",
            },
          ].map((m, i) => (
            <Reveal key={m.title} delay={i * 90}>
              <Card className="h-full">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-mint text-primary">
                  <m.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl">{m.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{m.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <Reveal className="text-center">
          <h2 className="text-3xl text-navy-foreground sm:text-4xl">Ready when you are</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/70">
            Start with a free 20-minute conversation about where your speaking gets stuck.
          </p>
          <div className="mt-8 flex justify-center">
            <PillLink to="/contact">Book a Session</PillLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
