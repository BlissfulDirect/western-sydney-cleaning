export type Location = {
  slug: string;
  name: string;
  postcode: string;
  blurb: string;
};

export const locations: Location[] = [
  {
    slug: "business-bay",
    name: "Business Bay",
    postcode: "Dubai",
    blurb:
      "Tower offices, professional suites and canal-side commercial floors that need after-hours cleaning once the building is quiet.",
  },
  {
    slug: "difc",
    name: "DIFC",
    postcode: "Dubai",
    blurb:
      "High-spec financial offices, meeting rooms and reception floors where presentation the next morning actually matters.",
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    postcode: "Dubai",
    blurb:
      "Corporate suites around Boulevard and Downtown towers — desks, pantries and washrooms reset after close.",
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    postcode: "Dubai",
    blurb:
      "Marina offices, mixed-use towers and waterfront commercial floors on a weekly or two-weekly after-hours program.",
  },
  {
    slug: "jlt",
    name: "Jumeirah Lakes Towers",
    postcode: "Dubai",
    blurb:
      "Cluster offices in JLT — small teams, shared floors and cluster amenities cleaned after the last person leaves.",
  },
  {
    slug: "internet-city",
    name: "Dubai Internet City",
    postcode: "Dubai",
    blurb:
      "Tech and media offices across Internet City and neighbouring free-zone campuses, scoped to your access hours.",
  },
  {
    slug: "media-city",
    name: "Dubai Media City",
    postcode: "Dubai",
    blurb:
      "Studios, agency floors and campus offices that need a quiet evening clean, not a daytime disruption.",
  },
  {
    slug: "al-quoz",
    name: "Al Quoz",
    postcode: "Dubai",
    blurb:
      "Warehouses, showrooms and office-warehouse units — practical commercial cleaning around production and loading hours.",
  },
  {
    slug: "sheikh-zayed-road",
    name: "Sheikh Zayed Road",
    postcode: "Dubai",
    blurb:
      "Trade Centre and SZR tower offices: reception glass, pantries, bathrooms and open-plan desks after hours.",
  },
  {
    slug: "barsha-heights",
    name: "Barsha Heights",
    postcode: "Dubai",
    blurb:
      "Tecom offices and mixed commercial floors with building-access rules we write into the checklist.",
  },
  {
    slug: "dubai-south",
    name: "Dubai South",
    postcode: "Dubai",
    blurb:
      "Campus-style commercial buildings and logistics offices near Al Maktoum — weekly programs that match shift patterns.",
  },
  {
    slug: "silicon-oasis",
    name: "Dubai Silicon Oasis",
    postcode: "Dubai",
    blurb:
      "Business-park offices and light-industrial units that need a named cleaner and a documented evening routine.",
  },
  {
    slug: "jebel-ali",
    name: "Jebel Ali",
    postcode: "Dubai",
    blurb:
      "Industrial and office annexes around Jebel Ali — floors, amenities and workstations kept to a commercial standard.",
  },
  {
    slug: "deira",
    name: "Deira",
    postcode: "Dubai",
    blurb:
      "Older commercial buildings, trading offices and medical suites that still need a reliable after-hours clean.",
  },
  {
    slug: "al-karama",
    name: "Al Karama",
    postcode: "Dubai",
    blurb:
      "Street-level offices, clinics and small commercial floors — weekly cleans that fit how the building is actually used.",
  },
  {
    slug: "port-saeed",
    name: "Port Saeed",
    postcode: "Dubai",
    blurb:
      "Deira-side commercial suites and mixed buildings close to the creek, cleaned after close on a written scope.",
  },
];

export const featuredLocationSlugs = [
  "business-bay",
  "difc",
  "downtown-dubai",
  "dubai-marina",
  "jlt",
  "internet-city",
  "al-quoz",
] as const;

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function getFeaturedLocations() {
  return featuredLocationSlugs
    .map((slug) => getLocation(slug))
    .filter((location): location is Location => Boolean(location));
}

export const featuredLocations = getFeaturedLocations();
