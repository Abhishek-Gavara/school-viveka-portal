import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Award, Star, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Board Results — Vivekananda Model High School" },
      {
        name: "description",
        content:
          "Class X board examination results at Vivekananda Model High School — current year toppers and a record of past years' achievements.",
      },
      { property: "og:title", content: "Board Results — Vivekananda Model High School" },
      {
        property: "og:description",
        content: "Celebrating our Class X achievers across the years.",
      },
    ],
  }),
  component: ResultsPage,
});

const currentYear = {
  year: "2025",
  passPercentage: 98,
  distinctions: 27,
  appeared: 84,
  topper: { name: "Aarav Sharma", marks: "98.6%" },
  toppers: [
    { rank: 1, name: "Aarav Sharma", marks: "98.6%" },
    { rank: 2, name: "Priya Reddy", marks: "97.8%" },
    { rank: 3, name: "Rohan Iyer", marks: "97.2%" },
    { rank: 4, name: "Ananya Verma", marks: "96.5%" },
    { rank: 5, name: "Karthik Menon", marks: "96.1%" },
  ],
};

const previousYears = [
  { year: "2024", passPercentage: 97, distinctions: 24, topperName: "Ishaan Gupta", topperMarks: "97.4%" },
  { year: "2023", passPercentage: 96, distinctions: 22, topperName: "Meera Nair", topperMarks: "96.8%" },
  { year: "2022", passPercentage: 95, distinctions: 19, topperName: "Vikram Rao", topperMarks: "96.2%" },
  { year: "2021", passPercentage: 98, distinctions: 21, topperName: "Sneha Patel", topperMarks: "97.0%" },
  { year: "2020", passPercentage: 94, distinctions: 18, topperName: "Arjun Singh", topperMarks: "95.6%" },
];

function ResultsPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[var(--gradient-parchment)] py-20">
        <div className="container-page text-center">
          <span className="ornament">Class X Board Examinations</span>
          <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">
            Our Results, Year After Year
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            A celebration of our students' hard work and the dedication of our teachers — a
            record of consistent achievement we are proud to share with our community.
          </p>
        </div>
      </section>

      {/* CURRENT YEAR HIGHLIGHT */}
      <section className="container-page py-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-warm)]">
          <div className="bg-[var(--gradient-saffron)] px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            ★ This Year's Results — {currentYear.year} ★
          </div>

          <div className="grid gap-10 p-10 lg:grid-cols-3 lg:p-14">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 text-[var(--saffron-deep)]">
                <Trophy size={28} />
                <span className="font-display text-2xl text-primary">School Topper</span>
              </div>
              <div className="mt-6 rounded-2xl bg-[var(--gradient-parchment)] p-7">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Class X — {currentYear.year}
                </div>
                <div className="mt-2 font-display text-3xl text-primary">
                  {currentYear.topper.name}
                </div>
                <div className="mt-3 font-display text-5xl font-semibold text-[var(--saffron-deep)]">
                  {currentYear.topper.marks}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <Stat label="Pass %" value={`${currentYear.passPercentage}%`} />
                <Stat label="Distinctions" value={currentYear.distinctions} />
                <Stat label="Appeared" value={currentYear.appeared} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <Star size={22} className="text-[var(--saffron-deep)]" />
                <h3 className="font-display text-2xl text-primary">Top 5 Achievers</h3>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left">
                  <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-5 py-3">Rank</th>
                      <th className="px-5 py-3">Student</th>
                      <th className="px-5 py-3 text-right">Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {currentYear.toppers.map((t) => (
                      <tr key={t.rank} className="bg-card">
                        <td className="px-5 py-4">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gradient-saffron)] font-display text-sm font-semibold text-primary">
                            {t.rank}
                          </span>
                        </td>
                        <td className="px-5 py-4 font-medium text-primary">{t.name}</td>
                        <td className="px-5 py-4 text-right font-display text-lg text-[var(--saffron-deep)]">
                          {t.marks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIOUS YEARS */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <div className="flex items-center gap-3">
            <TrendingUp size={22} className="text-[var(--saffron-deep)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Previous Years
            </span>
          </div>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
            A track record we're proud of
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {previousYears.map((y) => (
              <div
                key={y.year}
                className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-primary">{y.year}</span>
                  <Award size={22} className="text-[var(--saffron-deep)]" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[var(--gradient-parchment)] p-3 text-center">
                    <div className="font-display text-2xl text-primary">{y.passPercentage}%</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Pass
                    </div>
                  </div>
                  <div className="rounded-xl bg-[var(--gradient-parchment)] p-3 text-center">
                    <div className="font-display text-2xl text-primary">{y.distinctions}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Distinctions
                    </div>
                  </div>
                </div>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Topper
                  </div>
                  <div className="mt-1 font-medium text-primary">{y.topperName}</div>
                  <div className="text-sm text-[var(--saffron-deep)]">{y.topperMarks}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm italic text-muted-foreground">
            * Sample data shown — actual results will be updated each year by the school office.
          </p>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="font-display text-xl text-primary">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
