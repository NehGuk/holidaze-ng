import { Link, useParams } from "react-router-dom";
/* import useApiVenues from "../../hooks/useAPIVenues"; */
import ShowBookings from "../ShowBookings/ShowBookings";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";

export default function VenueLoggedInTraveller() {
  const params = useParams();
  console.log(params.id);

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(null, params.id).getVenue);
  console.log(isSuccess);
  const venueBookings = data.bookings;

  console.log(isLoading);
  console.log(isError);
  console.log(data.name);
  console.log(data.description);
  console.log(data.bookings);

  return (
    <div>
      {isError && <p>An error has occurred</p>}
      {isLoading && <p>LOADINNNNGGG</p>}
      {!isSuccess && <p>An error has occurred</p>}

      <p>Hi, this is the VenueLoggedInTraveller component</p>
      <h1>{data.name}</h1>
      <img src={data.media} />
      <p>{data.description}</p>
      <p>${data.price}</p>
      <p>Rating: {data.rating}</p>
      <p>Show available dates here</p>

      {venueBookings && <ShowBookings venueBookings={venueBookings} />}

      <Link to="">Book now</Link>

      <Link to="/">Back</Link>
    </div>
  );
}
