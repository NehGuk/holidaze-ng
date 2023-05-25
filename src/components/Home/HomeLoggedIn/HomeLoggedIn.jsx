import { useAuthUser } from "react-auth-kit";
import HomeVenueManager from "./HomeVenueManager/HomeVenueManager";
import HomeTraveller from "./HomeTraveller/HomeTraveller";

export default function HomeLoggedIn() {
  const userInfo = useAuthUser();

  return (
    <div>
      {userInfo().venueManager && <HomeVenueManager />}
      {!userInfo().venueManager && <HomeTraveller />}
    </div>
  );
}
