import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Award, Star, TrendingUp, Sparkles } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "SSC Board Results — Vivekananda High School, Palakonda" },
      {
        name: "description",
        content:
          "SSC board examination achievers at Vivekananda High School, Palakonda — celebrating our toppers from 2025, 2024, 2022 and 2019.",
      },
      { property: "og:title", content: "SSC Board Results — Vivekananda High School" },
      {
        property: "og:description",
        content: "Year-after-year achievers — our SSC board exam toppers from Palakonda.",
      },
    ],
  }),
  component: ResultsPage,
});

type Topper = { rank: number; name: string; marks: string };
type YearResult = {
  year: string;
  exam: string;
  outOf?: number;
  highlight?: string;
  topToppers: Topper[];
  moreToppers?: Topper[];
  stats?: { label: string; value: string }[];
  notes?: string[];
};

const results2025: YearResult = {
  year: "2025",
  exam: "SSC 2025",
  outOf: 600,
  highlight: "Our latest batch — 8 students above 575/600",
  topToppers: [
    { rank: 1, name: "K. Akshaya", marks: "589" },
    { rank: 2, name: "A. Nikhita", marks: "588" },
    { rank: 3, name: "D. Dileep Kumar", marks: "579" },
  ],
  moreToppers: [
    { rank: 4, name: "P. Ramcharan", marks: "578" },
    { rank: 5, name: "P. Krishnasri", marks: "577" },
    { rank: 6, name: "B. Vamsi Sai", marks: "576" },
    { rank: 7, name: "B. Tejasri", marks: "575" },
    { rank: 7, name: "S. Srivalli", marks: "575" },
  ],
};

const results2024: YearResult = {
  year: "2024",
  exam: "SSC 2024",
  outOf: 600,
  highlight: "Lukalapu Dinesh leads the batch with 585/600",
  topToppers: [
    { rank: 1, name: "Lukalapu Dinesh", marks: "585" },
    { rank: 2, name: "Chandrashekaruni Suma", marks: "583" },
    { rank: 3, name: "Sanapathi Ganesh", marks: "580" },
  ],
  moreToppers: [
    { rank: 4, name: "Alajangi Chinvitha Mercy", marks: "577" },
    { rank: 4, name: "Kondala Ujjwalatara", marks: "577" },
    { rank: 6, name: "Varanasi Divyasri", marks: "575" },
    { rank: 6, name: "Rejeti Lakshmi Prasanna", marks: "575" },
  ],
};

const results2022: YearResult = {
  year: "2022",
  exam: "SSC 2022",
  outOf: 600,
  highlight: "Bothsa Rakshitha — 100/100 in English ✨",
  topToppers: [
    { rank: 1, name: "CH. Lalithasri", marks: "584" },
    { rank: 2, name: "CH. Girish", marks: "574" },
    { rank: 3, name: "B. Rakshitha", marks: "573" },
  ],
  moreToppers: [
    { rank: 4, name: "K. Amrutha", marks: "571" },
    { rank: 5, name: "P. Srinidhi", marks: "568" },
    { rank: 6, name: "G. Hemanjali", marks: "567" },
    { rank: 6, name: "L. Ramcharan", marks: "567" },
    { rank: 8, name: "M. Venkatasai", marks: "566" },
    { rank: 9, name: "M. Sivaganesh", marks: "565" },
    { rank: 10, name: "D. Deepika Rani", marks: "564" },
    { rank: 11, name: "R. Kiran Kumar", marks: "562" },
    { rank: 12, name: "CH.S.S. Aditya", marks: "560" },
  ],
  stats: [
    { label: "Above 500", value: "49 students" },
    { label: "Above 550", value: "19 students" },
    { label: "English / Maths / Science", value: "100/100" },
  ],
  notes: [
    "Subject-wise highest marks: Telugu 99, Hindi 98, English 100, Maths 100, Science 100, Social 96.",
  ],
};

const results2019: YearResult = {
  year: "2019",
  exam: "SSC 2019 — Town 1st",
  highlight: "11 students secured 10/10 GPA — perfect score",
  topToppers: [
    { rank: 1, name: "B. Devi Saranya", marks: "10/10 GPA" },
    { rank: 1, name: "M. Chaitanya Sai", marks: "10/10 GPA" },
    { rank: 1, name: "D. Uma Maheshwari", marks: "10/10 GPA" },
  ],
  moreToppers: [
    { rank: 1, name: "A. Yamuna", marks: "10/10 GPA" },
    { rank: 1, name: "N. Aditya Goutham", marks: "10/10 GPA" },
    { rank: 1, name: "Kiran Mandal", marks: "10/10 GPA" },
    { rank: 1, name: "V. Suryacharan", marks: "10/10 GPA" },
    { rank: 1, name: "P. Pradeep", marks: "10/10 GPA" },
    { rank: 1, name: "B. Pradeep", marks: "10/10 GPA" },
    { rank: 1, name: "K. Goutham", marks: "10/10 GPA" },
    { rank: 1, name: "CH. Sivakumar", marks: "10/10 GPA" },
  ],
  stats: [
    { label: "Perfect 10 GPA", value: "11 students" },
    { label: "Above 9 GPA (out of 99)", value: "71 students" },
    { label: "Result", value: "100% pass" },
  ],
  notes: ["Town 1st position in SSC 2019."],
};

const allYears: YearResult[] = [results2025, results2024, results2022, results2019];

function ResultsPage() {
  const featured = results2025;

  return (
    <>
      {/* HEADER */}
      <section className="bg-[var(--gradient-parchment)] py-20">
        <div className="container-page text-center">
          <span className="ornament">SSC Board Examinations</span>
          <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">
            Our Achievers, Year After Year
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            A celebration of the dedication of our students and teachers — real names, real
            marks, from Vivekananda High School, Palakonda.
          </p>
        </div>
      </section>

      {/* FEATURED YEAR */}
      <section className="container-page py-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-warm)]">
          <div className="bg-saffron px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            ★ Latest Results — {featured.exam} ★
          </div>

          <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-3 lg:p-14">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 text-[var(--saffron-deep)]">
                <Trophy size={28} />
                <span className="font-display text-2xl text-primary">School Topper</span>
              </div>
              <div className="mt-6 rounded-2xl bg-[var(--gradient-parchment)] p-7">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Class X — {featured.year}
                </div>
                <div className="mt-2 font-display text-3xl text-primary">
                  {featured.topToppers[0].name}
                </div>
                <div className="mt-3 font-display text-5xl font-semibold text-[var(--saffron-deep)]">
                  {featured.topToppers[0].marks}
                  {featured.outOf ? (
                    <span className="text-2xl text-muted-foreground">/{featured.outOf}</span>
                  ) : null}
                </div>
              </div>

              {featured.highlight ? (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <Sparkles size={18} className="mt-0.5 shrink-0 text-[var(--saffron-deep)]" />
                  <p className="text-sm text-muted-foreground">{featured.highlight}</p>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <Star size={22} className="text-[var(--saffron-deep)]" />
                <h3 className="font-display text-2xl text-primary">
                  Top Achievers — {featured.year}
                </h3>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left">
                  <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-5 py-3">Rank</th>
                      <th className="px-5 py-3">Student</th>
                      <th className="px-5 py-3 text-right">
                        Marks{featured.outOf ? ` / ${featured.outOf}` : ""}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[...featured.topToppers, ...(featured.moreToppers ?? [])].map((t, i) => (
                      <tr key={`${t.name}-${i}`} className="bg-card">
                        <td className="px-5 py-4">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-saffron font-display text-sm font-semibold text-primary">
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

      {/* PREVIOUS YEARS — full lists */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <div className="flex items-center gap-3">
            <TrendingUp size={22} className="text-[var(--saffron-deep)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Year-wise Achievers
            </span>
          </div>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
            A track record we're proud of
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Names and marks of our SSC board exam achievers across the years.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {allYears
              .filter((y) => y.year !== featured.year)
              .map((y) => (
                <YearCard key={y.year} year={y} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

function YearCard({ year }: { year: YearResult }) {
  const all = [...year.topToppers, ...(year.moreToppers ?? [])];
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between bg-[var(--gradient-parchment)] px-6 py-4">
        <div className="flex items-center gap-3">
          <Award size={22} className="text-[var(--saffron-deep)]" />
          <div>
            <div className="font-display text-2xl text-primary">{year.exam}</div>
            {year.highlight ? (
              <div className="text-xs text-muted-foreground">{year.highlight}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="p-6">
        {year.stats && year.stats.length > 0 ? (
          <div className="mb-5 grid gap-3 sm:grid-cols-3">
            {year.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-secondary/40 p-3 text-center"
              >
                <div className="font-display text-base text-primary">{s.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/60 text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-2.5">Rank</th>
                <th className="px-4 py-2.5">Student</th>
                <th className="px-4 py-2.5 text-right">
                  {year.outOf ? `Marks / ${year.outOf}` : "Result"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {all.map((t, i) => {
                const isTop = i < 3 && year.topToppers.includes(t);
                return (
                  <tr key={`${t.name}-${i}`} className={isTop ? "bg-saffron/20" : "bg-card"}>
                    <td className="px-4 py-2.5">
                      <span
                        className={`inline-flex h-7 w-7 items-center justify-center rounded-full font-display text-xs font-semibold ${
                          isTop
                            ? "bg-saffron text-primary"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {t.rank}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 font-medium text-primary">{t.name}</td>
                    <td className="px-4 py-2.5 text-right font-display text-[var(--saffron-deep)]">
                      {t.marks}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {year.notes?.map((n) => (
          <p key={n} className="mt-4 text-xs italic text-muted-foreground">
            {n}
          </p>
        ))}
      </div>
    </div>
  );
}
