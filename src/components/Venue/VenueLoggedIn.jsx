import { useAuthUser } from "react-auth-kit";
import VenueLoggedInTraveller from "./VenueLoggedInTraveller";
import VenueLoggedInVenueManager from "./VenueLoggedInVenueManager";

export default function VenueLoggedIn() {
  const userInfo = useAuthUser();
  console.log(userInfo().venueManager);
  return (
    <div>
      <h2>VENUE LOGGED INNNN</h2>
      <p>Add conditionals: if its manager, and if its traveller.</p>
      {userInfo().venueManager && <VenueLoggedInVenueManager />}
      {!userInfo().venueManager && <VenueLoggedInTraveller />}
    </div>
  );
}
