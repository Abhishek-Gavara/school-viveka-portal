import { createFileRoute } from "@tanstack/react-router";
import { Camera, ImageIcon } from "lucide-react";
import campusAerialImg from "@/assets/school/campus-aerial.jpg";
import morningAssemblyImg from "@/assets/school/morning-assembly.jpg";
import culturalFunctionImg from "@/assets/school/cultural-function.jpg";
import assemblyLineupImg from "@/assets/school/assembly-lineup.jpg";
import studentsCourtyardImg from "@/assets/school/students-courtyard.jpg";

// Newly added photos
import playgroundCourtyardImg from "@/assets/school/playground-courtyard.jpg";
import courtyardGatheringImg from "@/assets/school/courtyard-gathering.jpg";
import massPtDrillImg from "@/assets/school/mass-pt-drill.jpg";
import republicDayPyramidImg from "@/assets/school/republic-day-pyramid.jpg";
import republicDayPyramid2Img from "@/assets/school/republic-day-pyramid-2.jpg";
import republicDayFireImg from "@/assets/school/republic-day-fire.jpg";
import polePyramidImg from "@/assets/school/pole-pyramid.jpg";
import omFormationBestImg from "@/assets/school/om-formation-best.jpg";
import omFormationAerialImg from "@/assets/school/om-formation-aerial.jpg";
import omFormation2Img from "@/assets/school/om-formation-2.jpg";
import humanFormationLettersImg from "@/assets/school/human-formation-letters.jpg";
import krishnashtamiCostumesImg from "@/assets/school/krishnashtami-costumes.jpg";
import annualDayAssemblyImg from "@/assets/school/annual-day-assembly.jpg";
import independenceDayFlagsImg from "@/assets/school/independence-day-flags.jpg";
import sankrantiBannerImg from "@/assets/school/sankranti-banner.jpg";
import sankrantiGirlsImg from "@/assets/school/sankranti-girls.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vivekananda High School" },
      {
        name: "description",
        content:
          "A glimpse of life at Vivekananda High School, Palakonda — our campus, morning assembly, mass PT, cultural functions and Republic Day celebrations.",
      },
      { property: "og:title", content: "Gallery — Vivekananda High School" },
      {
        property: "og:description",
        content:
          "Photos of our campus, morning assembly, students, Republic Day pyramids, Sankranti and Krishnashtami celebrations.",
      },
      { property: "og:image", content: omFormationBestImg },
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
        title: "The Main Courtyard",
        caption: "Three floors of classrooms looking down on our central ground.",
        src: playgroundCourtyardImg,
        span: "md:col-span-4 md:row-span-2",
      },
      {
        title: "Aerial View",
        caption: "The full school grounds during morning assembly.",
        src: campusAerialImg,
        span: "md:col-span-2",
      },
      {
        title: "Courtyard & Gardens",
        caption: "Tall trees and open space at the heart of the school.",
        src: studentsCourtyardImg,
        span: "md:col-span-2",
      },
    ],
  },
  {
    heading: "School Life",
    intro:
      "Discipline, prayer and togetherness — moments from morning assembly, mass PT and everyday life on campus.",
    items: [
      {
        title: "Mass PT Drill",
        caption: "Hundreds of students moving as one during morning physical training.",
        src: massPtDrillImg,
        span: "md:col-span-2 md:row-span-2",
      },
      {
        title: "Morning Assembly",
        caption: "Students gather class-wise every morning before the day begins.",
        src: assemblyLineupImg,
        span: "md:col-span-2",
      },
      {
        title: "Annual Day Gathering",
        caption: "The whole school together in the courtyard for our annual celebration.",
        src: annualDayAssemblyImg,
        span: "md:col-span-2",
      },
      {
        title: "Open-Air Class",
        caption: "Senior students and teachers in a circle under the sky.",
        src: courtyardGatheringImg,
        span: "md:col-span-2",
      },
      {
        title: "Pledge & Prayer",
        caption: "A daily ritual of values and discipline.",
        src: morningAssemblyImg,
        span: "md:col-span-2",
      },
    ],
  },
  {
    heading: "Republic Day & Independence Day",
    intro:
      "Pyramids, flags and fearless performances — our students bring the spirit of the nation alive every January 26 and August 15.",
    items: [
      {
        title: "Tricolour Pyramid",
        caption: "A human pyramid crowned by the Indian flag — Republic Day.",
        src: republicDayPyramidImg,
        span: "md:col-span-2 md:row-span-2",
      },
      {
        title: "Pole Mallakhamb",
        caption: "Traditional pole gymnastics in front of the whole school.",
        src: polePyramidImg,
        span: "md:col-span-2",
      },
      {
        title: "Fire & Flag",
        caption: "A daring formation with fire and the tricolour.",
        src: republicDayFireImg,
        span: "md:col-span-2",
      },
      {
        title: "Independence Day Display",
        caption: "Acrobatics and flags for August 15.",
        src: independenceDayFlagsImg,
        span: "md:col-span-2",
      },
      {
        title: "Acrobatic Pyramid",
        caption: "Strength, balance and patriotism, all in one frame.",
        src: republicDayPyramid2Img,
        span: "md:col-span-2",
      },
    ],
  },
  {
    heading: "Cultural & Festivals",
    intro:
      "From Sankranti rangolis to Krishnashtami costumes, festivals at VHS are a celebration of our roots.",
    items: [
      {
        title: "Sankranti Sambaralu",
        caption: "Our Sankranti banner welcoming students at the school gate.",
        src: sankrantiBannerImg,
        span: "md:col-span-2",
      },
      {
        title: "Sankranti — Senior Girls",
        caption: "Students in traditional sarees with marigold garlands.",
        src: sankrantiGirlsImg,
        span: "md:col-span-2",
      },
      {
        title: "Krishnashtami",
        caption: "Younger students dressed as Krishna, Radha and gopikas.",
        src: krishnashtamiCostumesImg,
        span: "md:col-span-2",
      },
      {
        title: "School Function",
        caption: "Students in traditional attire during a school celebration.",
        src: culturalFunctionImg,
        span: "md:col-span-2",
      },
    ],
  },
  {
    heading: "Yoga Day & Formations",
    intro:
      "Hundreds of students, one symbol — our students arrange themselves into the sacred Om and other formations on Yoga Day and special events.",
    items: [
      {
        title: "Om Formation",
        caption: "Students forming a giant Om — the symbol of universal harmony.",
        src: omFormationBestImg,
        span: "md:col-span-2 md:row-span-2",
      },
      {
        title: "Aerial Om",
        caption: "Captured from above — discipline and devotion in one frame.",
        src: omFormationAerialImg,
        span: "md:col-span-2",
      },
      {
        title: "Om — Wider View",
        caption: "Another angle of the Yoga Day formation.",
        src: omFormation2Img,
        span: "md:col-span-2",
      },
      {
        title: "Human Letter Formation",
        caption: "Students spelling out a message in Devanagari script.",
        src: humanFormationLettersImg,
        span: "md:col-span-4",
      },
    ],
  },
  {
    heading: "Coming Soon",
    intro:
      "More photos from classrooms, science labs, sports day and Vivekananda Jayanti will be added here as we receive them.",
    items: [
      { title: "Classrooms", caption: "Bright, well-equipped classrooms." },
      { title: "Science Lab", caption: "Where curiosity becomes discovery." },
      { title: "Computer Lab", caption: "Hands-on digital learning." },
      { title: "Sports Day", caption: "Annual athletics meet." },
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
            A glimpse of life at VHS
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            From our spacious courtyard and busy morning assembly to Republic Day pyramids,
            Sankranti and Yoga Day formations — here's a look at the moments that shape our school.
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
            Share more school photos with us — classrooms, science labs, sports day — and we'll
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
