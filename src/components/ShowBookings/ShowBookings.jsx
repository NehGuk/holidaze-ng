import PropTypes from "prop-types";

export default function ShowBookings({ venueBookings }) {
  console.log("MOUNTS SHOW BOOKINGS COMPONENT");
  console.log(venueBookings);

  return (
    <div>
      <h3>Post booking options here</h3>
      <p>Date input</p>
    </div>
  );
}

ShowBookings.propTypes = {
  venueBookings: PropTypes.array.isRequired,
};
