// Define reusable date and time shapes
export type DateParts = {
  date: number;
  month: number;
  year: number;
};

export type TimeParts = {
  hour: number;
  minute: number;
  second: number;
};

// Location information, optionally including a Google Maps link
export type Location = {
  name: string;
  city: string;
  state: string;
  googleMapLink?: string;
};

// Professional title (e.g., "Software Engineer")
export type Designation = {
  title: string;
};

// Person structure including optional address and parental info
export type Person = {
  name: string;
  address?: string;
  designation?: Designation;
  parents?: Parents;
};

// Structure for parents of a person
export type Parents = {
  mother: Person;
  father: Person;
};

// Couple includes both bride and groom
export type Couple = {
  bride: Person;
  groom: Person;
};

// Represents the main wedding event details
export type MainEvent = {
  weddingDate: DateParts;
  weddingTime: TimeParts;
  weddingVenue: Location;
};

// Structure for calendar link generation
export type CalendarEventLink = {
  event: string;
  date: DateParts;
  startTime: TimeParts;
  endTime: TimeParts;
  location: Location;
  description: string;
};

// Represents an individual event (e.g., Haldi, Sangeet)
export type Event = {
  name: string;
  guestTheme: string;
  date: DateParts;
  time: TimeParts;
  venue: Location;
  image: string;
  calendarEventLink: CalendarEventLink;
};

// Categorized wedding events — optional for bride/groom, required for collective
export type WeddingEvents = {
  brideEvents?: Event[];
  groomEvents?: Event[];
  collectiveEvents: Event[];
};

// Optional personal and venue locations per person
export type PersonLocations = {
  home: Location;
  venue: Location;
};

// Media section for photos and videos
export type Video = {
  title: string;
  link: string;
};

export type Photo = {
  title: string;
  link: string;
};

export type PersonalVow = {
  title: string
  description: string,
}

export type PersonalVowParts = {
  her: PersonalVow
  his: PersonalVow,
}

export type WeddingHighlights = {
  personalVows: PersonalVowParts
  photos?: Photo[];
  videos?: Video[];
};

// Final configuration type to be implemented in actual config file
export type WeddingConfig = {
  mainEvent: MainEvent;
  couple: Couple;
  events?: WeddingEvents;
  highlights?: WeddingHighlights;
};
