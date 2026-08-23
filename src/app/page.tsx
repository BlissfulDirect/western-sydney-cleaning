import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ClipboardList,
  Phone,
  Sparkles,
  Star,
  Wallet,
} from "lucide-react";

import { ContactQuoteSection } from "@/components/contact-quote-section";
import { FreeCleanBanner } from "@/components/free-clean-banner";
import { RotatingWords } from "@/components/rotating-words";
import { Testimonials } from "@/components/testimonials";
import { featuredLocations } from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const stats = [
  { icon: Sparkles, label: "Local Western Sydney team" },
  { icon: BadgeCheck, label: "Highly skilled cleaners" },
  { icon: ClipboardList, label: "Tailored programs" },
  { icon: Wallet, label: "Affordable pricing" },
];

const steps = [
  {
    n: "01",
    title: "Contact us by phone or email",
    body: "Call, email or send the quote form with your site details. We will get back to you promptly — usually the same business day.",
  },
  {
    n: "02",
    title: "Arrange a time for a free quote",
    body: "We inspect the premises, confirm access and hours, then send a written scope of works and a clear quotation.",
  },
  {
    n: "03",
    title: "Engage our services",
    body: "Once you are happy with the program, we roster a named team and start. You get consistent results without chasing cleaners.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#e8f6ef]">
        <Image
          src="/images/hero-office.jpg"
          alt="Commercial office interior ready for professional cleaning"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8f6ef] via-[#e8f6ef]/92 to-[#e8f6ef]/35" />
        <div className="relative mx-auto grid min-h-[640px] max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:min-h-[720px] lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <RotatingWords />
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
              Commercial
              <br />
              Cleaning Services
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
              100% Australian-owned cleaning company specialising in professional
              cleaning for small, medium and large businesses across Western
              Sydney — from Penrith to Parramatta and the Lower Blue Mountains.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full bg-[#0f6b4c] px-7 text-sm font-bold tracking-wide text-white uppercase shadow-lg shadow-[#0f6b4c]/25 hover:bg-[#0b543c]"
              >
                Enquire Now
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[#0f6b4c]/20 bg-white/80 px-5 text-sm font-bold text-[#0f6b4c] hover:bg-white"
              >
                <Phone className="size-4" />
                {site.phone}
              </a>
            </div>
          </div>
          <div className="hidden justify-self-end lg:block">
            <div className="rounded-3xl bg-white/85 p-6 shadow-xl backdrop-blur">
              <div className="flex items-center gap-1 text-[#f5b400]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-current" />
                ))}
              </div>
              <p className="mt-3 font-heading text-lg font-bold text-[#0f6b4c]">
                Ready for a free quote
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Same-day response. Site inspection. Written scope. No lock-in
                until you are happy with the program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 bg-[#168a62] text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="size-8 shrink-0 text-[#d9f3ff]" />
              <p className="font-heading text-sm font-bold tracking-wide uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-bold tracking-[0.18em] text-[#1ea36f] uppercase">
            What we do
          </p>
          <h2 className="mt-2 text-center font-heading text-3xl font-extrabold text-[#0f6b4c] md:text-4xl">
            Our Cleaning Services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            Using our professional experience, we work with you to establish a
            cleaning program that will be best suited to your site and your
            requirements.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-3xl border border-[#d5eee3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-[#0f6b4c] underline-offset-4 group-hover:underline">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {service.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f3faf6] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/cleaner.jpg"
              alt="Professional cleaner maintaining a commercial interior"
              width={720}
              height={540}
              className="rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div>
            <p className="font-script text-3xl text-[#1ea36f] sm:text-4xl">
              Taking Care of Western Sydney
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-[#0f6b4c] md:text-4xl">
              Commercial cleaning built around how your site actually runs
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-700">
              Western Sydney Cleaning is a local, Australian-owned company
              servicing the western suburbs — Penrith to Parramatta, Blacktown,
              the industrial estates, and the Lower Blue Mountains.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Whether you need general maintenance cleaning or a comprehensive
              program for a small suite or a large premises — fortnightly,
              weekly or daily — we tailor the program to you.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex h-11 items-center rounded-full bg-[#0f6b4c] px-6 text-sm font-bold text-white hover:bg-[#0b543c]"
            >
              About our team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-3xl font-extrabold text-[#0f6b4c] md:text-4xl">
            3-Step Booking
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            Whatever your cleaning needs — offices, commercial, medical,
            childcare or preschool — contact Western Sydney Cleaning today.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.n}
                className="rounded-3xl border border-[#d5eee3] bg-[#f6fbf8] p-6"
              >
                <p className="font-heading text-4xl font-extrabold text-[#1ea36f]">
                  {step.n}
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold text-[#0f6b4c]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f6b4c] py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center">
          <div>
            <p className="font-script text-3xl text-[#8ee0b8]">Let&apos;s Get Started</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold md:text-4xl">
              Ready for a cleaner, healthier workplace?
            </h2>
            <p className="mt-4 max-w-xl text-white/85">
              Our team provides cleaning solutions tailored to your building.
              Reach out now and we will help you get a spotless, inviting
              environment.
            </p>
          </div>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-xl font-extrabold text-[#0f6b4c] shadow-lg"
          >
            <Phone className="size-6" />
            {site.phone}
          </a>
        </div>
      </section>

      <Testimonials />

      <section className="bg-[#f3faf6] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-3xl font-extrabold text-[#0f6b4c] md:text-4xl">
            Our Service Areas
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            We proudly serve a wide range of Western Sydney locations, keeping
            the same standard of cleanliness and hygiene wherever we work.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="rounded-2xl bg-white px-5 py-4 font-heading font-bold text-[#0f6b4c] shadow-sm ring-1 ring-[#d5eee3] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {location.name}
              </Link>
            ))}
            <Link
              href="/locations"
              className="rounded-2xl bg-[#0f6b4c] px-5 py-4 text-center font-heading font-bold text-white shadow-sm hover:bg-[#0b543c]"
            >
              And more…
            </Link>
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/locations"
              className="font-semibold text-[#0f6b4c] underline-offset-4 hover:underline"
            >
              View all service areas
            </Link>
          </p>
        </div>
      </section>

      <ContactQuoteSection />
      <FreeCleanBanner />
    </>
  );
}
