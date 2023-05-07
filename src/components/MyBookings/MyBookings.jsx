import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { useAuthUser } from "react-auth-kit";
import Loading from "../Loading/Loading";

export default function MyBookings() {
  const userInfo = useAuthUser();

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(userInfo().name).getProfile, options);
  console.log(data);

  return (
    <div>
      <h2>My bookings</h2>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <div>
          {data.bookings.length === 0 && <p>No bookings yet</p>}
          {data.bookings.length > 0 && (
            <div>
              <p>List of bookings below</p>
              <p>Booking a</p>
              <p>Booking b</p>
              <p>Booking c</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
