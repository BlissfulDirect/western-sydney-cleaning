import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { FreeCleanBanner } from "@/components/free-clean-banner";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free office walk-through in Dubai. Call +61 426 703 030 or email admin@dubaiofficecleaning.ae.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Tell us the suburb and roughly how big the office is. We will walk the site and send a written quote."
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-script text-3xl text-[#1ea36f]">Get In Touch</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-[#0f6b4c]">
              {site.shortName}
            </h2>
            <p className="mt-4 text-neutral-600">
              Best for weekly or every two weeks after-hours office cleaning. Call
              or use the form — we typically reply the same business day.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#e3f5ec] text-[#0f6b4c]">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold tracking-wide text-neutral-500 uppercase">
                    Phone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="font-heading text-lg font-bold text-[#0f6b4c]"
                  >
                    M: {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#e3f5ec] text-[#0f6b4c]">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold tracking-wide text-neutral-500 uppercase">
                    Email
                  </p>
                  <a
                    href={site.emailHref}
                    className="font-heading text-lg font-bold text-[#0f6b4c]"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#e3f5ec] text-[#0f6b4c]">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold tracking-wide text-neutral-500 uppercase">
                    Operating hours
                  </p>
                  <p className="font-medium text-neutral-800">
                    {site.hours.weekdays}
                    <br />
                    {site.hours.saturday}
                    <br />
                    {site.hours.sunday}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#e3f5ec] text-[#0f6b4c]">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold tracking-wide text-neutral-500 uppercase">
                    Servicing
                  </p>
                  <p className="font-medium text-neutral-800">
                    Business districts across Dubai
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#d5eee3] bg-[#f6fbf8] p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-extrabold text-[#0f6b4c]">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Fill in the details below and we will get back to you shortly.
            </p>
            <div className="mt-6">
              <QuoteForm defaultService="Weekly office cleaning" />
            </div>
          </div>
        </div>
      </section>
      <FreeCleanBanner />
    </>
  );
}
