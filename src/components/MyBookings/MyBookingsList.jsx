import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import estimatePrice from "../../utilities/estiamatePrice";
import formatDate from "../../utilities/formatDate";
import { MyBookingsListContainer } from "./MyBookingsList.style";

export default function MyBookingsList({ bookings }) {
  console.log("MOUNTING MY BOOKINGS LIST");
  console.log(bookings);

  return (
    <div>
      <MyBookingsListContainer>
        {bookings.map((booking) => {
          return (
            <div key={booking.id}>
              <img src={booking.venue.media[0]} />
              <h3>{booking.venue.name}</h3>
              <p>Check-in: {formatDate(booking.dateFrom)}</p>
              <p>Check-out: {formatDate(booking.dateTo)} </p>
              <p>Guests: {booking.guests}</p>
              <p>Estimated price: ${estimatePrice(booking.dateFrom, booking.dateTo, booking.venue.price)}</p>
              <Link to={`/booking-traveller/${booking.id}`}>Details</Link>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </MyBookingsListContainer>
    </div>
  );
}

MyBookingsList.propTypes = {
  bookings: PropTypes.array.isRequired,
};
