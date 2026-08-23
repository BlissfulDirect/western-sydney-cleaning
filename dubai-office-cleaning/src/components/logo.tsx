import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 text-left no-underline",
        className,
      )}
    >
      <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0f6b4c] text-white shadow-[0_8px_20px_rgba(15,107,76,0.28)]">
        <svg
          viewBox="0 0 32 32"
          className="size-6"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M8 20.5c3.2-1.2 5.4-4.8 6.1-8.7.3 3.1 1.4 6.1 3.4 8.2 1.6 1.7 3.7 2.8 6 3.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10 22.8c2.4.8 4.2 2.6 5.1 5"
            stroke="#8ee0b8"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="22.5" cy="9" r="1.4" fill="#8ee0b8" />
          <path
            d="M22.5 5.8v1.4M22.5 11v1.4M19.7 9h1.4M24 9h1.4M20.5 7.1l1 1M23.5 9.9l1 1M20.5 10.9l1-1M23.5 8.1l1-1"
            stroke="#8ee0b8"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-heading text-[15px] font-extrabold tracking-tight text-[#0f6b4c] uppercase sm:text-base">
          Dubai Office
        </span>
        <span
          className={cn(
            "block font-heading text-[13px] font-bold tracking-[0.18em] text-[#1ea36f] uppercase",
            compact && "text-[11px] tracking-[0.16em]",
          )}
        >
          Cleaning
        </span>
      </span>
    </Link>
  );
}
