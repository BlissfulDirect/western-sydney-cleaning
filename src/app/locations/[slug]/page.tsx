import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactQuoteSection } from "@/components/contact-quote-section";
import { FreeCleanBanner } from "@/components/free-clean-banner";
import { PageHero } from "@/components/page-hero";
import { getLocation, locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Location" };
  return {
    title: `${location.name} Cleaning Services`,
    description: `Professional commercial, office, strata, medical, school and gym cleaning in ${location.name} ${location.postcode}.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <>
      <PageHero
        title={`${location.name} Cleaning Services`}
        subtitle={`Commercial, office and specialist cleaning throughout ${location.name} and surrounding suburbs.`}
        image="/images/sydney.jpg"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-extrabold text-[#0f6b4c]">
            {location.name} Cleaning Service
          </h2>
          <p className="mt-5 leading-relaxed text-neutral-700">
            {location.blurb}
          </p>
          <p className="mt-4 leading-relaxed text-neutral-700">
            {site.name} works across {location.name} and the wider western
            suburbs. We will sit down with you to build a cleaning program that
            suits your site, your hours and your budget — general maintenance or
            a full commercial specification, fortnightly, weekly or daily.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-700">
            Whatever you need — offices, commercial, medical, childcare,
            preschool, strata or gym — call us today. Our team can answer
            questions or put together a proposal complete with a quote.
          </p>
          <h3 className="mt-10 font-heading text-2xl font-bold text-[#0f6b4c]">
            {site.name}: your cleaning partner in {location.name}
          </h3>
          <p className="mt-4 leading-relaxed text-neutral-700">
            In {location.name}, we deliver professional cleaning to commercial
            and industrial spaces. From offices to clinics and common property,
            we keep your environment clean, inviting and ready for the people
            who use it.
          </p>
          <ul className="mt-8 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`/services/${service.slug}`}
                  className="font-semibold text-[#0f6b4c] hover:underline"
                >
                  {service.shortTitle}
                </a>
                <span className="text-neutral-600"> — {service.excerpt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ContactQuoteSection />
      <FreeCleanBanner />
    </>
  );
}
