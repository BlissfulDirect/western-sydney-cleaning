import Link from "next/link";

import { QuoteForm } from "@/components/quote-form";

export function FreeCleanBanner() {
  return (
    <section className="bg-[#0f6b4c] py-16 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#8ee0b8]">
            Limited Time Offer
          </p>
          <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            FREE INITIAL CLEAN
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
            Sign up for a regular weekly or every two weeks office clean and we
            will do the first scheduled visit at no charge, so you can see the
            standard before you stay on.
          </p>
          <p className="mt-4 text-xs text-white/70">
            Free initial clean is subject to inspection and must comply with our
            terms.{" "}
            <Link href="/contact" className="underline">
              Talk to us about eligibility
            </Link>
            .
          </p>
        </div>
        <div className="rounded-3xl bg-[#0b543c] p-6 shadow-2xl sm:p-8">
          <QuoteForm variant="offer" compact />
        </div>
      </div>
    </section>
  );
}
