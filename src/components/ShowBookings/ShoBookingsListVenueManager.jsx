import PropTypes from "prop-types";

export default function ShowBookingsListVenueManager({ venueBookings }) {
  console.log("MOUNTING SHOW BOOKINGS LIST VENUE MANAGER");
  console.log(venueBookings);

  return (
    <div>
      <h3>Bookings for this venue</h3>
      {venueBookings.length === 0 && <p>No bookings yet</p>}
      {venueBookings.length > 0 &&
        venueBookings.map((booking) => {
          return (
            <div key={booking.id}>
              <p>Check-in: {booking.dateFrom}</p>
              <p>Check-out: {booking.dateTo}</p>
              <p>Booking ID: {booking.id}</p>
            </div>
          );
        })}
    </div>
  );
}

ShowBookingsListVenueManager.propTypes = {
  venueBookings: PropTypes.array.isRequired,
};
