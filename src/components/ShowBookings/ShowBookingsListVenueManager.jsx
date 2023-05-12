import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../../utilities/formatDate";

export default function ShowBookingsListVenueManager({ venueBookings }) {
  console.log("MOUNTING SHOW BOOKINGS LIST VENUE MANAGER");
  /* console.log(venueBookings); */

  const sortedBookings = venueBookings.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));

  return (
    <div>
      {sortedBookings.length === 0 && <p>No bookings yet</p>}
      {sortedBookings.length === 1 && <p>This venue has only {sortedBookings.length} booking at the moment</p>}
      {sortedBookings.length > 1 && <p>This venue has {sortedBookings.length} bookings at the moment</p>}

      {sortedBookings.length > 0 &&
        sortedBookings.map((booking) => {
          return (
            <div key={booking.id}>
              <p>Check-in: {formatDate(booking.dateFrom)}</p>
              <p>Check-out: {formatDate(booking.dateTo)}</p>
              <p>Booking ID: {booking.id}</p>
              <Link to={`/booking-venue-manager/${booking.id}`}>Details</Link>
              <br></br>
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
