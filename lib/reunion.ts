/**
 * ALL reunion content lives in this file.
 *
 * To change a time, name, cost, or event: edit it here and rebuild.
 * No component files ever need to be touched.
 */

// ---------------------------------------------------------------------------
// Event basics
// ---------------------------------------------------------------------------

export const event = {
  family: "Douglas & Anne Miller",
  title: "Miller Family Reunion",
  subtitle: "Descendants of Douglas Miller",
  year: 2026,
  dates: "August 13–16, 2026",
  // Local (Mountain Time) start/end used by the countdown and calendar links.
  startISO: "2026-08-13T16:00:00-06:00", // check-in Thursday 4:00 PM MDT
  endISO: "2026-08-16T10:00:00-06:00", // check-out Sunday 10:00 AM MDT
  motto: "One Clan. One Legacy. One Family.",
  welcome: "Welcome to Legacy Beach Resort",
  tagline:
    "Fun. Family. Food. Campfires. Cheering. Laughter. Lake Activities. Highland Games and more.",
  mission:
    "We honor those who came before us, treasure the ties that bind us now, and prepare future generations to carry forward the Miller strength and spirit.",
  venue: {
    name: "Legacy Beach Resort",
    address: "580 S Bear Lake Blvd, Garden City, UT 84028",
    area: "Bear Lake",
    mapsUrl:
      "https://maps.google.com/?q=580+S+Bear+Lake+Blvd,+Garden+City,+UT+84028",
  },
  checkIn: "Thursday 4:00 PM",
  checkOut: "Sunday 10:00 AM",
} as const;

// ---------------------------------------------------------------------------
// Costs
// ---------------------------------------------------------------------------

export const costs = {
  perNight: {
    price: "$50",
    unit: "per night · ages 13 & older",
    includes: ["Delicious meals", "Comfortable lodging", "Family t-shirt"],
    note: "Children 12 and under stay free!",
  },
  dayGuest: {
    price: "$25",
    unit: "just joining us for the day",
    includes: ["Delicious meals", "Family t-shirt"],
  },
  assistance:
    "Anyone needing financial assistance for the costs associated with the reunion, please reach out to your Family Lead.",
  payment:
    "Each family branch will coordinate payments through their Family Lead.",
} as const;

// ---------------------------------------------------------------------------
// Lodging
// ---------------------------------------------------------------------------

export type Home = {
  name: string;
  sleeps: number;
  detail: string;
};

export const homes: Home[] = [
  {
    name: "Inn at the Beach",
    sleeps: 70,
    detail: "The main house — home base for meals and evening programs.",
  },
  {
    name: "Sunny Shores",
    sleeps: 26,
    detail: "Bright and roomy, steps from the common green.",
  },
  {
    name: "Lake Dream",
    sleeps: 25,
    detail: "Quiet corner of the resort with lake views.",
  },
];

export const resortAmenities = [
  "Lakeside pool & hot tub",
  "Clubhouse & fitness center",
  "Beach and grass common areas",
  "Pickleball courts & kids splash pad",
  "Townhome side pool & hot tub",
];

export const lodgingNote =
  "Room assignments are being finalized and will be shared with everyone soon.";

// ---------------------------------------------------------------------------
// Family leads
// ---------------------------------------------------------------------------

export type FamilyLead = {
  branch: string;
  lead: string;
  phone?: string;
  email?: string;
};

// Each branch card on the site is a dropdown showing the lead's contact info.
// Fill in phone/email below, e.g.:
//   { branch: "Leo Miller", lead: "Steve Miller", phone: "(801) 555-1234", email: "steve@example.com" },
// Until then the dropdown shows a "contact details coming soon" note.
export const familyLeads: FamilyLead[] = [
  { branch: "Leo Miller", lead: "Steve Miller" },
  { branch: "Colin Miller", lead: "Scott Miller" },
  { branch: "Don Miller", lead: "Marilee Christofferson" },
  { branch: "Ian Miller", lead: "Christopher Miller" },
  { branch: "Rob Miller", lead: "Stephanie Layton" },
  { branch: "Marilyn Steele", lead: "Rob Steele" },
];

// ---------------------------------------------------------------------------
// Schedule
// ---------------------------------------------------------------------------

export type ScheduleItem = {
  time: string;
  title: string;
  detail?: string;
  kind?: "meal" | "activity" | "program" | "highland";
};

export type Day = {
  id: string;
  name: string;
  date: string;
  headline: string;
  items: ScheduleItem[];
};

export const schedule: Day[] = [
  {
    id: "thursday",
    name: "Thursday",
    date: "August 13",
    headline: "Arrival & Welcome",
    items: [
      {
        time: "4:00 PM",
        title: "Check-in begins",
        detail:
          "Room assignments available · pre-ordered merch placed in rooms · full itinerary available.",
        kind: "activity",
      },
      {
        time: "4:30 PM",
        title: "Open / free time",
        detail:
          "Relax, explore, or do your own thing. Suggested activities and restaurants for early-arriving guests.",
        kind: "activity",
      },
      {
        time: "6:30 PM",
        title: "Evening Program: Welcome",
        detail: "Reunion updates and introductions.",
        kind: "program",
      },
      {
        time: "7:00 PM",
        title: "Stories of Nana and Grandad",
        detail: "Sharing memories · family movies · music.",
        kind: "program",
      },
      {
        time: "9:00 PM",
        title: "Evening Treat",
        detail: "Root beer floats.",
        kind: "meal",
      },
    ],
  },
  {
    id: "friday",
    name: "Friday",
    date: "August 14",
    headline: "Family Fun Day",
    items: [
      {
        time: "8:00 AM",
        title: "Breakfast",
        detail: "Scottish stew.",
        kind: "meal",
      },
      {
        time: "9:00 AM",
        title: "Family Fun Day begins",
        detail:
          "Morning hike · golf · volleyball tournament · boating & water activities · swimming pool · pickleball tournament · house games (cornhole, frisbee, volleyball, spikeball, 9-square).",
        kind: "activity",
      },
      {
        time: "12:00 PM",
        title: "Sack Lunch",
        kind: "meal",
      },
      {
        time: "1:00 PM",
        title: "Family Fun continues",
        detail: "Lake time, tournaments, and free play all afternoon.",
        kind: "activity",
      },
      {
        time: "5:00 PM",
        title: "Dinner — Tri Tip Barbecue",
        kind: "meal",
      },
      {
        time: "6:30 PM",
        title: "Evening Program + Livestream",
        detail:
          "Stories of David Liddell Miller and Douglas Miller · spiritual experiences · conversion stories.",
        kind: "program",
      },
      {
        time: "9:00 PM",
        title: "Evening Treat",
        detail: "Ice cream sandwiches.",
        kind: "meal",
      },
    ],
  },
  {
    id: "saturday",
    name: "Saturday",
    date: "August 15",
    headline: "Highland Games Day",
    items: [
      {
        time: "8:00 AM",
        title: "Breakfast",
        detail: "Grandad's cracked wheat.",
        kind: "meal",
      },
      {
        time: "10:00 AM",
        title: "The Great Douglas Miller Highland Games",
        detail:
          "Garden City Park (reserved) · opening ceremony, age-group competitions, clan tug-of-war, all-family challenges. See the full rules & schedule.",
        kind: "highland",
      },
      {
        time: "12:00 PM",
        title: "Lunch — Burgers & Hotdogs",
        detail: "Current clan standings displayed.",
        kind: "meal",
      },
      {
        time: "1:00 PM",
        title: "Highland Games continue",
        detail:
          "Round 3 competitions, tug-of-war finals, the signature all-family challenge, championships, and awards ceremony at 2:45 PM.",
        kind: "highland",
      },
      {
        time: "5:00 PM",
        title: "Dinner — Tri Tip Barbecue",
        kind: "meal",
      },
      {
        time: "6:30 PM",
        title: "Evening Program: Award Ceremony",
        detail: "Talent show · program continues into the evening.",
        kind: "program",
      },
    ],
  },
  {
    id: "sunday",
    name: "Sunday",
    date: "August 16",
    headline: "Farewell",
    items: [
      {
        time: "8:00 AM",
        title: "Breakfast",
        kind: "meal",
      },
      {
        time: "9:00 AM",
        title: "Closing Remarks & Family Photo",
        detail: "One last gathering of the whole clan.",
        kind: "program",
      },
      {
        time: "10:00 AM",
        title: "Check-out",
        detail: "Safe travels — see you at the next one!",
        kind: "activity",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// The Great Douglas Miller Highland Games
// ---------------------------------------------------------------------------

export const games = {
  name: "The Great Douglas Miller Highland Games",
  when: "Saturday, August 15 · 10:00 AM – 3:00 PM",
  where: "Garden City Park (reserved)",
  intro:
    "Eight clans. Five generations. One champion family. Each age group rotates through age-appropriate competitions while everyone comes together for the all-family challenges — so every Miller, from wee to wise, contributes to their clan's score.",
  format: [
    "All 170+ attendees are divided into 8 clans of roughly 21–22 people each.",
    "Clans are age-balanced: 2–3 little kids, 1–2 kids, 2–3 teens, 2 young adults, and 12–14 adults per clan.",
    "Age groups rotate through age-appropriate events while periodic all-family challenges bring every clan member onto the field together.",
    "Every event earns points for your clan — participation counts, and every generation contributes to the team score.",
  ],
  schedule: [
    {
      time: "10:00 – 10:20 AM",
      title: "Opening Ceremony",
      events: ["Team introductions", "Clan colors on display"],
      allFamily: false,
    },
    {
      time: "10:20 – 11:00 AM",
      title: "Age Group Competitions · Round 1",
      events: [
        "Rubber Chicken Toss",
        "Mini Obstacle Course",
        "Caber Carry Relay (foam logs)",
        "Potato Sack Race",
        "Tug-of-War Tournament Qualifiers",
        "Farmer's Carry Challenge",
        "Wheelbarrow Relay",
      ],
      allFamily: false,
    },
    {
      time: "11:00 – 11:20 AM",
      title: "All-Family Challenge #1 — Clan Tug-of-War",
      events: [
        "Every family member participates",
        "Participation earns points for your clan",
      ],
      allFamily: true,
    },
    {
      time: "11:20 AM – 12:00 PM",
      title: "Age Group Competitions · Round 2",
      events: [
        "Water Bucket Carry",
        "Foam Javelin Throw",
        "Three-Legged Race",
        "Stone Carry Relay",
        "Tug-of-War Semifinals",
      ],
      allFamily: false,
    },
    {
      time: "12:00 – 1:00 PM",
      title: "Lunch — Burgers & Hotdogs",
      events: ["Current clan standings displayed"],
      allFamily: false,
    },
    {
      time: "1:00 – 1:20 PM",
      title: "All-Family Challenge #2",
      events: [
        "Each clan must send one member from every age group — toddler to grandparent",
        "Everyone contributes",
      ],
      allFamily: true,
    },
    {
      time: "1:20 – 2:00 PM",
      title: "Age Group Competitions · Round 3",
      events: [
        "Water Balloon Toss",
        "Highland Scavenger Hunt",
        "Caber Carry Relay",
        "Team Dodgeball",
        "Highland Obstacle Course",
        "Tug-of-War Finals",
        "Highland Skills Competition",
      ],
      allFamily: false,
    },
    {
      time: "2:00 – 2:20 PM",
      title: "All-Family Challenge #3 — The Signature Event",
      events: [
        "Carry your clan's family crest through a course",
        "Complete a puzzle",
        "Answer family trivia",
        "Finish with a team sprint",
      ],
      allFamily: true,
    },
    {
      time: "2:20 – 2:45 PM",
      title: "Championship Events",
      events: [
        "Top finishers from each age division compete for their division's championship",
      ],
      allFamily: false,
    },
    {
      time: "2:45 – 3:00 PM",
      title: "Awards Ceremony",
      events: ["Champions crowned", "Clan awards presented"],
      allFamily: true,
    },
  ],
  ageGroups: [
    { name: "Toddlers & Little Kids", ages: "0–6" },
    { name: "Kids", ages: "7–12" },
    { name: "Teens", ages: "13–17" },
    { name: "Young Adults", ages: "18–21" },
    { name: "Adults", ages: "22+" },
  ],
  championships: [
    "Highland Champion (Adult)",
    "Young Highland Champion (18–21)",
    "Teen Highland Champion",
    "Junior Highland Champion",
    "Wee Highland Champion",
  ],
  awards: [
    "Clan Champion",
    "Most Spirited Clan",
    "Best Dressed Clan (tartan / team colors)",
    "Family Sportsmanship Award",
  ],
  rules: [
    "Wear your clan's tartan or team color — Best Dressed Clan is a real award.",
    "Every event earns clan points; showing up and cheering counts as participating.",
    "Age-group events are open only to that age group — adults, let the wee ones win their own glory.",
    "All-family challenges require every present clan member on the field.",
    "Judges' (a.k.a. the aunts') decisions are final.",
    "Sportsmanship above all — the Family Sportsmanship Award outranks any trophy.",
  ],
} as const;

// ---------------------------------------------------------------------------
// Calendar helpers (pure functions — safe for client components)
// ---------------------------------------------------------------------------

type CalendarEvent = {
  title: string;
  description: string;
  location: string;
  /** UTC timestamps in YYYYMMDDTHHMMSSZ form */
  startUTC: string;
  endUTC: string;
};

export const calendarEvents: Record<"reunion" | "games", CalendarEvent> = {
  reunion: {
    title: "Miller Family Reunion 2026",
    description:
      "Descendants of Douglas Miller — One Clan. One Legacy. One Family. Check-in Thursday 4:00 PM, check-out Sunday 10:00 AM.",
    location: "Legacy Beach Resort, 580 S Bear Lake Blvd, Garden City, UT 84028",
    startUTC: "20260813T220000Z", // Thu Aug 13 2026, 4:00 PM MDT
    endUTC: "20260816T160000Z", // Sun Aug 16 2026, 10:00 AM MDT
  },
  games: {
    title: "The Great Douglas Miller Highland Games",
    description:
      "8 clans, 5 generations, one champion family. Opening ceremony, age-group competitions, all-family challenges, championships & awards.",
    location: "Garden City Park, Garden City, UT",
    startUTC: "20260815T160000Z", // Sat Aug 15 2026, 10:00 AM MDT
    endUTC: "20260815T210000Z", // Sat Aug 15 2026, 3:00 PM MDT
  },
};

/** Build an .ics file body for one calendar event. */
export function buildICS(ev: CalendarEvent): string {
  const esc = (s: string) => s.replace(/,/g, "\\,").replace(/;/g, "\\;");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Miller Family Reunion//EN",
    "BEGIN:VEVENT",
    `UID:${ev.startUTC}-${ev.title.replace(/\s+/g, "-").toLowerCase()}@millerreunion`,
    `DTSTAMP:${ev.startUTC}`,
    `DTSTART:${ev.startUTC}`,
    `DTEND:${ev.endUTC}`,
    `SUMMARY:${esc(ev.title)}`,
    `DESCRIPTION:${esc(ev.description)}`,
    `LOCATION:${esc(ev.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/** Google Calendar "add event" template URL. */
export function googleCalendarUrl(ev: CalendarEvent): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: ev.title,
    dates: `${ev.startUTC}/${ev.endUTC}`,
    details: ev.description,
    location: ev.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
