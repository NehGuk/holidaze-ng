import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { useAuthUser } from "react-auth-kit";
import Loading from "../Loading/Loading";
import MyBookingsList from "./MyBookingsList";

export default function MyBookings() {
  const userInfo = useAuthUser();

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  const { data: bookings, isLoading, isError, isSuccess } = useApi(api_endpoints(userInfo().name).getProfileBookings, options);

  return (
    <div>
      <h2>My bookings</h2>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <div>
          {bookings.length === 0 && <p>No bookings yet</p>}
          {bookings.length > 0 && (
            <div>
              <MyBookingsList bookings={bookings} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
