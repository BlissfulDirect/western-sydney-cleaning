export type Location = {
  slug: string;
  name: string;
  postcode: string;
  blurb: string;
};

export const locations: Location[] = [
  {
    slug: "penrith",
    name: "Penrith",
    postcode: "2750",
    blurb:
      "Offices, industrial units and retail along High Street and the Penrith CBD — plus nearby business parks that need after-hours commercial cleaning.",
  },
  {
    slug: "parramatta",
    name: "Parramatta",
    postcode: "2150",
    blurb:
      "High-rise offices, medical suites and strata towers across the Parramatta CBD, Westfield precinct and riverside commercial buildings.",
  },
  {
    slug: "blacktown",
    name: "Blacktown",
    postcode: "2148",
    blurb:
      "Corporate suites, civic buildings and busy medical centres through Blacktown, with flexible programs for small teams and large floorplates.",
  },
  {
    slug: "eastern-creek",
    name: "Eastern Creek",
    postcode: "2766",
    blurb:
      "Warehouses, showrooms and industrial estates around the M4/M7 — daily, weekly or project cleans scoped to your shift pattern.",
  },
  {
    slug: "arndell-park",
    name: "Arndell Park",
    postcode: "2148",
    blurb:
      "Industrial and office-warehouse hybrids that need floors, amenities and workstations kept to a commercial standard.",
  },
  {
    slug: "rooty-hill",
    name: "Rooty Hill",
    postcode: "2766",
    blurb:
      "Local offices, clubs, gyms and strata schemes with a named cleaner and a program that matches how the building is used.",
  },
  {
    slug: "olympic-park",
    name: "Sydney Olympic Park",
    postcode: "2127",
    blurb:
      "Campus-style commercial buildings, event venues and high-spec offices that expect hotel-level presentation every morning.",
  },
  {
    slug: "st-marys",
    name: "St Marys",
    postcode: "2760",
    blurb:
      "Main-street retail, medical rooms and light-industrial sites between Penrith and Blacktown.",
  },
  {
    slug: "seven-hills",
    name: "Seven Hills",
    postcode: "2147",
    blurb:
      "Business parks and mixed-use sites along the rail corridor, with overnight cleaning that does not interrupt operations.",
  },
  {
    slug: "wetherill-park",
    name: "Wetherill Park",
    postcode: "2164",
    blurb:
      "One of Western Sydney’s largest industrial precincts — factories, showrooms and office annexes on a documented scope.",
  },
  {
    slug: "smithfield",
    name: "Smithfield",
    postcode: "2164",
    blurb:
      "Workshops, warehouses and office-fronted industrial units that need practical, reliable commercial cleaning.",
  },
  {
    slug: "horsley-park",
    name: "Horsley Park",
    postcode: "2175",
    blurb:
      "Rural-industrial sites and large floorplates where access, safety inductions and after-hours work are part of the job.",
  },
  {
    slug: "granville",
    name: "Granville",
    postcode: "2142",
    blurb:
      "Offices, education sites and strata buildings on the Parramatta fringe, cleaned to a consistent weekly or daily program.",
  },
  {
    slug: "lidcombe",
    name: "Lidcombe",
    postcode: "2141",
    blurb:
      "Commercial suites, medical centres and residential strata close to Olympic Park and the M4.",
  },
  {
    slug: "rydalmere",
    name: "Rydalmere",
    postcode: "2116",
    blurb:
      "Riverside industrial and office parks that need dependable cleaning without disrupting production or warehouse traffic.",
  },
  {
    slug: "springwood",
    name: "Springwood",
    postcode: "2777",
    blurb:
      "Lower Blue Mountains offices, medical rooms and community sites — the western edge of our regular run.",
  },
];

export const featuredLocationSlugs = [
  "parramatta",
  "arndell-park",
  "blacktown",
  "eastern-creek",
  "penrith",
  "rooty-hill",
  "olympic-park",
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
