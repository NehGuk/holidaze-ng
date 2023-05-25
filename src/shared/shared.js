/**
 * Returns an API endpoint
 * @param {string} name User name
 * @param {string} venueID Specific venue ID
 * @param {string} bookingID Specific booking ID
 * @example
 * ```js
 * // Get the putAvatar endpoint:
 * const name = TravellerX
 * api_endpoints(TravellerX).putAvatar = `https://api.noroff.dev/api/v1/holidaze/profiles/TravellerX/media";
 * ```
 * @example
 * ```js
 * // Get the deleteBooking endpoint:
 * const bookingID = "abc123abc123"
 * api_endpoints(null, null, bookingID).deleteBooking = "deleteBooking: `https://api.noroff.dev/api/v1/holidaze/bookings/abc123abc123";
 * ```
 */
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
