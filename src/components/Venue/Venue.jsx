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

  return (
    <div>
      <VenueInfo>
        {!isAuth() && <VenueLoggedOut />}
        {isAuth() && <VenueLoggedIn />}
      </VenueInfo>
    </div>
  );
}
