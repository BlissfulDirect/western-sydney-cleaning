"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services", children: true },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 shadow-[0_10px_30px_rgba(18,89,165,0.08)] backdrop-blur-md">
      <div className="mx-auto flex h-[88px] w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-semibold text-neutral-700 transition-colors hover:text-[#0f6b4c]",
                    pathname.startsWith("/services") && "text-[#0f6b4c]",
                  )}
                >
                  {link.label}
                  <ChevronDown className="size-4 opacity-70" />
                </Link>
                <div className="invisible absolute left-0 top-full z-20 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="min-w-72 rounded-2xl border border-[#d5eee3] bg-white p-2 shadow-xl">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-[#f3faf6] hover:text-[#0f6b4c]"
                      >
                        {service.navLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-[15px] font-semibold text-neutral-700 transition-colors hover:text-[#0f6b4c]",
                  pathname === link.href && "text-[#0f6b4c]",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<a href={site.phoneHref} />}
            className="hidden h-11 rounded-full bg-[#0f6b4c] px-4 text-sm font-bold text-white hover:bg-[#0b543c] sm:inline-flex"
          >
            <Phone className="size-4" />
            Call: {site.phone}
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] max-w-sm p-0">
              <SheetHeader className="border-b px-5 py-4">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Logo compact />
              </SheetHeader>
              <div className="grid gap-1 p-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-semibold text-neutral-800"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 grid gap-1 border-t pt-3">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-neutral-600"
                    >
                      {service.navLabel}
                    </Link>
                  ))}
                </div>
                <a
                  href={site.phoneHref}
                  className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-[#0f6b4c] font-bold text-white"
                >
                  Call {site.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
