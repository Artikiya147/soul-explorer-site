export type Booking = {
  id: string;
  date: string;
  sessionType: string;
  slot: string;
  name: string;
  email: string;
  notes?: string;
};

const BOOKINGS_KEY = "sx_bookings";

export function bookingsGet(): Booking[] {
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function bookingAdd(booking: Omit<Booking, "id" | "date">): Booking {
  const full: Booking = {
    ...booking,
    id: "BK-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
    date: new Date().toISOString(),
  };
  const bookings = bookingsGet();
  bookings.unshift(full);
  try {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  } catch {}
  return full;
}
