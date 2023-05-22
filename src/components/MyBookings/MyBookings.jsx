import { useEffect } from "react";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { useAuthUser } from "react-auth-kit";
import Loading from "../Loading/Loading";
import MyBookingsList from "./MyBookingsList";
/* import { Sh1Title } from "../styles/globalstyles"; */

export default function MyBookings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* <Sh1Title>My bookings</Sh1Title> */}
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
