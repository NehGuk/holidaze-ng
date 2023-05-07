import { Link, useParams } from "react-router-dom";
/* import useApiVenues from "../../hooks/useAPIVenues"; */
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import ShowBookings from "../ShowBookings/ShowBookings";
import Loading from "../Loading/Loading";

export default function VenueLoggedOut() {
  const params = useParams();
  console.log(params.id);

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(null, params.id).getVenue);
  console.log(isSuccess);
  /* console.log(data); */
  console.log(isLoading);
  console.log(isError);
  /* console.log(data.name); */
  /* console.log(data.description); */
  /* console.log(data.bookings); */
  const venueBookings = data.bookings;
  /* console.log(venueBookings); */

  return (
    <div>
      {isError && <p>An error has occurred</p>}
      {isLoading && <Loading />}

      <h1>{data.name}</h1>
      <img src={data.media} />
      <p>{data.description}</p>
      <p>${data.price}</p>
      <p>Rating: {data.rating}</p>
      <p>Availability</p>
      {venueBookings && <ShowBookings venueBookings={venueBookings} />}

      <Link to="/login">Login</Link>
      <Link to="/register">Create an account</Link>
      <Link to="/">Back</Link>
    </div>
  );
}
