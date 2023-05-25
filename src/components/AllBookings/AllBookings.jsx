import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { useAuthUser } from "react-auth-kit";
import createMethod from "../../utilities/createMethod";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import formatDate from "../../utilities/formatDate";
import { AllBookingsGrid, AllBookingsListContainer } from "./AllBookings.style";
import logo from "../../assets/logo.png";
import { CTAArea, SLinkButton, SSpanTitle, Sbutton } from "../styles/globalstyles";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

export default function AllBookings() {
  useScrollTopAlways();
  const userInfo = useAuthUser();
  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(userInfo().name).getVenuesManager, createMethod("GET"));
  const [totalBookings, setTotalBookings] = useState(0);
  const countTotalBookings = () => {
    const totalBookings = data.reduce((acc, venue) => acc + venue.bookings.length, 0);
    setTotalBookings(totalBookings);
    return totalBookings;
  };

  useEffect(() => {
    countTotalBookings();
  }, [data]);

  const [venuesWithBookings, setVenuesWithBookings] = useState([]);
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].bookings.length !== 0) {
        venuesWithBookings.push(data[i]);
        setVenuesWithBookings(venuesWithBookings);
      }
    }
  }, [data]);

  const bookingsArray = venuesWithBookings
    .map((property) => {
      return property.bookings.map((booking) => {
        return { name: property.name, media: property.media, createdOn: property.created, price: property.price, city: property.location.city, country: property.location.country, ...booking };
      });
    })
    .flat();

  const bookingsArrayChronologically = bookingsArray.sort((a, b) => {
    const dateA = new Date(a.dateFrom);
    const dateB = new Date(b.dateFrom);
    return dateA - dateB;
  });

  const today = new Date();
  const pastBookings = bookingsArrayChronologically.filter((item) => new Date(item.dateTo) < today);
  const currentBookings = bookingsArrayChronologically.filter((obj) => new Date(obj.dateFrom) >= today);
  const [showPastBookings, setShowPastBookings] = useState(false);
  const handleShowPastBookings = () => {
    setShowPastBookings(!showPastBookings);
  };

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <AllBookingsListContainer>
          <div>
            <h1>My bookings</h1>

            {currentBookings.length === 0 && (
              <>
                <h2>No active bookings.</h2>
                <SLinkButton $dark to="/home">
                  Back to home
                </SLinkButton>
              </>
            )}
            {currentBookings.length > 0 && (
              <div>
                <h2>Active bookings &#40;{currentBookings.length}&#41;</h2>
                {currentBookings.map((booking) => {
                  return (
                    <div key={booking.id}>
                      <AllBookingsGrid>
                        <div>
                          {booking.media.length === 0 && <img src={logo} />}
                          {booking.media.length > 0 && <img src={booking.media[0]} />}
                        </div>
                        <div>
                          <h3>{booking.name}</h3>

                          <p>
                            <SSpanTitle>Check-in:</SSpanTitle> {formatDate(booking.dateFrom)}
                          </p>
                          <p>
                            <SSpanTitle>Check-out:</SSpanTitle> {formatDate(booking.dateTo)}
                          </p>
                          <p>
                            <SSpanTitle>Guests:</SSpanTitle> {booking.guests}
                          </p>

                          <p>
                            <SSpanTitle>Booking ID:</SSpanTitle> {booking.id}
                          </p>

                          <p></p>

                          <div>
                            <SLinkButton $lightblue to={`/booking-venue-manager/${booking.id}`}>
                              Details
                            </SLinkButton>
                          </div>
                        </div>
                      </AllBookingsGrid>
                    </div>
                  );
                })}
              </div>
            )}

            {pastBookings.length !== 0 && (
              <div>
                <CTAArea>
                  <Sbutton $negative onClick={handleShowPastBookings}>
                    {!showPastBookings ? "Show past bookings" : "Hide past bookings"}
                  </Sbutton>
                </CTAArea>

                {showPastBookings && (
                  <div>
                    <h2>Past bookings &#40;{totalBookings - currentBookings.length}&#41;</h2>

                    {pastBookings.map((booking) => {
                      return (
                        <div key={booking.id}>
                          <AllBookingsGrid>
                            <div>
                              {booking.media.length === 0 && <img src={logo} />}
                              {booking.media.length > 0 && <img src={booking.media[0]} />}
                            </div>
                            <div>
                              <h3>{booking.name}</h3>

                              <p>
                                <SSpanTitle>Check-in:</SSpanTitle> {formatDate(booking.dateFrom)}
                              </p>
                              <p>
                                <SSpanTitle>Check-out:</SSpanTitle> {formatDate(booking.dateTo)}
                              </p>
                              <p>
                                <SSpanTitle>Guests:</SSpanTitle> {booking.guests}
                              </p>

                              <p>
                                <SSpanTitle>Booking ID:</SSpanTitle> {booking.id}
                              </p>

                              <p></p>

                              <div>
                                <SLinkButton $lightblue to={`/booking-venue-manager/${booking.id}`}>
                                  Details
                                </SLinkButton>
                              </div>
                            </div>
                          </AllBookingsGrid>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </AllBookingsListContainer>
      )}
    </div>
  );
}
