import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — Vivekananda High School" },
      { name: "description", content: "Meet the dedicated educators who guide and inspire our students every day." },
      { property: "og:title", content: "Faculty — Vivekananda High School" },
      { property: "og:description", content: "Meet our dedicated teachers and educators." },
    ],
  }),
  component: FacultyPage,
});

const faculty = [
  { name: "Gavara Parinaidu", role: "Principal" },
  { name: "P.D Prasad", role: "Correspondent" },
  { name: "Balivada Ravikumar", role: "Telugu" },
  { name: "Kondala Bhaskara Rao", role: "Telugu" },
  { name: "Kandula Ramakrishna Naidu", role: "Hindi" },
  { name: "Kondadadi Ramakrishna", role: "English" },
  { name: "Putta Guru Lakshmipathi", role: "English" },
  { name: "Subuddhi Sundara Rao", role: "Maths" },
  { name: "Balaga Sankara Rao", role: "Maths" },
  { name: "Yenugula Dileep Kumar", role: "Physics" },
  { name: "Nallabati Chaitanya Kumar", role: "Physics" },
  { name: "Bankuru Sankara Rao", role: "Biology" },
  { name: "Kapiri Harikrishna", role: "Social" },
  { name: "Laveti Govinda Rao", role: "Social" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function FacultyPage() {
  return (
    <>
      <section className="bg-[var(--gradient-parchment)] py-20">
        <div className="container-page text-center">
          <span className="ornament">Our Educators</span>
          <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">Mentors who care</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Our teachers bring experience, warmth and dedication into every classroom — guiding students
            not just academically, but as individuals.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f) => (
            <div key={f.name} className="group rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-saffron font-display text-2xl font-bold text-primary shadow-[var(--shadow-soft)] transition-transform group-hover:scale-105">
                {getInitials(f.name)}
              </div>
              <h3 className="mt-5 font-display text-lg text-primary">{f.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
