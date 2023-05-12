import { useAuthUser } from "react-auth-kit";
import VenuesVenueManager from "../../../Venues/VenuesVenueManager";
import { Link } from "react-router-dom";
import useApi from "../../../../hooks/useAPI";
import api_endpoints from "../../../../shared/shared";

export default function HomeVenueManager() {
  const userInfo = useAuthUser();

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  const { data, isSuccess, isError } = useApi(api_endpoints(userInfo().name).getProfile, options);
  console.log(data);
  console.log(isSuccess);

  return (
    <div>
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <>
          <h1>Hello {userInfo().name}!</h1>
          <p>You are currently managing {data._count.venues} venues.</p>

          <Link to="/post-new-venue">Create new venue</Link>

          <div>
            <Link to="/all-bookings">See upcoming bookings</Link>
          </div>
          <VenuesVenueManager />
        </>
      )}
    </div>
  );
}
