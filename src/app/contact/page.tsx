import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { FreeCleanBanner } from "@/components/free-clean-banner";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Western Sydney Cleaning for a free commercial cleaning quote. Phone, email or send the form — we service all of Western Sydney.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Get in touch for professional, reliable, tailored cleaning solutions."
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-script text-3xl text-[#26a9e0]">Get In Touch</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-[#1259a5]">
              {site.shortName}
            </h2>
            <p className="mt-4 text-neutral-600">
              Our team is ready to answer any questions you may have.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#e8f6fd] text-[#1259a5]">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold tracking-wide text-neutral-500 uppercase">
                    Phone
                  </p>
                  <a
                    href={site.phoneHref}
                    className="font-heading text-lg font-bold text-[#1259a5]"
                  >
                    M: {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#e8f6fd] text-[#1259a5]">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold tracking-wide text-neutral-500 uppercase">
                    Email
                  </p>
                  <a
                    href={site.emailHref}
                    className="font-heading text-lg font-bold text-[#1259a5]"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#e8f6fd] text-[#1259a5]">
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
                <span className="flex size-11 items-center justify-center rounded-full bg-[#e8f6fd] text-[#1259a5]">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold tracking-wide text-neutral-500 uppercase">
                    Servicing
                  </p>
                  <p className="font-medium text-neutral-800">
                    All areas of Western Sydney
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#d7eef8] bg-[#f8fcfe] p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-extrabold text-[#1259a5]">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Fill in the details below and we will get back to you shortly.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
      <FreeCleanBanner />
    </>
  );
}
