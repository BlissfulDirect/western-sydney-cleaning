import Image from "next/image";

export function PageHero({
  title,
  subtitle,
  image = "/images/hero-office.jpg",
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b3d73] py-20 text-white md:py-28">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d73] via-[#0b3d73]/80 to-[#1259a5]/40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="max-w-3xl font-heading text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-lg text-white/85">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
