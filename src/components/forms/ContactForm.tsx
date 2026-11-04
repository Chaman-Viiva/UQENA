"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

type Status = "idle" | "error" | "success";

const services = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "AI & Machine Learning",
  "UI/UX Design",
  "Cloud & DevOps",
  "Backend & API Development",
  "Automation",
  "Digital Transformation",
  "Not sure yet",
];

const budgets = [
  "Under $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k+",
  "Prefer to discuss",
];

const fieldClass =
  "focus-ring field-uq w-full rounded-[var(--radius)] border border-[var(--line)] bg-white px-4 py-3.5 text-base text-ink placeholder:text-slate/60";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const next: Record<string, string> = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const description = String(form.get("description") || "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!description || description.length < 20)
      next.description = "Please share at least a short project description (20+ characters).";

    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    const payload = {
      name: String(form.get("name")),
      email: String(form.get("email")),
      company: String(form.get("company") || ""),
      service: String(form.get("service") || ""),
      budget: String(form.get("budget") || ""),
      method: String(form.get("method") || ""),
      description: String(form.get("description") || ""),
    };

    const subject = encodeURIComponent(`Project inquiry from ${payload.name}`);
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nService: ${payload.service}\nBudget: ${payload.budget}\nPreferred contact: ${payload.method}\n\nProject description:\n${payload.description}`,
    );

    window.location.href = `${siteConfig.contact.mailto}?subject=${subject}&body=${body}`;
    setStatus("success");
    formEl.reset();
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Name"
            name="name"
            required
            error={errors.name}
            autoComplete="name"
          />
          <Field
            label="Work email"
            name="email"
            type="email"
            required
            error={errors.email}
            autoComplete="email"
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Company" name="company" autoComplete="organization" />
          <SelectField label="Service required" name="service" options={services} />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <SelectField label="Estimated budget" name="budget" options={budgets} />
          <SelectField
            label="Preferred contact method"
            name="method"
            options={["Email", "Video call", "Phone"]}
          />
        </div>
        <div>
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-ink">
            Project description <span className="text-blue">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            className={fieldClass}
            placeholder="Tell us about the problem, timeline, and what success looks like."
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? "description-error" : undefined}
          />
          {errors.description && (
            <p id="description-error" className="mt-1.5 text-sm text-red-600">
              {errors.description}
            </p>
          )}
        </div>

        <p className="text-xs leading-relaxed text-slate">
          Submitting opens your email client with a prefilled message to{" "}
          {siteConfig.contact.email}. No data is stored on a UQENA server from this form.
        </p>

        <Button type="submit" size="lg">
          Send inquiry
        </Button>
      </form>

      {status === "success" && (
        <div
          className="mt-6 rounded-[var(--radius)] border border-blue/30 bg-blue/5 px-4 py-3 text-sm text-ink"
          role="status"
        >
          Your email client should open with the inquiry details. If it does not, email us
          directly at{" "}
          <a href={siteConfig.contact.mailto} className="font-medium text-blue hover:underline">
            {siteConfig.contact.email}
          </a>
          .
        </div>
      )}
      {status === "error" && Object.keys(errors).length > 0 && (
        <div
          className="mt-6 rounded-[var(--radius)] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          Please correct the highlighted fields and try again.
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink">
        {label} {required && <span className="text-blue">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={fieldClass}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={`${fieldClass} cursor-pointer`}
        defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
