import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactQuoteSection } from "@/components/contact-quote-section";
import { FreeCleanBanner } from "@/components/free-clean-banner";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Western Sydney Cleaning — an Australian-owned commercial cleaning company serving offices, strata, medical centres, schools and gyms from Penrith to Parramatta.",
};

const values = [
  {
    title: "Clear communication",
    body: "A named supervisor, written scopes and a phone number that is actually answered. You always know who is in your building and what they are there to do.",
  },
  {
    title: "Only the best quality",
    body: "Commercial equipment, colour-coded cloths and products matched to the site — offices, clinics, centres and gyms are not cleaned the same way.",
  },
  {
    title: "Local and accountable",
    body: "We live and work in Western Sydney. If something is missed, we come back. Long-term relationships matter more than a cheap first invoice.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Australian-owned commercial cleaners for Western Sydney businesses that want a reliable program, not a revolving door of casuals."
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="font-script text-3xl text-[#26a9e0]">Who we are</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-[#1259a5] md:text-4xl">
              A Western Sydney team built for commercial sites
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-700">
              Western Sydney Cleaning was set up to give local businesses a
              cleaner they can actually reach — with a documented scope, insured
              staff and a program that fits real operating hours.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-700">
              We specialise in offices, industrial units, strata schemes, medical
              and dental centres, schools, childcare and gyms. Every site gets a
              walkthrough, a written quotation and a roster that does not change
              every week.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Public liability insured",
                "Police-checked, uniformed cleaners",
                "Working with Children Checks where the site requires it",
                "After-hours, overnight and weekend programs",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#26a9e0]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/team.jpg"
              alt="Western Sydney Cleaning team discussing a site program"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f4fbfd] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-3xl font-extrabold text-[#1259a5]">
            We take pride in customer satisfaction
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-600">
            We work closely with commercial clients so they are genuinely happy
            with the result — not just invoiced for a walk-through.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#d7eef8]"
              >
                <h3 className="font-heading text-xl font-bold text-[#1259a5]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full bg-[#1259a5] px-7 font-bold text-white hover:bg-[#0e4a8a]"
            >
              Request a free quote
            </Link>
          </div>
        </div>
      </section>
      <ContactQuoteSection />
      <FreeCleanBanner />
    </>
  );
}
