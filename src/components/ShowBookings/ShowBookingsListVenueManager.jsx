import PropTypes from "prop-types";

export default function ShowBookingsListVenueManager({ venueBookings }) {
  console.log("MOUNTING SHOW BOOKINGS LIST VENUE MANAGER");
  console.log(venueBookings);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <h3>Bookings for this venue</h3>
      {venueBookings.length === 0 && <p>No bookings yet</p>}
      {venueBookings.length > 0 &&
        venueBookings.map((booking) => {
          return (
            <div key={booking.id}>
              <p>Check-in: {formatDate(booking.dateFrom)}</p>
              <p>Check-out: {formatDate(booking.dateTo)}</p>
              <p>Booking ID: {booking.id}</p>
              <br></br>
            </div>
          );
        })}
    </div>
  );
}

ShowBookingsListVenueManager.propTypes = {
  venueBookings: PropTypes.array.isRequired,
};
