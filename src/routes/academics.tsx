import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Calculator, Globe2, Palette, Music, Trophy } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Vivekananda High School" },
      { name: "description", content: "Our curriculum, programs and facilities — designed to spark learning and creativity." },
      { property: "og:title", content: "Academics — Vivekananda High School" },
      { property: "og:description", content: "Curriculum, programs and facilities at VHS." },
    ],
  }),
  component: AcademicsPage,
});

const programs = [
  { icon: Calculator, title: "Primary School", grades: "Grades 1 – 5", text: "Foundational learning with phonics, numeracy and creative play." },
  { icon: FlaskConical, title: "Middle School", grades: "Grades 6 – 8", text: "Concept-driven learning with science labs, language and social studies." },
  { icon: Globe2, title: "High School", grades: "Grades 9 – 10", text: "Rigorous academics preparing students for board exams and beyond." },
];

const facilities = [
  { icon: FlaskConical, title: "Science & Computer Labs" },
  { icon: Palette, title: "Art & Craft Studio" },
  { icon: Music, title: "Music Room" },
  { icon: Trophy, title: "Sports Ground" },
  { icon: Globe2, title: "Library" },
  { icon: Calculator, title: "Smart Classrooms" },
];

function AcademicsPage() {
  return (
    <>
      <section className="bg-[var(--gradient-parchment)] py-20">
        <div className="container-page text-center">
          <span className="ornament">Academics</span>
          <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">Learning that lasts a lifetime</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A balanced curriculum that strengthens fundamentals while encouraging curiosity, creativity
            and confidence in every student.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron text-primary">
                <p.icon size={22} />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--saffron-deep)]">{p.grades}</p>
              <h3 className="mt-2 font-display text-2xl text-primary">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="ornament">Campus & Facilities</span>
            <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">Spaces that inspire</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div key={f.title} className="flex items-center gap-4 rounded-xl border border-border bg-card px-6 py-5 shadow-[var(--shadow-card)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <f.icon size={20} />
                </div>
                <span className="font-medium">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
