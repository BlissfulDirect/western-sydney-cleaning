import { Star } from "lucide-react";

import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-[#1ea36f] uppercase">
              5 Star Review Ratings
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-[#0f6b4c] md:text-4xl">
              Our Happy Clients
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-3xl border border-[#d5eee3] bg-[#f6fbf8] p-6"
            >
              <div className="flex gap-1 text-[#f5b400]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-heading font-bold text-[#0f6b4c]">
                  {item.name}
                </p>
                <p className="text-sm text-neutral-500">{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
