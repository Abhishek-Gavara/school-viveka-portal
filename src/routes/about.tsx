import { createFileRoute } from "@tanstack/react-router";
import campusImg from "@/assets/school/campus-aerial.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vivekananda Model High School" },
      { name: "description", content: "Our story, vision and the values that guide Vivekananda Model High School." },
      { property: "og:title", content: "About Vivekananda Model High School" },
      { property: "og:description", content: "Our story, vision and the values that guide our school." },
      { property: "og:image", content: campusImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Our Story" title="Rooted in values, growing with purpose" />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
        <img
          src={campusImg}
          alt="Vivekananda Model High School campus"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-warm)]"
          loading="lazy"
          width={1200}
          height={800}
        />
        <div>
          <h2 className="font-display text-3xl text-primary md:text-4xl">A school built on inspiration</h2>
          <p className="mt-5 leading-relaxed text-foreground/85">
            Vivekananda Model High School was founded with a simple but powerful belief — that
            true education shapes character as much as it sharpens the mind. The statue of
            Swami Vivekananda standing proudly at our gates is a daily reminder of the ideals
            that guide us: courage, clarity, compassion, and self-reliance.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Under the leadership of our principal, the school has grown into a warm, vibrant
            community of learners, families and educators dedicated to bringing out the best in
            every child.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            { title: "Vision", text: "To nurture confident, curious learners who contribute meaningfully to society." },
            { title: "Mission", text: "Deliver quality education that balances academics, character and creativity." },
            { title: "Values", text: "Truth, discipline, compassion, and the courage to stand for what is right." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <span className="ornament">VMHS</span>
              <h3 className="mt-3 font-display text-2xl text-primary">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function PageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="bg-[var(--gradient-parchment)] py-20">
      <div className="container-page text-center">
        <span className="ornament">{eyebrow}</span>
        <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
