"use client";

import { useState } from "react";
import Icon from "./Icon";

type Status = "idle" | "submitting" | "success" | "error";

export default function FleetInquiryForm({
  source = "corporate-fleet",
}: {
  source?: string;
}) {
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
      size: fd.get("size"),
      message: fd.get("message"),
      source,
    };

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="py-10 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-green-bg text-brand-green-dark">
          <Icon name="check" className="h-6 w-6" strokeWidth={2.6} />
        </span>
        <h3 className="mt-4 text-lg">Thank you — request received.</h3>
        <p className="mt-2 text-sm text-ink-mid">
          The EvEra team will be in touch within two business days.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-light focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20";
  const labelClass = "block text-xs font-semibold uppercase tracking-[0.14em] text-ink-mid";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Full name</label>
          <input id="name" name="name" required className={fieldClass} placeholder="Somchai Jaidee" />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input id="company" name="company" required className={fieldClass} placeholder="Phuket Resort Co., Ltd." />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>Work email</label>
          <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" required className={fieldClass} placeholder="0XX-XXX-XXXX" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="segment" className={labelClass}>Segment</label>
          <select id="segment" name="segment" className={fieldClass} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Hotel / Resort</option>
            <option>Corporate / SET-listed</option>
            <option>Government / อบจ.</option>
            <option>Industrial / Logistics</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="size" className={labelClass}>Fleet size</label>
          <select id="size" name="size" className={fieldClass} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>1–5 vehicles</option>
            <option>6–20 vehicles</option>
            <option>21–50 vehicles</option>
            <option>50+ vehicles</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell us about your operation</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Use case, target deployment date, current vehicles…"
        />
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
        {status === "submitting" ? "Sending…" : "Request proposal"}
        {status !== "submitting" && <Icon name="arrow" className="h-4 w-4" />}
      </button>

      <p className="text-xs text-ink-light">
        By submitting, you agree to be contacted by the EvEra team about your enquiry.
      </p>
    </form>
  );
}
