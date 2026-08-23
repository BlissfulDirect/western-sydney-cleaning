import Link from "next/link";

import { QuoteForm } from "@/components/quote-form";
import { site } from "@/lib/site";

export function ContactQuoteSection({
  defaultService,
}: {
  defaultService?: string;
}) {
  return (
    <section className="bg-[#f3faf6] py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(18,89,165,0.08)] sm:p-8">
          <h2 className="font-heading text-3xl font-extrabold text-[#0f6b4c]">
            Contact Us For A Quote
          </h2>
          <p className="mt-3 text-neutral-600">
            Contact us today to schedule your complimentary cleaning quotation.
            We will inspect the site, confirm the scope, and send a clear
            written price.
          </p>
          <div className="mt-6">
            <QuoteForm defaultService={defaultService} />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-script text-3xl text-[#1ea36f] sm:text-4xl">
            Get In Touch
          </p>
          <h2 className="mt-2 font-heading text-4xl font-extrabold text-[#0f6b4c]">
            {site.shortName}
          </h2>
          <p className="mt-4 max-w-md text-neutral-600">
            We are here to answer questions and put together a cleaning program
            that matches your building, your hours and your budget.
          </p>
          <p className="mt-4 text-neutral-600">
            Reach us by phone, email, or the form — we typically respond the
            same business day.
          </p>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex w-fit items-center rounded-full bg-[#0f6b4c] px-6 py-3 text-lg font-bold text-white hover:bg-[#0b543c]"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="mt-4 text-sm font-semibold text-[#0f6b4c] underline-offset-4 hover:underline"
          >
            Full contact details and operating hours
          </Link>
        </div>
      </div>
    </section>
  );
}
