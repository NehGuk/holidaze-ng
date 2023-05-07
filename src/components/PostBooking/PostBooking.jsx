import PropTypes from "prop-types";

export default function PostBooking({ bookings }) {
  console.log("MOUNTS POST BOOKING COMPONENT");
  console.log(bookings);

  return (
    <div>
      <h3>Post booking options here</h3>
      <p>Date input</p>
    </div>
  );
}

PostBooking.propTypes = {
  bookings: PropTypes.object.isRequired,
};
