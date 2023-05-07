export default function api_endpoints(name, venueID) {
  const endPoints = {
    postRegister: `https://api.noroff.dev/api/v1/holidaze/auth/register`,
    postLogin: `https://api.noroff.dev/api/v1/holidaze/auth/login`,
    putAvatar: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`,
    getVenues: `https://api.noroff.dev/api/v1/holidaze/venues`,
    getVenue: `https://api.noroff.dev/api/v1/holidaze/venues/${venueID}?_owner=true&_bookings=true`,
    deleteVenue: `https://api.noroff.dev/api/v1/holidaze/venues/${venueID}`,
    getProfile: `https://api.noroff.dev/api/v1/holidaze/profiles/${name}`,
    postVenue: `https://api.noroff.dev/api/v1/holidaze/venues`,
    putVenue: `https://api.noroff.dev/api/v1/holidaze/venues/${venueID}`,
    testar2: "testando2",
  };

  return endPoints;
}
