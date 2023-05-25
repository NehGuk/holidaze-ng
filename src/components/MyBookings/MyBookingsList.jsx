import PropTypes from "prop-types";
import estimatePrice from "../../utilities/estiamatePrice";
import formatDate from "../../utilities/formatDate";
import { MyBookingsGrid, MyBookingsListContainer } from "./MyBookingsList.style";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CTAArea, Sbutton, Sh1Title, Shr2, SLinkButton, SSpanTitle } from "../styles/globalstyles";

export default function MyBookingsList({ bookings }) {
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
              No worries! Check out our <Link to="/home">home page</Link> and find the perfect place to stay!
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

        <CTAArea>
          {pastBookings.length > 0 && (
            <Sbutton $negative onClick={handleShowPastBookings}>
              {!showPastBookings ? "Show past bookings" : "Hide past bookings"}
            </Sbutton>
          )}
        </CTAArea>
        {showPastBookings && (
          <div>
            <h2>
              Past bookings <span>({pastBookings.length})</span>
            </h2>
            {pastBookings.map((booking) => {
              return (
                <div key={booking.id}>
                  <MyBookingsGrid>
                    <div>
                      {booking.venue.media.length === 0 && <img src={logo} />}
                      {booking.venue.media.length > 0 && <img src={booking.venue.media[0]} />}
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
          </div>
        )}
      </MyBookingsListContainer>
    </div>
  );
}

MyBookingsList.propTypes = {
  bookings: PropTypes.array.isRequired,
};
