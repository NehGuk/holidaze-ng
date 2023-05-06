import PropTypes from "prop-types";

export default function ShowBookings({ venueBookings }) {
  console.log("MOUNTS SHOW BOOKINGS COMPONENT");
  console.log(venueBookings);
  console.log(venueBookings[0].dateFrom);
  console.log(venueBookings[0].dateTo);

  return (
    <div>
      <h3>Show Bookings component</h3>
    </div>
  );
}

ShowBookings.propTypes = {
  venueBookings: PropTypes.array.isRequired,
};
