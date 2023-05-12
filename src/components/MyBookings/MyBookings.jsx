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
      <h1>My bookings</h1>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <div>
          <MyBookingsList bookings={bookings} />
        </div>
      )}
    </div>
  );
}
