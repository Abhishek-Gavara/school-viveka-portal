import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments — Vivekananda High School" },
      { name: "description", content: "Get in touch with VHS or book an appointment with the Principal." },
      { property: "og:title", content: "Contact — Vivekananda High School" },
      { property: "og:description", content: "Get in touch or book an appointment with the Principal." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255),
  date: z.string().min(1, "Please pick a date"),
  reason: z.string().trim().min(5, "Tell us briefly the reason").max(500),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Appointment request received!");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="bg-[var(--gradient-parchment)] py-20">
        <div className="container-page text-center">
          <span className="ornament">Get in Touch</span>
          <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">We'd love to hear from you</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Reach us with any question, or request a personal appointment with the Principal.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {[
              { icon: MapPin, title: "Visit Us", text: "Vivekananda Marg, Near City Park" },
              { icon: Phone, title: "Call Us", text: "+91 98765 43210" },
              { icon: Mail, title: "Email Us", text: "info@vmhs.edu.in" },
              { icon: Clock, title: "Office Hours", text: "Mon – Sat · 8:30 AM – 4:00 PM" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--gradient-saffron)] text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-warm)] md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 size={56} className="text-[var(--saffron-deep)]" />
                  <h3 className="mt-5 font-display text-2xl text-primary">Request received</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    The Principal's office will confirm your appointment shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm font-medium hover:bg-secondary"
                  >
                    Book another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display text-2xl text-primary">Appointment with the Principal</h2>
                  <Field label="Your Name" name="name" required />
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Phone" name="phone" type="tel" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Preferred Date" name="date" type="date" required min={today} />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Reason for appointment *</label>
                    <textarea
                      name="reason"
                      rows={4}
                      required
                      maxLength={500}
                      placeholder="Briefly tell us the reason for the meeting..."
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary/90 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Request Appointment"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, min }: { label: string; name: string; type?: string; required?: boolean; min?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label} {required && "*"}</label>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        maxLength={255}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
