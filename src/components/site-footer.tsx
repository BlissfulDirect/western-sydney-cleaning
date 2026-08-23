import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { featuredLocations } from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#0c3d2e] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="rounded-2xl bg-white px-3 py-3">
            <Logo compact />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            Australian-owned commercial cleaning for offices, strata, medical
            centres, schools, childcare and gyms across Western Sydney.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-lg font-bold">Our Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-white"
                >
                  {service.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-lg font-bold">Service Areas</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {featuredLocations.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="hover:text-white"
                >
                  {location.name} Cleaning Services
                </Link>
              </li>
            ))}
            <li>
              <Link href="/locations" className="font-semibold text-white">
                View all locations
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-lg font-bold">Get In Touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={site.emailHref} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0" />
              <span>
                {site.hours.weekdays}
                <br />
                {site.hours.saturday}
                <br />
                {site.hours.sunday}
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{site.region}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {site.domain}
          </p>
          <p>Commercial cleaning contractors · Western Sydney</p>
        </div>
      </div>
    </footer>
  );
}
