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

  const venueBookings = data.bookings;
  const { id, name, media, description, price, rating, maxGuests, meta, location, owner } = data;

  console.log(isLoading);
  console.log(isError);

  return (
    <div>
      {isError && <p>An error has occurred</p>}
      {isLoading && <Loading />}
      {isSuccess && (
        <div>
          <h1>{name}</h1>
          <img src={media} />
          <p>{description}</p>
          <p>${price}</p>
          <p>Rating: {rating}</p>

          <h3>Details</h3>
          <p>
            This property accepts a maximum of <strong>{maxGuests}</strong> guests.
          </p>
          {meta.wifi && <p>wifi</p>}
          {meta.parking && <p>parking</p>}
          {meta.breakfast && <p>breakfast</p>}
          {meta.pets && <p>pets allowed</p>}

          <h3>Location</h3>
          {(location.address === "" || location.address === "Unknown") && <p>For directions, please contact the owner.</p>}
          <p>{location.address}</p>
          <p>{location.city}</p>
          <p>{location.country}</p>

          <h3>Owner</h3>
          <p>{owner.name}</p>
          <p>{owner.email}</p>

          <h3>How to book</h3>
          {venueBookings && <ShowBookings venueBookings={venueBookings} maxGuests={maxGuests} price={price} id={id} />}

          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
}
