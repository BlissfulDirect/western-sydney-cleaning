import type { Metadata } from "next";
import Link from "next/link";

import { ContactQuoteSection } from "@/components/contact-quote-section";
import { FreeCleanBanner } from "@/components/free-clean-banner";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial, office, industrial, strata, medical, school, childcare and gym cleaning across Western Sydney.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="SERVICES"
        subtitle="100% Australian-owned cleaning company specialising in professional cleaning for businesses across Western Sydney."
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-3xl font-extrabold text-[#1259a5] md:text-4xl">
            Our Cleaning Services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            Using our professional experience, we work with you to establish a
            cleaning program that will be best suited to you and your
            requirements.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-3xl border border-[#d7eef8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="relative aspect-[16/8] bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[#1259a5] group-hover:underline">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-3 text-neutral-600">{service.excerpt}</p>
                  <p className="mt-4 text-sm font-bold text-[#26a9e0]">
                    View this service →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactQuoteSection />
      <FreeCleanBanner />
    </>
  );
}
