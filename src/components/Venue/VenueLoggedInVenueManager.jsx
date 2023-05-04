import { Link, useNavigate, useParams } from "react-router-dom";
import useApiVenues from "../../hooks/useAPIVenues";
import DeleteVenue from "../DeleteVenue/DeleteVenue";
import { useState } from "react";

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

  const [isDeleted, setIsDeleted] = useState(false);

  const navigate = useNavigate();

  const handleUpdateVenueButton = () => {
    console.log("GO TO UPDATE");
    navigate(`/venue/${params.id}/update`);
  };

  const handleDeleteButton = () => {
    console.log("DELETING VENUE");
    setIsDeleted(true);
  };

  return (
    <div>
      <p>Hi, this is the VenueLoggedInVenueManager component</p>
      <h1>{data.name}</h1>
      <img src={data.media} />
      <p>{data.description}</p>
      <p>${data.price}</p>
      <p>Rating: {data.rating}</p>
      <p>Show bookings here</p>

      <button onClick={handleUpdateVenueButton}>Update venue</button>
      {!isDeleted && <button onClick={handleDeleteButton}>Delete venue</button>}

      <Link to="/">Back</Link>

      {isDeleted && <DeleteVenue setIsDeleted={setIsDeleted} />}
    </div>
  );
}
