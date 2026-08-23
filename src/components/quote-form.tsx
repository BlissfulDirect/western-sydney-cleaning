"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { serviceOptions } from "@/lib/site";
import { cn } from "@/lib/utils";

type QuoteFormProps = {
  variant?: "light" | "dark" | "offer";
  defaultService?: string;
  compact?: boolean;
  id?: string;
};

export function QuoteForm({
  variant = "light",
  defaultService,
  compact = false,
  id,
}: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const dark = variant === "dark" || variant === "offer";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "Please check the form and try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us or try again shortly.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border p-6 text-center",
          variant === "offer"
            ? "border-white/20 bg-white/10 text-white"
            : dark
              ? "border-white/15 bg-white/10 text-white"
              : "border-[#c5ead8] bg-[#f3faf6] text-[#0f6b4c]",
        )}
      >
        <p className="font-heading text-xl font-bold">Quote request received</p>
        <p className={cn("mt-2 text-sm", dark ? "text-white/80" : "text-neutral-600")}>
          Thank you. A team member will call you to arrange a free on-site inspection
          and a written scope of works.
        </p>
        <Button
          type="button"
          className="mt-5 h-10 px-5"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  const fieldClass = cn(
    "h-11 rounded-lg px-3 text-sm",
    dark
      ? "border-white/20 bg-white/95 text-neutral-900"
      : "border-[#c5e6f4] bg-white",
  );

  return (
    <form id={id} onSubmit={onSubmit} className="grid gap-3">
      <Field label="Your name *" dark={dark}>
        <Input required name="name" autoComplete="name" className={fieldClass} />
      </Field>
      <div className={cn("grid gap-3", compact ? "grid-cols-1" : "sm:grid-cols-2")}>
        <Field label="Email *" dark={dark}>
          <Input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={fieldClass}
          />
        </Field>
        <Field label="Phone *" dark={dark}>
          <Input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            className={fieldClass}
          />
        </Field>
      </div>
      <Field label="Suburb / site" dark={dark}>
        <Input name="suburb" placeholder="e.g. Penrith" className={fieldClass} />
      </Field>
      <Field label="Select a service *" dark={dark}>
        <select
          required
          name="service"
          defaultValue={defaultService ?? ""}
          className={cn(fieldClass, "w-full appearance-none")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Tell us about the site" dark={dark}>
        <Textarea
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Size of the premises, how often you need cleaning, access times..."
          className={cn(fieldClass, "h-auto min-h-24 py-2.5")}
        />
      </Field>
      {status === "error" ? (
        <p className={cn("text-sm", dark ? "text-red-200" : "text-red-600")}>
          {message}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "mt-1 h-12 rounded-full px-6 text-sm font-bold tracking-wide uppercase",
          variant === "offer"
            ? "bg-white text-[#0f6b4c] hover:bg-[#ecfaf3]"
            : "bg-[#0f6b4c] text-white hover:bg-[#0b543c]",
        )}
      >
        {status === "submitting" ? "Sending..." : "Contact us"}
      </Button>
    </form>
  );
}

function Field({
  label,
  dark,
  children,
}: {
  label: string;
  dark: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5">
      <Label
        className={cn(
          "text-[13px] font-semibold",
          dark ? "text-white" : "text-neutral-700",
        )}
      >
        {label}
      </Label>
      {children}
    </label>
  );
}
