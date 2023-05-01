import { useAuthUser } from "react-auth-kit";
import VenuesVenueManager from "../../../Venues/VenuesVenueManager";
import { Link } from "react-router-dom";

export default function HomeVenueManager() {
  const userInfo = useAuthUser();
  return (
    <div>
      <h1>Hello {userInfo().name}!</h1>
      <p>You are currently managing X venues.</p>

      <Link to="/post-new-venue">Create new venue</Link>
      <VenuesVenueManager />
    </div>
  );
}
