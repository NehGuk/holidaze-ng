import { useAuthUser } from "react-auth-kit";
import VenueLoggedInTraveller from "./VenueLoggedInTraveller";
import VenueLoggedInVenueManager from "./VenueLoggedInVenueManager";

export default function VenueLoggedIn() {
  const userInfo = useAuthUser();

  return (
    <div>
      {userInfo().venueManager && <VenueLoggedInVenueManager />}
      {!userInfo().venueManager && <VenueLoggedInTraveller />}
    </div>
  );
}
