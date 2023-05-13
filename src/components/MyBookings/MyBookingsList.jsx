import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import estimatePrice from "../../utilities/estiamatePrice";
import formatDate from "../../utilities/formatDate";
import { MyBookingsListContainer } from "./MyBookingsList.style";
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function MyBookingsList({ bookings }) {
  console.log("MOUNTING MY BOOKINGS LIST");
  console.log(bookings);

  const upcomingBookings = bookings.filter((booking) => {
    return new Date(booking.dateTo) >= new Date(new Date().setHours(0, 0, 0, 0));
  });

  const pastBookings = bookings.filter((booking) => {
    return new Date(booking.dateTo) < new Date(new Date().setHours(0, 0, 0, 0));
  });

  const [showPastBookings, setShowPastBookings] = useState(false);

  const handleShowPastBookings = () => {
    setShowPastBookings(!showPastBookings);
  };

  return (
    <div>
      <MyBookingsListContainer>
        {upcomingBookings.length === 0 && (
          <div>
            <h3>You have no upcoming bookings.</h3>
            <p>
              But no worries! Go to our <Link to="/">home page</Link> and find the perfect place to stay!
            </p>
          </div>
        )}
        {upcomingBookings.length > 0 && (
          <h2>
            Upcoming bookings <span>({upcomingBookings.length})</span>
          </h2>
        )}

        {upcomingBookings.map((booking) => {
          return (
            <div key={booking.id}>
              {booking.venue.media.length === 0 && <img src={logo} />}
              {booking.venue.media.length > 0 && <img src={booking.venue.media[0]} />}

              <h3>{booking.venue.name}</h3>
              {booking.venue.location.city !== "Unknown" && booking.venue.location.city !== "" ? <p>{booking.venue.location.city}</p> : <p>Hidden city</p>}
              {booking.venue.location.country !== "Unknown" && booking.venue.location.country !== "" ? <p>{booking.venue.location.country}</p> : <p>Faraway country</p>}
              <p>Check-in: {formatDate(booking.dateFrom)}</p>
              <p>Check-out: {formatDate(booking.dateTo)} </p>
              <p>Guests: {booking.guests}</p>
              <p>Estimated price: ${estimatePrice(booking.dateFrom, booking.dateTo, booking.venue.price)}</p>
              <Link to={`/booking-traveller/${booking.id}`}>Booking details</Link>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          );
        })}

        {pastBookings.length > 0 && <button onClick={handleShowPastBookings}>{!showPastBookings ? "Show past bookings" : "Hide past bookings"}</button>}

        {showPastBookings && (
          <div>
            <h2>
              Past bookings <span>({pastBookings.length})</span>
            </h2>
            {pastBookings.map((booking) => {
              return (
                <div key={booking.id}>
                  {booking.venue.media.length === 0 && <img src={logo} />}
                  {booking.venue.media.length > 0 && <img src={booking.venue.media[0]} />}

                  <h3>{booking.venue.name}</h3>
                  <p>Check-in: {formatDate(booking.dateFrom)}</p>
                  <p>Check-out: {formatDate(booking.dateTo)} </p>
                  <p>Guests: {booking.guests}</p>
                  <p>Estimated price: ${estimatePrice(booking.dateFrom, booking.dateTo, booking.venue.price)}</p>
                  <Link to={`/booking-traveller/${booking.id}`}>Booking details</Link>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              );
            })}
          </div>
        )}
      </MyBookingsListContainer>
    </div>
  );
}

MyBookingsList.propTypes = {
  bookings: PropTypes.array.isRequired,
};
