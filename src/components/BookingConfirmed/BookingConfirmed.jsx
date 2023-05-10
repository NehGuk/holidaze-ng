import { Link } from "react-router-dom";

export default function BookingConfirmed() {
  console.log("MOUNTING BOOKING CONFIRMED");

  return (
    <div>
      <h1>Thank you!</h1>
      <p>Your booking has been confirmed.</p>

      <Link to="/my-bookings">My bookings</Link>
      <Link to="/home">Back to homepage</Link>
    </div>
  );
}
