/* import { Link, useParams } from "react-router-dom"; */
/* import useApiVenues from "../../hooks/useAPIVenues"; */
import { useIsAuthenticated } from "react-auth-kit";
import VenueLoggedOut from "./VenueLoggedOut";
import VenueLoggedIn from "./VenueLoggedIn";
import { VenueInfo } from "./Venue.style";

import { useParams } from "react-router-dom";

export default function Venue() {
  const isAuth = useIsAuthenticated();
  console.log(isAuth());
  console.log("IM IN VENUUUEEEEEE");
  const { id } = useParams();
  console.log(id);

  /* const params = useParams();
  console.log(params.id);

  const { data, isLoading, isError } = useApiVenues(`https://api.noroff.dev/api/v1/holidaze/venues/${params.id}?_owner=true&_bookings=true`);
  console.log(data);
  console.log(isLoading);
  console.log(isError);
  console.log(data.name);
  console.log(data.description);
  console.log(data.bookings); */

  return (
    <div>
      <VenueInfo>
        {!isAuth() && <VenueLoggedOut />}
        {isAuth() && <VenueLoggedIn />}
        {/* <h1>{data.name}</h1>
      <img src={data.media} />
      <p>{data.description}</p>
      <p>${data.price}</p>
      <p>Rating: {data.rating}</p>
      <p>Availability</p>
      <Link to="/login">Login</Link>
      <Link to="/register">Create an account</Link>
      <Link to="/">Back</Link> */}
      </VenueInfo>
    </div>
  );
}
