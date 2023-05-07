import { useParams } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";

export default function BookingTraveller() {
  console.log("MOUNTING BOOKING TRAVELLER COMPONENT");
  const { id } = useParams();
  console.log(id);

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(null, null, id).getBooking, options);
  console.log(data);
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  return (
    <div>
      <h2>Booking travellerrr </h2>
    </div>
  );
}
