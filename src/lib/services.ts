export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  formValue: string;
  excerpt: string;
  intro: string;
  image: string;
  imageAlt: string;
  tasks: string[];
  highlights: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "commercial-office-industrial",
    title: "Commercial, Office & Industrial Cleaning",
    shortTitle: "Commercial – Office – Industrial Cleaning",
    navLabel: "Commercial, Office & Industrial Cleaning",
    formValue: "Commercial, Office & Industrial Cleaning",
    excerpt:
      "A well-cleaned office emphasises the professionalism of your company and creates a happier, more productive workplace.",
    intro:
      "This is our core work: after-hours cleaning for small and medium offices. We walk the site with you, write a simple checklist, then come back weekly or fortnightly so desks, kitchens, bathrooms and floors stay consistent.",
    image: "/images/commercial.jpg",
    imageAlt: "Bright, well-kept commercial office interior",
    tasks: [
      "Wiping and dusting of desks, workstations and furniture",
      "Disinfecting phones, keyboards, computers and screens",
      "Vacuuming carpets / sweep and mop hard floors",
      "Cleaning glass doors, partitions and internal windows",
      "Window sills and shelves wiped and cleaned",
      "Dusting of blinds and high-touch surfaces",
      "Kitchen benches, sinks, microwaves and fridges",
      "Dishes washed or dishwasher stacked and emptied",
      "Office waste and recycling bins emptied",
      "Toilet cleaning, disinfecting and deodorising",
      "Replenish toilet rolls, soap and hand towel",
      "Removal of cobwebs and detail around skirtings",
    ],
    highlights: [
      {
        title: "Built around your hours",
        body: "Before open, after close, or overnight — we schedule around your team so cleaning never gets in the way of the workday.",
      },
      {
        title: "One program, every site",
        body: "From a Parramatta suite to a Penrith warehouse, we document the scope so every visit is consistent, even when the roster rotates.",
      },
      {
        title: "Insured, uniformed, site-ready",
        body: "Our cleaners arrive with commercial equipment, colour-coded cloths and the access protocols your building manager expects.",
      },
    ],
  },
  {
    slug: "strata",
    title: "Strata Cleaning",
    shortTitle: "Strata Cleaning",
    navLabel: "Strata Cleaning",
    formValue: "Strata Cleaning",
    excerpt:
      "We keep common areas safe, clean and welcoming for residents, visitors and building managers.",
    intro:
      "Strata schemes live or die on first impressions. We clean lobbies, lifts, stairwells, amenities and outdoor common areas to a standard residents notice — and that strata managers can report on.",
    image: "/images/strata.jpg",
    imageAlt: "Apartment building common areas and facade",
    tasks: [
      "Foyers, lobbies and reception seating",
      "Lift cars, doors, tracks and control panels",
      "Stairwells, handrails and landings",
      "Internal corridors and letterbox areas",
      "Garbage rooms, chute rooms and bin bays",
      "Gyms, BBQ areas and resident amenities",
      "Pool surrounds and outdoor furniture wipe-down",
      "Glass entries, directory boards and mail rooms",
      "Car park entries, fire stairs and high-traffic points",
      "Spot cleaning of spills, scuffs and cobwebs",
    ],
    highlights: [
      {
        title: "Resident-first presentation",
        body: "We treat common property like a hotel lobby: clear walkways, fresh amenities and no lingering odours in bins or lifts.",
      },
      {
        title: "Building-manager friendly",
        body: "Photo notes, after-hours access and a named supervisor so you are not chasing a call centre when something is missed.",
      },
      {
        title: "Safe for families",
        body: "Low-odour products in occupied buildings and wet-floor discipline in foyers, stairs and pool areas.",
      },
    ],
  },
  {
    slug: "medical-dental",
    title: "Medical & Dental Centre Cleaning",
    shortTitle: "Medical – Dental – Centre Cleaning",
    navLabel: "Medical & Dental Centres",
    formValue: "Medical & Dental Centres Cleaning",
    excerpt:
      "Hygiene that protects staff, patients and visitors — with the discipline medical rooms actually require.",
    intro:
      "Clinics cannot run on a generic office clean. We follow a documented medical-room routine: high-touch disinfection, waiting rooms that look cared for, and amenities that meet the standard your patients expect.",
    image: "/images/medical.jpg",
    imageAlt: "Clean modern medical clinic corridor",
    tasks: [
      "Waiting rooms, reception desks and patient seating",
      "Consult rooms, benches and high-touch disinfection",
      "Treatment rooms and dental surgeries (non-clinical surfaces)",
      "Staff rooms, kitchens and change areas",
      "Bathrooms, including clinical amenities",
      "Floors: vacuum, mop and targeted sanitising",
      "Glass, partitions and entry handles",
      "Waste, sharps-area presentation and bin rooms (as directed)",
      "Toy areas and paediatric waiting spaces",
      "End-of-day reset so the first patient walks into a ready clinic",
    ],
    highlights: [
      {
        title: "Hygiene as the job, not an extra",
        body: "Colour-coded cloths, hospital-grade disinfectants on approved surfaces, and a checklist signed off each visit.",
      },
      {
        title: "Quiet around patients",
        body: "We work after last appointment or around session times so consulting rooms are never interrupted.",
      },
      {
        title: "Confidentiality on site",
        body: "Cleaners are briefed not to handle records, screens or clinical stores. Your rooms stay yours.",
      },
    ],
  },
  {
    slug: "schools-childcare",
    title: "Schools, PreSchools & Childcare Cleaning",
    shortTitle: "Schools – PreSchools – Childcare – Centres Cleaning",
    navLabel: "Schools, PreSchools & Childcare",
    formValue: "Schools, PreSchools & Childcare Centres Cleaning",
    excerpt:
      "A safe, clean environment for students, educators and families — every day the centre is open.",
    intro:
      "Childcare and school sites have to look clean and actually be clean. We plan around pick-up, nap times and after-hours access, with products and methods suited to children underfoot.",
    image: "/images/school.jpg",
    imageAlt: "Bright classroom ready for students",
    tasks: [
      "Classrooms, activity rooms and sleep rooms",
      "Bathrooms, nappy-change areas and handwash stations",
      "Kitchens, bottle prep and meal areas",
      "Floors, rugs and high-traffic entries",
      "Toys, shelves and low-level surfaces (as scoped)",
      "Staff rooms and office spaces",
      "Outdoor undercover areas and high-touch playground furniture",
      "Bins, soiled-linen presentation and recycling",
      "Glass, doors and parent-facing reception",
      "Holiday deep cleans and term-break resets",
    ],
    highlights: [
      {
        title: "Child-safe products",
        body: "We specify low-toxicity, low-odour chemicals approved for education and early-learning sites.",
      },
      {
        title: "WWCC-ready team",
        body: "Cleaners working in schools and centres hold current Working with Children Checks.",
      },
      {
        title: "After the last child leaves",
        body: "Most centres are cleaned in the evening so rooms are reset before the morning rush.",
      },
    ],
  },
  {
    slug: "gym",
    title: "Gym Cleaning",
    shortTitle: "Gym Cleaning",
    navLabel: "Gym Cleaning",
    formValue: "Gym Cleaning",
    excerpt:
      "From daily floor and equipment wipe-downs to deep sanitisation — programs built for sweat, traffic and members.",
    intro:
      "Gyms get dirty in a very specific way. We plan around class timetables, peak hours and 24-hour access so equipment, change rooms and floors stay member-ready.",
    image: "/images/gym.jpg",
    imageAlt: "Gym floor with equipment ready for members",
    tasks: [
      "Cardio and strength equipment wipe-down",
      "Rubber flooring, turf and studio floors",
      "Change rooms, showers and lockers",
      "Toilets, vanities and amenities restocking",
      "Reception, retail and smoothie-bar benches",
      "Mirrors, glass and stretch-area surfaces",
      "High-touch handles, pin pads and water stations",
      "Bins, towel skips and odour control",
      "Group fitness rooms and boxing areas",
      "Periodic deep cleans of grout, drains and HVAC vents (as scoped)",
    ],
    highlights: [
      {
        title: "Member-ready between classes",
        body: "We can split visits: a morning reset and an evening deep pass so 5pm traffic never walks into a tired floor.",
      },
      {
        title: "Built for sweat and traffic",
        body: "Degreasers on rubber, sanitiser on pads and a program that actually reaches under racks and benches.",
      },
      {
        title: "Brand-safe presentation",
        body: "Mirrors streak-free, amenities stocked, and the front desk looking as sharp as the workout floor.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
