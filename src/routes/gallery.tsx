import { createFileRoute } from "@tanstack/react-router";
import { Camera, ImageIcon } from "lucide-react";
import campusAerialImg from "@/assets/school/campus-aerial.jpg";
import morningAssemblyImg from "@/assets/school/morning-assembly.jpg";
import culturalFunctionImg from "@/assets/school/cultural-function.jpg";
import assemblyLineupImg from "@/assets/school/assembly-lineup.jpg";
import studentsCourtyardImg from "@/assets/school/students-courtyard.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vivekananda Model High School" },
      {
        name: "description",
        content:
          "A glimpse of life at Vivekananda Model High School — our campus, morning assembly, students and school events.",
      },
      { property: "og:title", content: "Gallery — Vivekananda Model High School" },
      {
        property: "og:description",
        content: "Photos of our campus, morning assembly, students and school events.",
      },
      { property: "og:image", content: campusAerialImg },
    ],
  }),
  component: GalleryPage,
});

type GalleryItem = {
  title: string;
  caption: string;
  src?: string;
  span?: string;
};

const sections: { heading: string; intro: string; items: GalleryItem[] }[] = [
  {
    heading: "Our Campus",
    intro:
      "A spacious U-shaped building wrapped around a large central courtyard — where every morning begins together.",
    items: [
      {
        title: "Aerial View of the Campus",
        caption: "The full school courtyard during morning assembly.",
        src: campusAerialImg,
        span: "md:col-span-4 md:row-span-2",
      },
      {
        title: "Main Building",
        caption: "Three floors of classrooms surrounding the courtyard.",
        src: studentsCourtyardImg,
        span: "md:col-span-2",
      },
      {
        title: "Courtyard & Gardens",
        caption: "Tall trees and open space at the heart of the school.",
        src: morningAssemblyImg,
        span: "md:col-span-2",
      },
    ],
  },
  {
    heading: "School Life",
    intro:
      "Discipline, prayer and togetherness — moments from morning assembly and school functions.",
    items: [
      {
        title: "Morning Assembly",
        caption: "Students gather class-wise every morning before the day begins.",
        src: assemblyLineupImg,
        span: "md:col-span-2",
      },
      {
        title: "School Function",
        caption: "Students in traditional attire during a school celebration.",
        src: culturalFunctionImg,
        span: "md:col-span-2",
      },
      {
        title: "Class Lineup",
        caption: "Boys' section standing in formation during prayer.",
        src: studentsCourtyardImg,
      },
      {
        title: "Pledge & Prayer",
        caption: "A daily ritual of values and discipline.",
        src: morningAssemblyImg,
      },
    ],
  },
  {
    heading: "Coming Soon",
    intro:
      "More photos from classrooms, science labs, sports day and annual functions will be added here as we receive them.",
    items: [
      { title: "Classrooms", caption: "Bright, well-equipped classrooms." },
      { title: "Science Lab", caption: "Where curiosity becomes discovery." },
      { title: "Computer Lab", caption: "Hands-on digital learning." },
      { title: "Sports Day", caption: "Annual athletics meet." },
      { title: "Annual Day", caption: "Our flagship cultural celebration." },
      { title: "Independence Day", caption: "A morning of pride and patriotism." },
      { title: "Science Exhibition", caption: "Student projects on display." },
      { title: "Vivekananda Jayanti", caption: "Honouring our guiding spirit." },
    ],
  },
];

function GalleryPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[var(--gradient-parchment)] py-20">
        <div className="container-page text-center">
          <span className="ornament">School Gallery</span>
          <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">
            A glimpse of life at VMHS
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            From our spacious courtyard and busy morning assembly to colourful school functions —
            here's a look at the moments that shape our school.
          </p>
        </div>
      </section>

      {sections.map((section, idx) => (
        <section
          key={section.heading}
          className={idx % 2 === 1 ? "bg-secondary/40 py-20" : "py-20"}
        >
          <div className="container-page">
            <div className="max-w-2xl">
              <span className="ornament">{`0${idx + 1}`}</span>
              <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
                {section.heading}
              </h2>
              <p className="mt-3 text-muted-foreground">{section.intro}</p>
            </div>

            <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
              {section.items.map((item, i) => (
                <figure
                  key={`${item.title}-${i}`}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] ${item.span ?? ""}`}
                >
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <Placeholder title={item.title} />
                  )}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent p-4 text-primary-foreground">
                    <div className="font-display text-base">{item.title}</div>
                    <div className="text-xs text-primary-foreground/80">{item.caption}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="container-page py-16">
        <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center">
          <Camera size={28} className="mx-auto text-[var(--saffron-deep)]" />
          <h3 className="mt-4 font-display text-2xl text-primary">More photos coming soon</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Share more school photos with us — events, sports day, classrooms, labs — and we'll
            feature them here as they arrive.
          </p>
        </div>
      </section>
    </>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[var(--gradient-parchment)] text-muted-foreground">
      <ImageIcon size={28} className="opacity-60" />
      <div className="text-xs uppercase tracking-wider">Photo coming soon</div>
      <div className="font-display text-sm text-primary/70">{title}</div>
    </div>
  );
}
