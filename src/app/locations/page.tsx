import type { Metadata } from "next";
import Link from "next/link";

import { ContactQuoteSection } from "@/components/contact-quote-section";
import { FreeCleanBanner } from "@/components/free-clean-banner";
import { PageHero } from "@/components/page-hero";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Western Sydney Cleaning services Penrith, Parramatta, Blacktown, Eastern Creek, Olympic Park and suburbs across the west.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title="Locations"
        subtitle="We deliver commercial, strata, medical, education and gym cleaning across a wide stretch of Western Sydney."
        image="/images/sydney.jpg"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-3xl font-extrabold text-[#1259a5] md:text-4xl">
            Our Service Areas
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-neutral-600">
            We proudly extend our cleaning services across a wide range of
            locations. Our team is ready to bring the same standard of
            cleanliness and hygiene to your area.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="rounded-2xl border border-[#d7eef8] bg-[#f8fcfe] px-5 py-5 transition hover:-translate-y-0.5 hover:border-[#1259a5] hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-bold text-[#1259a5]">
                  {location.name} Cleaning Services
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-wide text-neutral-400 uppercase">
                  {location.postcode}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {location.blurb}
                </p>
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
