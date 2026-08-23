import { NextResponse } from "next/server";

import { serviceOptions } from "@/lib/site";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const service = String(body.service ?? "").trim();
  const suburb = String(body.suburb ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (phone.replace(/\s/g, "").length < 8) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (!serviceOptions.includes(service as (typeof serviceOptions)[number]) && service !== "") {
    return NextResponse.json({ error: "Please select a service." }, { status: 400 });
  }
  if (!service) {
    return NextResponse.json({ error: "Please select a service." }, { status: 400 });
  }

  console.info("[quote]", { name, email, phone, service, suburb, message });

  return NextResponse.json({ ok: true });
}
