"use client";

import { useState } from "react";
import Icon from "./Icon";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactInquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      segment: fd.get("segment"),
      message: fd.get("message"),
      source: "contact",
    };

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Submission failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-green-bg text-brand-green-dark">
          <Icon name="check" className="h-6 w-6" strokeWidth={2.6} />
        </span>
        <h3 className="mt-4 text-lg">Thank you — message received.</h3>
        <p className="mt-2 text-sm text-ink-mid">
          The EvEra team will be in touch shortly.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-light focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20";
  const labelClass = "block text-xs font-semibold uppercase tracking-[0.14em] text-ink-mid";

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={labelClass}>Full name</label>
          <input id="c-name" name="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="c-company" className={labelClass}>Company (optional)</label>
          <input id="c-company" name="company" className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-email" className={labelClass}>Email</label>
          <input id="c-email" name="email" type="email" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="c-phone" className={labelClass}>Phone</label>
          <input id="c-phone" name="phone" required className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="c-segment" className={labelClass}>Type of inquiry</label>
        <select id="c-segment" name="segment" className={fieldClass} defaultValue="">
          <option value="" disabled>Select…</option>
          <option>Corporate Fleet</option>
          <option>Charging Partnership</option>
          <option>EV Rental</option>
          <option>EasyVolt Fleet / Taxi</option>
          <option>Government / Public Sector</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className={labelClass}>Message</label>
        <textarea id="c-message" name="message" rows={4} className={fieldClass} />
      </div>

      {status === "error" && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error || "Something went wrong. Please try again."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-2 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && <Icon name="arrow" className="h-4 w-4" />}
      </button>
    </form>
  );
}
