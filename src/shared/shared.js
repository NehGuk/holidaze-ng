export default function api_endpoints(name, venueID, bookingID) {
  const endPoints = {
    postRegister: `https://api.noroff.dev/api/v1/holidaze/auth/register`,
    postLogin: `https://api.noroff.dev/api/v1/holidaze/auth/login`,
    putAvatar: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`,
    getVenues: `https://api.noroff.dev/api/v1/holidaze/venues`,
    getVenue: `https://api.noroff.dev/api/v1/holidaze/venues/${venueID}?_owner=true&_bookings=true`,
    deleteVenue: `https://api.noroff.dev/api/v1/holidaze/venues/${venueID}`,
    getProfile: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}?_bookings=true`,
    getVenuesManager: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/venues`,

    getProfileBookings: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}?_bookings=true`,
    getProfileVenues: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}?_venues=true`,
    postVenue: `https://api.noroff.dev/api/v1/holidaze/venues`,
    putVenue: `https://api.noroff.dev/api/v1/holidaze/venues/${venueID}`,
    getBooking: `https://api.noroff.dev/api/v1/holidaze/bookings/${bookingID}?_customer=true&_venue=true`,
    postBooking: `https://api.noroff.dev/api/v1/holidaze/bookings`,
  };

  return endPoints;
}
