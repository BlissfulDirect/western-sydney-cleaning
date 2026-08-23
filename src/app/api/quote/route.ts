import { NextResponse } from "next/server";

import { serviceOptions, site } from "@/lib/site";

type QuoteFields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  suburb: string;
  message: string;
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (String(body.company ?? "").trim()) {
    return NextResponse.json({ ok: true, emailVia: "none" });
  }

  const fields: QuoteFields = {
    name: String(body.name ?? "").trim(),
    email: String(body.email ?? "").trim(),
    phone: String(body.phone ?? "").trim(),
    service: String(body.service ?? "").trim(),
    suburb: String(body.suburb ?? "").trim(),
    message: String(body.message ?? "").trim(),
  };

  if (fields.name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (fields.phone.replace(/\s/g, "").length < 8) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (!fields.service || !serviceOptions.includes(fields.service as (typeof serviceOptions)[number])) {
    return NextResponse.json({ error: "Please select a service." }, { status: 400 });
  }

  console.info("[quote]", fields);

  const web3Key = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (web3Key) {
    const sent = await sendWeb3Forms(web3Key, fields);
    if (!sent) {
      console.error("[quote] Web3Forms failed");
      return NextResponse.json(
        {
          error:
            "The form could not send just now. Please call 0426 703 030 or email admin@westernsydneycleaning.com.au.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true, emailVia: "web3forms" });
  }

  return NextResponse.json({ ok: true, emailVia: "client" });
}

async function sendWeb3Forms(accessKey: string, fields: QuoteFields): Promise<boolean> {
  const to = process.env.QUOTE_TO_EMAIL?.trim() || site.email;
  const subject = `Quote request: ${fields.service}${fields.suburb ? ` — ${fields.suburb}` : ""}`;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: site.name,
        to,
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        service: fields.service,
        suburb: fields.suburb || "(not given)",
        message: fields.message || "(none)",
      }),
    });
    if (!response.ok) return false;
    const data = (await response.json()) as { success?: boolean };
    return data.success === true;
  } catch (error) {
    console.error("[quote] Web3Forms error", error);
    return false;
  }
}
