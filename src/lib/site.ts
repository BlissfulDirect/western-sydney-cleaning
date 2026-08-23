export const site = {
  name: "Western Sydney Cleaning",
  shortName: "Western Sydney Cleaning",
  legalName: "Western Sydney Cleaning",
  domain: "westernsydneycleaning.com.au",
  url: "https://westernsydneycleaning.com.au",
  tagline: "Affordable. Trustworthy. Reliable.",
  description:
    "After-hours office cleaning across Western Sydney. Weekly and fortnightly programs for small and medium offices — with a free site walk and a written quote.",
  phone: "0426 703 030",
  phoneHref: "tel:+61426703030",
  email: "admin@westernsydneycleaning.com.au",
  emailHref: "mailto:admin@westernsydneycleaning.com.au",
  hours: {
    weekdays: "Mon – Fri: 6am – 7pm",
    saturday: "Sat: 8am – 4pm",
    sunday: "Sun: Closed",
    short: "Mon–Fri 6am–7pm · Sat 8am–4pm",
  },
  region: "Western Sydney — Penrith to Parramatta and the Lower Blue Mountains",
  abnNote: "ABN available on request",
} as const;

export const serviceOptions = [
  "Weekly office cleaning",
  "Fortnightly office cleaning",
  "One-off office clean",
  "Small warehouse / industrial unit",
  "Other",
] as const;

export type ServiceOption = (typeof serviceOptions)[number];
