export const site = {
  name: "Dubai Office Cleaning",
  shortName: "Dubai Office Cleaning",
  legalName: "Dubai Office Cleaning",
  domain: "dubaiofficecleaning.ae",
  url: "https://dubaiofficecleaning.ae",
  tagline: "Affordable. Trustworthy. Reliable.",
  description:
    "After-hours office cleaning across Dubai. Weekly and every-two-weeks programs for small and medium offices — with a free site walk and a written quote.",
  phone: "+61 426 703 030",
  phoneHref: "tel:+61426703030",
  whatsappHref: "https://wa.me/61426703030",
  email: "admin@dubaiofficecleaning.ae",
  emailHref: "mailto:admin@dubaiofficecleaning.ae",
  hours: {
    weekdays: "Mon – Fri: 8am – 8pm (GST)",
    saturday: "Sat: 9am – 2pm",
    sunday: "Sun: Closed",
    short: "Mon–Fri 8am–8pm GST · Sat 9am–2pm",
  },
  region:
    "Dubai — Business Bay, DIFC, Marina, JLT, Al Quoz and nearby business districts",
  licenceNote:
    "Trade licence details on request — we do not start a site until licensed and insured",
  abnNote:
    "Trade licence details on request — we do not start a site until licensed and insured",
} as const;

export const serviceOptions = [
  "Weekly office cleaning",
  "Every two weeks office cleaning",
  "One-off office clean",
  "Small warehouse / industrial unit",
  "Other",
] as const;

export type ServiceOption = (typeof serviceOptions)[number];
