import { useAuthUser } from "react-auth-kit";
import VenuesVenueManager from "../../../Venues/VenuesVenueManager";

export default function HomeVenueManager() {
  const userInfo = useAuthUser();
  return (
    <div>
      <h1>Hello {userInfo().name}!</h1>
      <p>You are currently managing X venues.</p>

      <button>Create new venue</button>
      <VenuesVenueManager />
    </div>
  );
}
