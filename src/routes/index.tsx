import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Briefcase,
  Check,
  Globe,
  Mic,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-speaker.jpg";
import aboutImg from "@/assets/group-workshop.jpg";
import { BlobImage, Card, PillLink, Section, SectionHeading } from "@/components/ui-kit";
import { Reveal } from "@/components/reveal";
import { testimonials } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voxa Coaching — Master Public Speaking Skills Today" },
      {
        name: "description",
        content:
          "Voxa Coaching trains students, professionals and teams to speak with clarity, structure and confidence. Explore personal coaching, group sessions and online resources.",
      },
      { property: "og:title", content: "Voxa Coaching — Master Public Speaking Skills Today" },
      {
        property: "og:description",
        content: "Transform your confidence and communication with practical, coach-led speaking programmes.",
      },
    ],
  }),
  component: Home,
});

const offerings = [
  {
    icon: Mic,
    title: "Personal Coaching",
    text: "One-to-one sessions built around your voice, your goal and your deadline.",
  },
  {
    icon: Users,
    title: "Group Sessions",
    text: "Small cohorts where you practise in front of real people, every single week.",
  },
  {
    icon: Globe,
    title: "Online Resources",
    text: "Drills, recordings and worksheets you can work through between sessions.",
  },
];

const previewCourses = [
  {
    icon: Briefcase,
    title: "Career-Focused Communication",
    text: "Interviews, stakeholder updates and pitches that land the first time.",
  },
  {
    icon: Mic,
    title: "Young Orator Program",
    text: "Stage confidence, debate and storytelling for school-age speakers.",
  },
  {
    icon: Sparkles,
    title: "Custom Communication Coaching",
    text: "A syllabus designed backwards from your event, viva or keynote.",
  },
];

function Home() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Public Speaking Institute
            </p>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Master Public Speaking Skills Today
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Voxa Coaching helps you transform nervous energy into presence. We work on how you
              think, structure and deliver, so your confidence holds up in the moments that matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink to="/courses">
                Explore Programs <ArrowRight className="ml-2 size-4" />
              </PillLink>
              <PillLink to="/contact" variant="outline">
                Talk to a Coach
              </PillLink>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                ["20+", "Years coaching"],
                ["1,800+", "Speakers trained"],
                ["4 cities", "Across India"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="text-2xl font-bold text-navy">{k}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <BlobImage
              src={heroImg}
              alt="Coach delivering a public speaking session to a small audience"
              width={1200}
              height={1200}
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* About summary */}
      <Section tone="mint">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <BlobImage
              src={aboutImg}
              alt="Group communication workshop in progress"
              shape="blob-b"
              width={1024}
              height={768}
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              About Voxa
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Founded in 2025, built on practice</h2>
            <p className="mt-5 text-muted-foreground">
              We started Voxa Coaching because most communication training stops at theory. Ours
              does not. Every session puts you on your feet, speaking, being recorded and getting
              specific feedback you can act on the same week.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Clarity: say the thing in one clean sentence",
                "Structure: a frame for every answer and talk",
                "Confidence: earned through repetition, not pep talks",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PillLink to="/about" variant="outline">
                More about us
              </PillLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="We offer the best services"
          subtitle="Three ways to work with us, and you can mix them as your schedule allows."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offerings.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <Card className="h-full">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-mint text-primary">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <PillLink to="/services" variant="outline">
            View all services
          </PillLink>
        </Reveal>
      </Section>

      {/* Courses preview */}
      <Section tone="mint">
        <SectionHeading
          eyebrow="Programs"
          title="Popular programs"
          subtitle="Structured tracks for students, professionals and anyone with a date on the calendar."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {previewCourses.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <Card className="h-full">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
                <Link
                  to="/courses"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-primary transition-colors duration-200 hover:text-navy"
                >
                  Learn More <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our speakers say"
          subtitle="Real results from people who arrived nervous and left prepared."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <Card className="h-full">
                <Quote className="size-6 text-primary/40" />
                <p className="mt-4 text-sm text-muted-foreground">{t.review}</p>
                <div className="mt-6">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section tone="mint">
        <Reveal>
          <div className="rounded-2xl border border-border/70 bg-card p-8 shadow-card sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl">One speaking tip a week</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Short, practical drills you can try before your next meeting. No spam, unsubscribe
                  any time.
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("You're subscribed. Watch your inbox on Monday.");
                  setEmail("");
                }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full rounded-full border border-input bg-background px-5 py-3 text-sm text-navy outline-none transition-colors duration-200 focus:border-primary"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-7 py-3 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-primary-soft hover:shadow-lift"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section tone="navy">
        <Reveal className="text-center">
          <h2 className="text-3xl text-navy-foreground sm:text-4xl">
            Unlock Your Voice. Own the Spotlight.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/70">
            Join the next cohort and get eight weeks of structured practice, feedback and real stage
            time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PillLink to="/contact">Enroll Now</PillLink>
            <PillLink to="/courses" variant="light">
              Browse Courses
            </PillLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
