import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-bold tracking-[0.2em] text-[#26a9e0] uppercase">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl font-extrabold text-[#1259a5]">
        Page not found
      </h1>
      <p className="mt-4 text-neutral-600">
        That page does not exist. Head back home or request a quote and we will
        take it from there.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-full bg-[#1259a5] px-6 font-bold text-white"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-11 items-center rounded-full border border-[#1259a5] px-6 font-bold text-[#1259a5]"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
