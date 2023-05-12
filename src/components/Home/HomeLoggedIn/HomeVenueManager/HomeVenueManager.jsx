import { useAuthUser } from "react-auth-kit";
/* import VenuesVenueManager from "../../../Venues/VenuesVenueManager"; */
import { Link } from "react-router-dom";
import useApi from "../../../../hooks/useAPI";
import api_endpoints from "../../../../shared/shared";
import createMethod from "../../../../utilities/createMethod";

export default function HomeVenueManager() {
  const userInfo = useAuthUser();

  /* const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  }; */

  const { data, isSuccess, isError } = useApi(api_endpoints(userInfo().name).getProfile, createMethod("GET"));
  /* console.log(data); */
  /* console.log(isSuccess); */

  const { data: data2 } = useApi(api_endpoints(userInfo().name).getVenuesManager, createMethod("GET"));
  console.log(data2);

  // TOTAL HISTORY BOOKINGS
  let totalBookingsHistory = 0;
  for (let i = 0; i < data2.length; i++) {
    totalBookingsHistory += data2[i].bookings.length;
  }
  console.log(totalBookingsHistory);
  // TOTAL HISTORY BOOKINGS END

  // TOTAL CURRENT BOOKINGS
  const today = new Date();
  const totalBookings = data2
    .flatMap((property) => property.bookings)
    .filter((booking) => new Date(booking.dateTo) >= today)
    .reduce((total, booking) => total + booking.guests, 0);

  console.log(totalBookings);
  // TOTAL CURRENT BOOKINGS END

  return (
    <div>
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <>
          <h1>Hello {userInfo().name}!</h1>
          <p>You are currently managing {data._count.venues} venues.</p>

          <Link to="/my-venues">See my venues</Link>
          <Link to="/post-new-venue">Create new venue</Link>

          <p>Your venues have been booked {totalBookingsHistory} times!</p>

          <div>
            <Link to="/all-bookings">See upcoming bookings</Link>
          </div>
          {/* <VenuesVenueManager /> */}
        </>
      )}
    </div>
  );
}
