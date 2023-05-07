import { Link, useParams } from "react-router-dom";
/* import useApiVenues from "../../hooks/useAPIVenues"; */
import ShowBookings from "../ShowBookings/ShowBookings";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";

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
      {isLoading && <Loading />}
      {isSuccess && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.media} />
          <p>{data.description}</p>
          <p>${data.price}</p>
          <p>Rating: {data.rating}</p>

          <h3>Details</h3>
          <p>
            This property accepts a maximum of <strong>{data.maxGuests}</strong> guests.
          </p>
          {data.meta.wifi && <p>wifi</p>}
          {data.meta.parking && <p>parking</p>}
          {data.meta.breakfast && <p>breakfast</p>}
          {data.meta.pets && <p>pets allowed</p>}

          <h3>Location</h3>
          {(data.location.address === "" || data.location.address === "Unknown") && <p>For directions, please contact the owner.</p>}
          <p>{data.location.address}</p>
          <p>{data.location.city}</p>
          <p>{data.location.country}</p>

          <h3>Owner</h3>
          <p>{data.owner.name}</p>
          <p>{data.owner.email}</p>

          <h3>Availability</h3>
          {venueBookings && <ShowBookings venueBookings={venueBookings} />}

          <Link to="">Book now</Link>

          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
}
