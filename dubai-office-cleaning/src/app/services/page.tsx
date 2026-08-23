import type { Metadata } from "next";
import Link from "next/link";

import { ContactQuoteSection } from "@/components/contact-quote-section";
import { FreeCleanBanner } from "@/components/free-clean-banner";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "After-hours office cleaning across Dubai. Weekly and every two weeks programs for small and medium offices.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="SERVICES"
        subtitle="Office cleaning is the work we take first. Weekly or every two weeks after hours, with a written checklist after we walk your site."
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-3xl font-extrabold text-[#0f6b4c] md:text-4xl">
            Office cleaning first
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            Start here if you have a small or medium office. Other commercial
            work is listed below — ask us if it is a fit, and we will say so
            straight.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-3xl border border-[#d5eee3] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="relative aspect-[16/8] bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[#0f6b4c] group-hover:underline">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-3 text-neutral-600">{service.excerpt}</p>
                  <p className="mt-4 text-sm font-bold text-[#1ea36f]">
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
