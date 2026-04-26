import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Vivekananda Model High School" },
      { name: "description", content: "Submit an admission inquiry. Our team will guide you through the next steps within 24 hours." },
      { property: "og:title", content: "Admissions — Vivekananda Model High School" },
      { property: "og:description", content: "Submit an admission inquiry today." },
    ],
  }),
  component: AdmissionsPage,
});

const schema = z.object({
  parentName: z.string().trim().min(2, "Please enter parent's name").max(100),
  studentName: z.string().trim().min(2, "Please enter student's name").max(100),
  grade: z.string().min(1, "Please select a grade"),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const steps = [
  { title: "Submit Inquiry", text: "Fill the form with student details and your contact information." },
  { title: "School Visit", text: "Our team will invite you for a campus visit and a friendly conversation." },
  { title: "Assessment", text: "A simple, age-appropriate interaction with the student." },
  { title: "Confirmation", text: "Confirm admission and complete the formalities. Welcome to VMHS!" },
];

function AdmissionsPage() {
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
      toast.success("Inquiry received! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <>
      <section className="bg-[var(--gradient-parchment)] py-20">
        <div className="container-page text-center">
          <span className="ornament">Admissions Open</span>
          <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">Begin the journey</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            We'd love to welcome your child into the VMHS family. Share a few details and our
            admissions team will reach out shortly.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl text-primary">How admissions work</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--gradient-saffron)] font-display font-bold text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-primary">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-warm)] md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 size={56} className="text-[var(--saffron-deep)]" />
                  <h3 className="mt-5 font-display text-2xl text-primary">Thank you!</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Your inquiry has been received. Our admissions team will reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm font-medium hover:bg-secondary"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display text-2xl text-primary">Admission Inquiry</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Parent / Guardian Name" name="parentName" required />
                    <Field label="Student Name" name="studentName" required />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Grade applying for *</label>
                      <select
                        name="grade"
                        required
                        defaultValue=""
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                      >
                        <option value="" disabled>Select grade</option>
                        {Array.from({ length: 10 }, (_, i) => (
                          <option key={i + 1} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                        ))}
                      </select>
                    </div>
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>
                  <Field label="Email" name="email" type="email" required />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Message (optional)</label>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={1000}
                      placeholder="Anything you'd like us to know..."
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary/90 disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit Inquiry"}
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

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label} {required && "*"}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
