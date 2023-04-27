import { Link, useParams } from "react-router-dom";
import useApiVenues from "../../hooks/useAPIVenues";

export default function VenueLoggedInVenueManager() {
  const params = useParams();
  console.log(params.id);

  const { data, isLoading, isError } = useApiVenues(`https://api.noroff.dev/api/v1/holidaze/venues/${params.id}?_owner=true&_bookings=true`);
  console.log(data);
  console.log(isLoading);
  console.log(isError);
  console.log(data.name);
  console.log(data.description);
  console.log(data.bookings);

  return (
    <div>
      <p>Hi, this is the VenueLoggerInVenueManager component</p>
      <h1>{data.name}</h1>
      <img src={data.media} />
      <p>{data.description}</p>
      <p>${data.price}</p>
      <p>Rating: {data.rating}</p>
      <p>Show bookings here</p>
      <Link to="">Update venue details</Link>
      <Link to="">Delete venue</Link>

      <Link to="/">Back</Link>
    </div>
  );
}
