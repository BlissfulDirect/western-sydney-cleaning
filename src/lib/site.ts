export const site = {
  name: "Western Sydney Cleaning",
  shortName: "Western Sydney Cleaning",
  legalName: "Western Sydney Cleaning Pty Ltd",
  domain: "westernsydneycleaning.com.au",
  url: "https://westernsydneycleaning.com.au",
  tagline: "Affordable. Trustworthy. Reliable.",
  description:
    "Australian-owned commercial cleaning across Western Sydney. Offices, strata, medical centres, schools, childcare and gyms — with a free quote and a tailored cleaning program.",
  phone: "0426 703 030",
  phoneHref: "tel:+61426703030",
  email: "hello@westernsydneycleaning.com.au",
  emailHref: "mailto:hello@westernsydneycleaning.com.au",
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
  "Commercial, Office & Industrial Cleaning",
  "Medical & Dental Centres Cleaning",
  "Schools, PreSchools & Childcare Centres Cleaning",
  "Strata Cleaning",
  "Gym Cleaning",
  "Other",
] as const;

export type ServiceOption = (typeof serviceOptions)[number];
