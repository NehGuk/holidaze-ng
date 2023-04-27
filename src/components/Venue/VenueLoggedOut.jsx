import { Link, useParams } from "react-router-dom";
import useApiVenues from "../../hooks/useAPIVenues";

export default function VenueLoggedOut() {
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
      <h1>{data.name}</h1>
      <img src={data.media} />
      <p>{data.description}</p>
      <p>${data.price}</p>
      <p>Rating: {data.rating}</p>
      <p>Availability</p>
      <Link to="/login">Login</Link>
      <Link to="/register">Create an account</Link>
      <Link to="/">Back</Link>
    </div>
  );
}
