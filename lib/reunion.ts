/**
 * ALL reunion content lives in this file.
 *
 * Source of truth: Douglas_Miller_Reunion_Schedule_Planning_Workbook.xlsx
 * (Master Schedule, Meal Planning, Friday Activities, Saturday Highland
 * Games, Accommodations, Evening Programs, Guest Count sheets).
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
    area: "Bear Lake, Idaho",
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
// Lodging (Accommodations sheet)
// ---------------------------------------------------------------------------

export type Home = {
  name: string;
  sleeps: number;
  specs: string;
  detail: string;
  url: string;
};

export const homes: Home[] = [
  {
    name: "Inn at the Beach",
    sleeps: 70,
    specs: "18 Bedrooms · 35 Beds · 18.5 Bathrooms",
    detail: "The Main House — home base for meals and evening programs.",
    url: "https://www.bearlakelegacy.com/bear-lake-vacation-rentals/inn-at-the-beach-reunion-corporate-retreats",
  },
  {
    name: "Sunny Shores #7",
    sleeps: 26,
    specs: "6 Bedrooms · 11 Beds · 5.5 Bathrooms",
    detail: "Pool, hot tub & lake access.",
    url: "https://www.bearlakelegacy.com/bear-lake-vacation-rentals/sunny-shores-7-pool-hot-tub-lake-access",
  },
  {
    name: "Lake Dream #13",
    sleeps: 25,
    specs: "6 Bedrooms · 10 Beds + 4 Sofa Beds · 6 Bathrooms",
    detail: "Private home right on the water.",
    url: "https://www.bearlakelegacy.com/bear-lake-vacation-rentals/lake-dream-13-private-home-on-the-water",
  },
  {
    name: "The Hideout #24",
    sleeps: 16,
    specs: "4 Bedrooms · 5 Beds · 3 Bathrooms",
    detail: "Pool, hot tub & lake access.",
    url: "https://www.bearlakelegacy.com/bear-lake-vacation-rentals/the-hideout-24-pool-hot-tub-and-lake-access",
  },
  {
    name: "The Sandbar #41",
    sleeps: 16,
    specs: "4 Bedrooms · 6 Beds · 3 Bathrooms",
    detail: "Lake, pool & hot tub access.",
    url: "https://www.bearlakelegacy.com/bear-lake-vacation-rentals/the-sandbar-41-lake-pool-and-hot-tub-access",
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
// Schedule (Master Schedule + Meal Planning + Friday Activities +
// Evening Programs sheets)
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
          "Information · room assignments available · pre-ordered merch placed in rooms · full itinerary available.",
        kind: "activity",
      },
      {
        time: "4:30 PM",
        title: "Open / free time",
        detail: "Relax, explore, or do your own thing.",
        kind: "activity",
      },
      {
        time: "5:00 PM",
        title: "On your own evening",
        detail:
          "Suggested activities and restaurants provided for early-arriving guests.",
        kind: "activity",
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
        time: "7:30 AM",
        title: "Golf Tournament",
        detail:
          "Bear Lake Golf Course (9 holes, 5 min from the Main House) — Friday rate $28, $40 with cart.",
        kind: "activity",
      },
      {
        time: "8:00 AM",
        title: "Breakfast",
        detail: "Scottish Stew & sourdough bread · continental breakfast.",
        kind: "meal",
      },
      {
        time: "8:30 AM",
        title: "Morning Hike & Workout",
        detail:
          "Logan Canyon trails — Limber Pine Nature Trail (easy 1.5-mi loop, Bear Lake views) up to Steam Mill Hollow for experienced hikers. Morning workout with Libby.",
        kind: "activity",
      },
      {
        time: "9:00 AM",
        title: "Family Fun Day begins",
        detail:
          "Organized activities all day: volleyball tournament · boating & water activities · swimming pool · house games (cornhole, frisbee, volleyball, spikeball, 9-square).",
        kind: "activity",
      },
      {
        time: "12:00 PM",
        title: "Lunch — Burgers & Hotdogs",
        detail: "Chips · salads · watermelon.",
        kind: "meal",
      },
      {
        time: "1:00 PM",
        title: "Pickleball Tournament",
        detail: "On property.",
        kind: "activity",
      },
      {
        time: "2:00 PM",
        title: "Basketball Tournament",
        detail:
          "Also on your own: marina water rentals (boats, Sea-Doos, paddle boards, kayaks) and go-kart racing at Renegade Raceway.",
        kind: "activity",
      },
      {
        time: "5:00 PM",
        title: "Dinner — BBQ Beef on a Bun",
        detail: "With salads.",
        kind: "meal",
      },
      {
        time: "7:00 PM",
        title: "Evening Program",
        detail:
          "Welcome (7:00) · reunion updates (7:10) · introductions (7:20) · Stories of Nana and Grandad (7:40) · sharing of memories (8:00) · Family Talent Show (8:20).",
        kind: "program",
      },
      {
        time: "Evening",
        title: "Evening Treat",
        detail: "Root beer floats.",
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
        detail:
          "Granddad's Cracked Wheat · continental breakfast · pancakes (Colin's Cakes).",
        kind: "meal",
      },
      {
        time: "10:00 AM",
        title: "Highland Games begin",
        detail:
          "Garden City Park (reserved). Opening ceremony with the Parade of Clans, bagpipe music, and the Oath of the Games — then 10 clans rotate through 10 event stations. See the full rules & schedule.",
        kind: "highland",
      },
      {
        time: "12:30 PM",
        title: "Lunch Break at the park",
        detail:
          "Bag lunch — cold cut sandwich, carrots, fruit, chips & drink. Current standings displayed.",
        kind: "meal",
      },
      {
        time: "1:30 PM",
        title: "Highland Games continue",
        detail:
          "Rounds 6–10, then the Grand Finale Tug O War (3:35–4:00) — three pulls by age group.",
        kind: "highland",
      },
      {
        time: "5:00 PM",
        title: "Dinner — Tri Tip Barbecue",
        detail:
          "5:00–6:30 PM · tri tip · beans · green salad & mac and cheese · garlic bread.",
        kind: "meal",
      },
      {
        time: "7:00 PM",
        title: "Evening Program + Livestream",
        detail:
          "Highland Games awards · livestream begins (7:00) · Stories of David Liddell Miller and Douglas Miller (7:10) · spiritual experiences and conversion stories (7:40).",
        kind: "program",
      },
      {
        time: "9:00 PM",
        title: "Evening Treat",
        detail: "Birthday cake · ice cream sandwiches.",
        kind: "meal",
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
        detail: "Continental breakfast.",
        kind: "meal",
      },
      {
        time: "9:00 AM",
        title: "Closing remarks and thank you",
        kind: "program",
      },
      {
        time: "9:00 AM",
        title: "Church Meetings",
        detail: "Meetings at 9:00 AM and 10:30 AM.",
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
// Miller Highland Games (Saturday Highland Games sheet)
// ---------------------------------------------------------------------------

export const games = {
  name: "Miller Highland Games",
  when: "Saturday, August 15 · 10:00 AM – 4:00 PM",
  where: "Garden City Park (reserved)",
  intro:
    "Ten clans. 173 Millers. Ten Highland event stations — caber toss to sheep round up — plus the Grand Finale Tug O War. Clans rotate station to station on a shotgun start, earning points at every stop, and every generation competes.",
  format: [
    "All 173 attendees are divided into 10 clans of 15–18 members each, all ages.",
    "Clans are age-balanced: 1–2 little kids (2–6), 1–2 kids (7–12), 2 teens (13–17), and 1–2 young adults (18–21), with adults divided evenly to fill the teams.",
    "Each clan gets a different colored bandana to easily identify team members, and carries a clan sign/banner as it rotates to each station.",
    "10–12 family members will serve as Game Masters, each responsible for one station to keep everything running smoothly.",
  ],
  clanNames: [
    "Great Scot",
    "Bagpipers",
    "Bravehearts",
    "Royals",
    "Highlanders",
    "Clans and Crests",
    "Not Irish",
    "Loch Ness",
    "Tartans",
    "Kilts",
  ],
  ageCounts: [
    { group: "Toddlers & Little Kids (0–6)", count: 20 },
    { group: "Kids (7–12)", count: 12 },
    { group: "Teens (13–17)", count: 20 },
    { group: "Young Adults (18–21)", count: 16 },
    { group: "Adults (22+)", count: 105 },
  ],
  schedule: [
    {
      time: "10:00 – 10:30 AM",
      title: "Opening Ceremony",
      detail:
        "Parade of Clans with clan signs · bagpipe music · welcome & team introductions · scoring explained · team photos · Oath of the Games — then clans head to their first station and await the start signal.",
      highlight: true,
    },
    { time: "10:30 – 10:50 AM", title: "Round 1", highlight: false },
    { time: "10:55 – 11:15 AM", title: "Round 2", highlight: false },
    { time: "11:20 – 11:40 AM", title: "Round 3", highlight: false },
    { time: "11:45 AM – 12:05 PM", title: "Round 4", highlight: false },
    { time: "12:10 – 12:30 PM", title: "Round 5", highlight: false },
    {
      time: "12:30 – 1:30 PM",
      title: "Lunch Break",
      detail: "Bag lunch at the park · current standings displayed.",
      highlight: true,
    },
    { time: "1:30 – 1:50 PM", title: "Round 6", highlight: false },
    { time: "1:55 – 2:15 PM", title: "Round 7", highlight: false },
    { time: "2:20 – 2:40 PM", title: "Round 8", highlight: false },
    { time: "2:45 – 3:05 PM", title: "Round 9", highlight: false },
    { time: "3:10 – 3:30 PM", title: "Round 10", highlight: false },
    {
      time: "3:35 – 4:00 PM",
      title: "Grand Finale — Tug O War",
      detail:
        "Three tug o wars by age: under 12, 13–18, and adults. Every person who participates earns a point for their clan.",
      highlight: true,
    },
  ],
  events: [
    {
      name: "Caber Toss",
      description:
        "16 team members throw — 1 warm-up toss and 2 competition tosses each. Hoist the caber with two hands, run forward, and flip it end over end so it lands in a straight line from you. Scored by the section of the caber farthest from the tosser; your highest score is recorded. 16 scores make the event total.",
    },
    {
      name: "Stone Put",
      description:
        "Shot-put style: turn inside the hoop and throw the \"stone\" toward the target area without stepping outside the circle — a throw from outside doesn't count. 1 practice throw and 2 competition throws each; highest score recorded. 16 scores make the event total.",
    },
    {
      name: "Haggis Toss",
      description:
        "16 team members each throw 3 footballs at a five-target net for maximum points. Every throw counts — all points from all throws add up to the event total. Smaller footballs for the kids.",
    },
    {
      name: "Wellington Boot Throw",
      description:
        "Toss a rainboot backwards over your head into laundry baskets spread out at increasing point values. Each of the 16 players gets 3 tosses, and every toss is recorded toward the event total.",
    },
    {
      name: "Scottish Brew Fill",
      description:
        "Fill as many cups as you can to the brim. Water is scooped from a bucket and poured down a PVC pipe drilled full of holes while teammates plug the holes with their fingers; a second teammate catches it in a pitcher at the far end and fills the cups. 1 point per cup filled to the brim.",
    },
    {
      name: "Farmer's Carry",
      description:
        "A timed relay: 16 players take turns racing down the course and back carrying buckets — some empty, some half full, some full. The clock stops when the entire team has crossed the finish line. Fastest team scores 10 points, 2nd place 9, and so on.",
    },
    {
      name: "Sheep Round Up",
      description:
        "Split into two groups and herd the \"sheep\" (balls) with pool noodles — NOT feet. Group 1 herds them from the start into the first pen, Group 2 herds them into the second pen, then both groups bring the flock home. Timed: fastest clan gets 10 points, next 9, and so on.",
    },
    {
      name: "Sheaf Toss",
      description:
        "Launch a pillow as far as possible using a rake or pitchfork. 1 practice toss and 2 competition tosses each; your highest score counts. The team tallies its 16 best scores for the event total.",
    },
    {
      name: "Scottish & Family Trivia",
      description:
        "Work together to answer Scottish and family trivia. Answers are written on whiteboards so neighboring clans can't eavesdrop. Points for each correct answer — and no phones: points are deducted from any team caught using one.",
    },
    {
      name: "Highland Obstacle Course",
      description:
        "One at a time, move over and under the obstacles while carrying a \"sheep\" to safety, then run back to tag the next player. The clock stops when all sheep are safe and every player is across the line. Fastest time earns 10 points, next fastest 9, and so on.",
    },
  ],
  finale: {
    name: "Grand Finale: Tug O War",
    description:
      "Three tug o wars close the games — under 12, ages 13–18, and adults. Every single person who takes the rope earns a point for their clan.",
  },
  generalRules: [
    "Shotgun start — every clan begins at a different station.",
    "Each team rotates through every station; wait for the signal to start and again to rotate.",
    "No more than 16 players participate in each game.",
    "Fewer than 16? Rotate who takes two turns — no player takes two turns at two stations in a row.",
    "More than 16? Choose players to sit out — no one sits out two stations in a row.",
    "Score sheets must be turned in to the Game Master after every station.",
    "No arguing with the Game Masters :-)",
  ],
  awards: [
    "Overall Highland Games Winners",
    "Best Sportsmanship",
    "Best Dressed Scot",
  ],
  awardsNote: "Awards presented at the Saturday evening program.",
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
    title: "Miller Highland Games",
    description:
      "10 clans, 10 Highland event stations, and the Grand Finale Tug O War. Opening ceremony 10:00 AM with the Parade of Clans.",
    location: "Garden City Park, Garden City, UT",
    startUTC: "20260815T160000Z", // Sat Aug 15 2026, 10:00 AM MDT
    endUTC: "20260815T220000Z", // Sat Aug 15 2026, 4:00 PM MDT
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
