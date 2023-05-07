import PropTypes from "prop-types";

export default function MyBookingsList({ bookings }) {
  console.log("MOUNTING MY BOOKINGS LIST");
  console.log(bookings);

  return (
    <div>
      <h2>List here</h2>
      <p>Booking a</p>
      <p>Booking b</p>
      <p>Booking c</p>
    </div>
  );
}

MyBookingsList.propTypes = {
  bookings: PropTypes.array.isRequired,
};
