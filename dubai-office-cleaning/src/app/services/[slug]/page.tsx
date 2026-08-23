import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ContactQuoteSection } from "@/components/contact-quote-section";
import { FreeCleanBanner } from "@/components/free-clean-banner";
import { PageHero } from "@/components/page-hero";
import { Testimonials } from "@/components/testimonials";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.excerpt,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero title={service.title} subtitle={service.excerpt} image={service.image} />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-[#0f6b4c]">
              {service.shortTitle}
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-700">{service.intro}</p>
            <h3 className="mt-10 font-heading text-xl font-bold text-[#0f6b4c]">
              Tasks most commonly cleaned
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              No task is too large or too small. We will keep your site a clean,
              healthy environment for staff, visitors and customers.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {service.tasks.map((task) => (
                <li key={task} className="flex gap-2 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#1ea36f]" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-3xl">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f3faf6] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-script text-3xl text-[#1ea36f]">Experienced & enthusiastic</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-[#0f6b4c]">
            Cleaners are at your service
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-neutral-700">
            Our team of trained, credible cleaners understand commercial
            processes and can work across all types and sizes of premises. Call{" "}
            <a href={site.phoneHref} className="font-bold text-[#0f6b4c]">
              {site.phone}
            </a>{" "}
            to talk through your site.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#d5eee3]"
              >
                <h3 className="font-heading text-lg font-bold text-[#0f6b4c]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <ContactQuoteSection defaultService={service.formValue} />
      <FreeCleanBanner />
    </>
  );
}
