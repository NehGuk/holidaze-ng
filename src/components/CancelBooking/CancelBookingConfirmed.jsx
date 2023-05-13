import { Link } from "react-router-dom";

export default function CancelBookingConfirmed() {
  console.log("CONFIRMED");

  return (
    <div>
      <h1>Booking canceled</h1>
      <p>Your booking has been cancelled.</p>
      <Link to="/">Home page</Link>
      <Link to="/my-bookings">My bookings</Link>
    </div>
  );
}
