import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl font-bold text-primary">404</h1>
          <h2 className="mt-4 font-display text-2xl font-semibold">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Return Home
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vivekananda High School — Arise, Awake, Achieve" },
      {
        name: "description",
        content:
          "Vivekananda High School — a place of holistic learning inspired by Swami Vivekananda. Quality education, dedicated faculty, and admissions open.",
      },
      { name: "author", content: "Vivekananda High School" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Vivekananda High School — Arise, Awake, Achieve" },
      { name: "twitter:title", content: "Vivekananda High School — Arise, Awake, Achieve" },
      { name: "description", content: "Vivekananda Connect is a school website for inquiries, appointments, and school information." },
      { property: "og:description", content: "Vivekananda Connect is a school website for inquiries, appointments, and school information." },
      { name: "twitter:description", content: "Vivekananda Connect is a school website for inquiries, appointments, and school information." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9ce35791-1819-41aa-8252-fbcb8fceaa73/id-preview-98290293--d537483e-8c69-46f6-a5e6-5ab079d45dc6.lovable.app-1777247190865.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9ce35791-1819-41aa-8252-fbcb8fceaa73/id-preview-98290293--d537483e-8c69-46f6-a5e6-5ab079d45dc6.lovable.app-1777247190865.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
