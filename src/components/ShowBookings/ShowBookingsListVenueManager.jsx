import PropTypes from "prop-types";
/* import { Link } from "react-router-dom"; */
import formatDate from "../../utilities/formatDate";
import { SLinkButton, SpWarning } from "../styles/globalstyles";
import { BookingListGrid } from "./ShowBookingsListVenueManager.style";

export default function ShowBookingsListVenueManager({ venueBookings }) {
  console.log("MOUNTING SHOW BOOKINGS LIST VENUE MANAGER");

  const sortedBookings = venueBookings.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));

  return (
    <div>
      <SpWarning>Total: {sortedBookings.length} bookings</SpWarning>
      {sortedBookings.length > 0 &&
        sortedBookings.map((booking) => {
          return (
            <div key={booking.id}>
              <BookingListGrid>
                <div>
                  <p>
                    <span>Check-in:</span> {formatDate(booking.dateFrom)}
                  </p>
                  <p>
                    <span>Check-out:</span> {formatDate(booking.dateTo)}
                  </p>
                  <p>
                    <span>Booking ID:</span> {booking.id}
                  </p>

                  <SLinkButton $white to={`/booking-venue-manager/${booking.id}`}>
                    Details
                  </SLinkButton>
                </div>
              </BookingListGrid>
            </div>
          );
        })}
    </div>
  );
}

ShowBookingsListVenueManager.propTypes = {
  venueBookings: PropTypes.array.isRequired,
};
