import { useIsAuthenticated } from "react-auth-kit";
import VenueLoggedOut from "./VenueLoggedOut";
import VenueLoggedIn from "./VenueLoggedIn";

import useScrollTopAlways from "../../hooks/useScrollTopAlways";

export default function Venue() {
  useScrollTopAlways();
  const isAuth = useIsAuthenticated();

  return (
    <div>
      {!isAuth() && <VenueLoggedOut />}
      {isAuth() && <VenueLoggedIn />}
    </div>
  );
}
