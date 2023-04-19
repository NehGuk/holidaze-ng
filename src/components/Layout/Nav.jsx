import NavLoggedOut from "./NavLoggedOut/NavLoggedOut";
import NavTraveller from "./NavTraveller/NavTraveller";
import NavVenueManager from "./NavVenueManager/NavVenueManager";
import { useAuthUser } from "react-auth-kit";

export default function Nav() {
  const userInfo = useAuthUser();
  console.log(userInfo());

  if (userInfo().venueManager === true) {
    return <NavVenueManager />;
  }

  if (userInfo().venueManager === false) {
    return <NavTraveller />;
  }

  return <NavLoggedOut />;
  /* return <NavTraveller />; */
  /*   return <NavVenueManager />; */
}
