import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-statue.jpg";
import classroomImg from "@/assets/classroom.jpg";
import { BookOpen, Users, Sparkles, Award, ArrowRight, Trophy } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vivekananda Model High School — Arise, Awake, Achieve" },
      {
        name: "description",
        content:
          "Welcome to Vivekananda Model High School. Holistic education rooted in values, inspired by Swami Vivekananda. Discover our campus and apply today.",
      },
      { property: "og:title", content: "Vivekananda Model High School" },
      { property: "og:description", content: "Holistic education rooted in values, inspired by Swami Vivekananda." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { icon: BookOpen, title: "Strong Academics", text: "Curriculum that builds depth, curiosity and clarity of thought." },
  { icon: Users, title: "Dedicated Faculty", text: "Mentors who care about every child's growth, not just grades." },
  { icon: Sparkles, title: "Values & Character", text: "Daily inspiration from the life and teachings of Swami Vivekananda." },
  { icon: Award, title: "Holistic Growth", text: "Sports, arts, science clubs and community service for well-rounded learners." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Statue of Swami Vivekananda in front of Vivekananda Model High School"
            className="h-full w-full object-cover"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        </div>

        <div className="container-page relative flex min-h-[88vh] flex-col justify-center py-24 text-primary-foreground">
          <span className="ornament" style={{ color: "var(--saffron)" }}>
            Est. with a Vision
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
            Vivekananda <span className="italic text-[var(--saffron)]">Model</span> High School
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
            A place where young minds awaken to knowledge, character and purpose — guided by
            the timeless wisdom of Swami Vivekananda.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/admissions"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-saffron)] px-7 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-warm)] transition-transform hover:scale-[1.03]"
            >
              Admission Inquiry
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              Discover Our School
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* QUOTE STRIP */}
      <section className="border-y border-border bg-[var(--gradient-parchment)] py-12">
        <div className="container-page text-center">
          <p className="font-display text-2xl italic text-primary md:text-3xl">
            "Education is the manifestation of the perfection already in man."
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            — Swami Vivekananda
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container-page py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="ornament">What we stand for</span>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
            A school that shapes more than students
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-saffron)] text-primary">
                <h.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl text-primary">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS HIGHLIGHT */}
      <section className="bg-secondary/40 py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="ornament">Class X Board Results</span>
            <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
              A legacy of excellence, year after year
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">
              Our students continue to make us proud in the State Board examinations. Explore
              this year's achievers and a record of past results that reflect our consistent
              academic strength.
            </p>
            <Link
              to="/results"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Board Results <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { stat: "98%", label: "Pass rate (2025)" },
              { stat: "27", label: "Distinctions" },
              { stat: "9", label: "State rankers" },
              { stat: "15+", label: "Years of results" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
              >
                <div className="flex justify-center text-[var(--saffron-deep)]">
                  <Trophy size={22} />
                </div>
                <div className="mt-3 font-display text-4xl text-primary">{s.stat}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="container-page py-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-5">
            <div className="relative lg:col-span-2">
              <img
                src={classroomImg}
                alt="Students learning in classroom"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={900}
              />
            </div>
            <div className="p-10 lg:col-span-3 lg:p-14">
              <span className="ornament">Admissions Open</span>
              <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
                Begin your child's journey with us
              </h2>
              <p className="mt-4 text-muted-foreground">
                Submit an inquiry and our admissions team will reach out within 24 hours to guide
                you through the next steps.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
                <Link
                  to="/academics"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary"
                >
                  View Academics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
