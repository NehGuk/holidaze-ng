import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { useAuthUser } from "react-auth-kit";
import Loading from "../Loading/Loading";
import MyBookingsList from "./MyBookingsList";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";
import createMethod from "../../utilities/createMethod";

export default function MyBookings() {
  useScrollTopAlways();
  const userInfo = useAuthUser();
  const { data: bookings, isLoading, isError, isSuccess } = useApi(api_endpoints(userInfo().name).getProfileBookings, createMethod("GET"));

  return (
    <div>
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
