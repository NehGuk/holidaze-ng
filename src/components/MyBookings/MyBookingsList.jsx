import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import estimatePrice from "../../utilities/estiamatePrice";
import formatDate from "../../utilities/formatDate";
import { MyBookingsGrid, MyBookingsListContainer } from "./MyBookingsList.style";
import { useState } from "react";
import logo from "../../assets/logo.png";
/* import imgtest from "../../assets/hero3.jpg"; */
import { Sh1Title, Shr2, SLinkButton, SSpanTitle } from "../styles/globalstyles";

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
        <Sh1Title>My bookings</Sh1Title>
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
              <MyBookingsGrid>
                <div>
                  {booking.venue.media.length === 0 && <img src={logo} />}
                  {booking.venue.media.length > 0 && <img src={booking.venue.media[0]} />}
                  {/* <img src={booking.venue.media[0]} /> */}
                </div>
                <div>
                  <div>
                    <h3>{booking.venue.name}</h3>
                  </div>
                  <Shr2></Shr2>
                  <div>
                    <p>
                      <SSpanTitle>Check-in:</SSpanTitle> {formatDate(booking.dateFrom)}
                    </p>
                  </div>
                  <div>
                    <p>
                      <SSpanTitle>Check-out:</SSpanTitle> {formatDate(booking.dateTo)}{" "}
                    </p>
                  </div>
                  <div>
                    <p>
                      <SSpanTitle>Guests:</SSpanTitle> {booking.guests}
                    </p>
                  </div>
                  <div>
                    <p>
                      <SSpanTitle>Estimated price:</SSpanTitle> ${estimatePrice(booking.dateFrom, booking.dateTo, booking.venue.price)}
                    </p>
                  </div>
                  {/* <div>{booking.venue.location.city !== "Unknown" && booking.venue.location.city !== "" ? <p>{booking.venue.location.city}</p> : <p>Hidden city</p>}</div>
                  <div>{booking.venue.location.country !== "Unknown" && booking.venue.location.country !== "" ? <p>{booking.venue.location.country}</p> : <p>Faraway country</p>}</div> */}
                  <div>
                    <SLinkButton $lightblue to={`/booking-traveller/${booking.id}`}>
                      Booking details
                    </SLinkButton>
                  </div>
                </div>
              </MyBookingsGrid>
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
