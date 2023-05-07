import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";

export default function MyBookings() {
  useApi(api_endpoints());

  return (
    <div>
      <h2>My bookings</h2>
      <p>Show next bookings here made by traveller</p>
      <p>Booking a</p>
      <p>Booking b</p>
      <p>Booking c</p>
    </div>
  );
}
