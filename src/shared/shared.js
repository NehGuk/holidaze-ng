export default function api_endpoints(name, venueID, bookingID) {
  const endPoints = {
    postRegister: `https://api.noroff.dev/api/v1/holidaze/auth/register`,
    postLogin: `https://api.noroff.dev/api/v1/holidaze/auth/login`,
    putAvatar: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`,
    getVenues: `https://api.noroff.dev/api/v1/holidaze/venues?sort=created&sortOrder=desc&limit=100&offset=0`,
    getVenues2: `https://api.noroff.dev/api/v1/holidaze/venues?sort=created&sortOrder=desc&limit=100&offset=100`,
    getVenues3: `https://api.noroff.dev/api/v1/holidaze/venues?sort=created&sortOrder=desc&limit=100&offset=200`,
    getVenue: `https://api.noroff.dev/api/v1/holidaze/venues/${venueID}?_owner=true&_bookings=true`,
    deleteVenue: `https://api.noroff.dev/api/v1/holidaze/venues/${venueID}`,
    getProfile: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}?_bookings=true`,
    getVenuesManager: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/venues?_bookings=true&sort=created&sortOrder=desc`,
    getProfileBookings: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/bookings?_venue=true&sort=dateFrom&sortOrder=asc`,
    getProfileVenues: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}?_venues=true`,
    postVenue: `https://api.noroff.dev/api/v1/holidaze/venues`,
    putVenue: `https://api.noroff.dev/api/v1/holidaze/venues/${venueID}`,
    getBooking: `https://api.noroff.dev/api/v1/holidaze/bookings/${bookingID}?_customer=true&_venue=true`,
    postBooking: `https://api.noroff.dev/api/v1/holidaze/bookings`,
    deleteBooking: `https://api.noroff.dev/api/v1/holidaze/bookings/${bookingID}`,
  };

  return endPoints;
}
