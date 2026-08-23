import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ClipboardList,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { ContactQuoteSection } from "@/components/contact-quote-section";
import { FreeCleanBanner } from "@/components/free-clean-banner";
import { RotatingWords } from "@/components/rotating-words";
import { Testimonials } from "@/components/testimonials";
import { featuredLocations } from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const officeService = services.find(
  (service) => service.slug === "commercial-office-industrial",
)!;
const otherServices = services.filter(
  (service) => service.slug !== "commercial-office-industrial",
);

const stats = [
  { icon: Clock, label: "After-hours office cleans" },
  { icon: ClipboardList, label: "Weekly or fortnightly" },
  { icon: MapPin, label: "Western Sydney local" },
  { icon: Sparkles, label: "Written quote after a site walk" },
];

const steps = [
  {
    n: "01",
    title: "Call or send the form",
    body: "Tell us the suburb, roughly how big the office is, and whether you want weekly or fortnightly. We will call you back the same business day.",
  },
  {
    n: "02",
    title: "We walk the office with you",
    body: "A free on-site look at kitchens, bathrooms, floors and desks. Then a simple written checklist and a clear price. No guessing from a phone call.",
  },
  {
    n: "03",
    title: "We start after hours",
    body: "Once you are happy, we clean after you close. Same routine each visit so the office is ready for the next workday.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#e8f6ef]">
        <Image
          src="/images/hero-office.jpg"
          alt="Small commercial office ready for after-hours cleaning"
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
              Office Cleaning
              <br />
              Western Sydney
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
              After-hours cleaning for small and medium offices — desks,
              kitchens, bathrooms and floors. We walk your site, write a
              checklist, and come back weekly or fortnightly. Penrith to
              Parramatta and nearby suburbs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full bg-[#0f6b4c] px-7 text-sm font-bold tracking-wide text-white uppercase shadow-lg shadow-[#0f6b4c]/25 hover:bg-[#0b543c]"
              >
                Book a free site walk
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
              <p className="text-xs font-bold tracking-[0.16em] text-[#1ea36f] uppercase">
                Starting here
              </p>
              <p className="mt-3 font-heading text-lg font-bold text-[#0f6b4c]">
                Small offices first
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Weekly or fortnightly after-hours cleans. A written quote after
                we see the rooms. No long contract until the first few visits
                are right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 bg-[#168a62] text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="size-8 shrink-0 text-[#d9f3e8]" />
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
            Our core work
          </p>
          <h2 className="mt-2 text-center font-heading text-3xl font-extrabold text-[#0f6b4c] md:text-4xl">
            After-hours office cleaning
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            This is what we take on first: suites, professional offices and
            small commercial floors. We empty bins, clean bathrooms and
            kitchens, vacuum or mop, and wipe desks so the office is ready in
            the morning.
          </p>

          <Link
            href={`/services/${officeService.slug}`}
            className="group mt-12 grid overflow-hidden rounded-3xl border border-[#d5eee3] bg-[#f6fbf8] shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:grid-cols-2"
          >
            <div className="relative min-h-64">
              <Image
                src={officeService.image}
                alt={officeService.imageAlt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="font-heading text-2xl font-extrabold text-[#0f6b4c]">
                {officeService.shortTitle}
              </h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                {officeService.excerpt}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                <li>Desks, kitchens and bathrooms</li>
                <li>Weekly or fortnightly after close</li>
                <li>Simple written checklist you can check</li>
              </ul>
              <p className="mt-6 text-sm font-bold text-[#1ea36f]">
                See what we clean in an office →
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f3faf6] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/cleaner.jpg"
              alt="Cleaner preparing an office after hours"
              width={720}
              height={540}
              className="rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div>
            <p className="font-script text-3xl text-[#1ea36f] sm:text-4xl">
              Start with one office
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-[#0f6b4c] md:text-4xl">
              Local cleaning for Western Sydney workplaces
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-700">
              We are a new local company. We are not trying to be everything on
              day one. We focus on offices we can walk, quote properly, and
              clean the same way every visit — in Penrith, Blacktown,
              Parramatta and nearby suburbs.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              Schools, medical rooms, gyms and large strata come later, once
              the office work is solid. If that is what you need, say so on the
              form and we will tell you honestly if we can take it.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex h-11 items-center rounded-full bg-[#0f6b4c] px-6 text-sm font-bold text-white hover:bg-[#0b543c]"
            >
              About us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-3xl font-extrabold text-[#0f6b4c] md:text-4xl">
            How we book a new office
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            No price over the phone for a building we have not seen. A walk
            through, a written scope, then we start.
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

      <section className="bg-[#f3faf6] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-bold tracking-[0.18em] text-[#1ea36f] uppercase">
            Not the first job
          </p>
          <h2 className="mt-2 text-center font-heading text-3xl font-extrabold text-[#0f6b4c]">
            Other commercial work
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            We can talk about these once we have seen the site. Office
            cleaning is what we book first.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-3xl border border-[#d5eee3] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="font-heading font-bold text-[#0f6b4c]">
                  {service.navLabel}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{service.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f6b4c] py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center">
          <div>
            <p className="font-script text-3xl text-[#8ee0b8]">Got an office?</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold md:text-4xl">
              Book a free walk-through
            </h2>
            <p className="mt-4 max-w-xl text-white/85">
              Call with the suburb and a rough size. We will come after hours
              if needed, then send a written quote.
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
            Where we clean
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            Small and medium offices across Western Sydney. If you are near
            these suburbs, we can usually fit you on the same run.
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
              All suburbs
            </Link>
          </div>
        </div>
      </section>

      <ContactQuoteSection defaultService="Weekly office cleaning" />
      <FreeCleanBanner />
    </>
  );
}
