import { useAuthUser } from "react-auth-kit";

import HomeVenueManager from "./HomeVenueManager/HomeVenueManager";

export default function HomeLoggedIn() {
  const userInfo = useAuthUser();

  return (
    <div>
      <h2>HomeLoggedIn component</h2>

      {userInfo().venueManager && <HomeVenueManager />}
      {!userInfo().venueManager && <p>asdasd as traveller component</p>}
    </div>
  );
}
