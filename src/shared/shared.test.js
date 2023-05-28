import api_endpoints from "./shared";

test("Function returns the correct API endpoint", () => {
  const name = "Holt";
  const venueID = "111";
  const bookingID = "222";
  expect(api_endpoints("Holt").getProfile).toBe("https://api.noroff.dev/api/v1/holidaze/profiles/Holt?_bookings=true");
  expect(api_endpoints(null, venueID).getVenue).toBe("https://api.noroff.dev/api/v1/holidaze/venues/111?_owner=true&_bookings=true");
  expect(api_endpoints(null, null, bookingID).getBooking).toBe("https://api.noroff.dev/api/v1/holidaze/bookings/222?_customer=true&_venue=true");
});
