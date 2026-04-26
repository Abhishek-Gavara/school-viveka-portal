import { createFileRoute } from "@tanstack/react-router";
import { Camera, ImageIcon } from "lucide-react";
import campusImg from "@/assets/campus.jpg";
import classroomImg from "@/assets/classroom.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vivekananda Model High School" },
      {
        name: "description",
        content:
          "A glimpse of life at Vivekananda Model High School — our campus, classrooms, playground, events and amenities.",
      },
      { property: "og:title", content: "Gallery — Vivekananda Model High School" },
      {
        property: "og:description",
        content: "Photos of our campus, classrooms, playground, and events.",
      },
      { property: "og:image", content: campusImg },
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
    heading: "Campus & Amenities",
    intro: "A safe, welcoming space designed to inspire learning every day.",
    items: [
      { title: "Main Building", caption: "Our school exterior and the Vivekananda statue.", src: campusImg, span: "md:col-span-2 md:row-span-2" },
      { title: "Classrooms", caption: "Bright, well-equipped classrooms.", src: classroomImg },
      { title: "Library", caption: "A reading space for curious minds." },
      { title: "Computer Lab", caption: "Hands-on digital learning." },
      { title: "Science Lab", caption: "Where curiosity becomes discovery." },
    ],
  },
  {
    heading: "Playground & Sports",
    intro: "Because growth happens beyond the classroom too.",
    items: [
      { title: "Playground", caption: "Open spaces for play and PE.", span: "md:col-span-2" },
      { title: "Sports Day", caption: "Annual athletics meet." },
      { title: "Indoor Games", caption: "Chess, carrom and more." },
    ],
  },
  {
    heading: "Events & Celebrations",
    intro: "Festivals, functions and the moments that make a school feel like home.",
    items: [
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
            From bright classrooms and busy playgrounds to colourful celebrations — here's a
            look at the moments that shape our school.
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
              {section.items.map((item) => (
                <figure
                  key={item.title}
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
            Share your school photos with us and we'll feature them here. Until then, the
            placeholders above will be replaced as new images arrive.
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
