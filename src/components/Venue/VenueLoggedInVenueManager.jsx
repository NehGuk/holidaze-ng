import { Link, useNavigate, useParams } from "react-router-dom";
/* import useApiVenues from "../../hooks/useAPIVenues"; */
import DeleteVenue from "../DeleteVenue/DeleteVenue";
import { useState } from "react";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import ShowBookingsListVenueManager from "../ShowBookings/ShoBookingsListVenueManager";
/* import ShowBookings from "../ShowBookings/ShowBookings"; */

export default function VenueLoggedInVenueManager() {
  const params = useParams();
  console.log(params.id);

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(null, params.id).getVenue);
  /* console.log(data); */
  /* console.log(isLoading); */
  /* console.log(isError); */
  /* console.log(data.name); */
  /* console.log(data.description); */
  /* console.log(data.bookings); */
  const venueBookings = data.bookings;

  const [isDeleted, setIsDeleted] = useState(false);

  const [showBookings, setShowBookings] = useState(false);

  const navigate = useNavigate();

  const handleUpdateVenueButton = () => {
    console.log("GO TO UPDATE");
    navigate(`/venue/${params.id}/update`);
  };

  const handleDeleteButton = () => {
    console.log("DELETING VENUE");
    setIsDeleted(true);
  };

  const handleShowBookingsButton = () => {
    console.log("SHOW BOOKINGS NOWW");

    setShowBookings((prevShowBookings) => !prevShowBookings);
  };

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

          <h3>Admin</h3>
          {/* {venueBookings && <ShowBookings venueBookings={venueBookings} />} */}

          <button onClick={handleUpdateVenueButton}>Update venue</button>
          {!isDeleted && <button onClick={handleDeleteButton}>Delete venue</button>}

          <button onClick={handleShowBookingsButton}>{!showBookings ? "Show bookings for this venue" : "Hide bookings"}</button>

          <Link to="/">Back</Link>

          {isDeleted && <DeleteVenue setIsDeleted={setIsDeleted} />}

          {showBookings && <ShowBookingsListVenueManager venueBookings={venueBookings} />}
        </div>
      )}
    </div>
  );
}
