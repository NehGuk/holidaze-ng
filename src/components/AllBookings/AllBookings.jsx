import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { useAuthUser } from "react-auth-kit";
import createMethod from "../../utilities/createMethod";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import formatDate from "../../utilities/formatDate";
import { Link } from "react-router-dom";
import { AllBookingsContainer } from "./AllBookings.style";
import logo from "../../assets/logo.png";

export default function AllBookings() {
  /* console.log("MOUNTING ALL BOOKINGS"); */
  const userInfo = useAuthUser();

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(userInfo().name).getVenuesManager, createMethod("GET"));

  // CALCULATE TOTAL BOOKINGS
  const [totalBookings, setTotalBookings] = useState(0);
  const countTotalBookings = () => {
    const totalBookings = data.reduce((acc, venue) => acc + venue.bookings.length, 0);
    setTotalBookings(totalBookings);
    return totalBookings;
  };

  useEffect(() => {
    countTotalBookings();
  }, [data]);
  /* console.log(totalBookings); */
  // CALCULATE TOTAL BOOKINGS END

  // TEST

  // CREATE ARRAY STATE FOR VENUES WITH BOOKINGS ONLY
  const [venuesWithBookings, setVenuesWithBookings] = useState([]);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].bookings.length !== 0) {
        /* console.log(data[i]); */
        venuesWithBookings.push(data[i]);
        setVenuesWithBookings(venuesWithBookings);
      }
    }
  }, [data]);
  /* console.log(venuesWithBookings); */
  // CREATE ARRAY STATE FOR VENUES WITH BOOKINGS ONLY END SUCCESS

  // CREATE ARRAY WITH ONE OBJECT FOR EACH BOOKING

  const bookingsArray = venuesWithBookings
    .map((property) => {
      return property.bookings.map((booking) => {
        return { name: property.name, media: property.media, createdOn: property.created, price: property.price, city: property.location.city, country: property.location.country, ...booking };
      });
    })
    .flat();

  /* console.log(bookingsArray); */

  // CREATE ARRAY WITH ONE OBJECT FOR EACH BOOKING END

  // SORT ORDER CHRONOLOGICALLY

  const bookingsArrayChronologically = bookingsArray.sort((a, b) => {
    const dateA = new Date(a.dateFrom);
    const dateB = new Date(b.dateFrom);
    return dateA - dateB;
  });
  console.log(bookingsArrayChronologically);

  // SORT ORDER CHRONOLOGICALLY END

  // CREATING AN ARRAY FOR PAST BOOKINGS
  const today = new Date();
  const pastBookings = bookingsArrayChronologically.filter((item) => new Date(item.dateTo) < today);
  /* console.log(pastBookings); */

  // CREATING AN ARRAY FOR PAST BOOKINGS END

  // CREATING AN ARRAY FOR CURRENT BOOKINGS
  const currentBookings = bookingsArrayChronologically.filter((obj) => new Date(obj.dateFrom) >= today);
  /* console.log(currentBookings); */

  // CREATING AN ARRAY FOR UPCOMING BOOKINGS END

  // TEST END

  const [showPastBookings, setShowPastBookings] = useState(false);
  const handleShowPastBookings = () => {
    setShowPastBookings(!showPastBookings);
  };

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <AllBookingsContainer>
          <div>
            <h1>My bookings</h1>
            {currentBookings.length === 0 && <p>No active bookings at the moment.</p>}
            {currentBookings.length > 0 && (
              <div>
                <p>The venues you manage have {currentBookings.length} active bookings.</p>
                <p>There are also {totalBookings - currentBookings.length} expired entries in your booking history.</p>

                <h2>Active bookings</h2>
                {currentBookings.map((booking) => {
                  return (
                    <div key={booking.id}>
                      {booking.media.length === 0 && <img src={logo} />}
                      {booking.media.length > 0 && <img src={booking.media[0]} />}

                      <h3>{booking.name}</h3>
                      <p>Check-in: {formatDate(booking.dateFrom)}</p>
                      <p>Check-out: {formatDate(booking.dateTo)}</p>
                      <p>Guests: {booking.guests}</p>
                      <p>Booking ID: {booking.id}</p>
                      <Link to={`/booking-venue-manager/${booking.id}`}>Details</Link>
                    </div>
                  );
                })}
              </div>
            )}

            {pastBookings.length !== 0 && (
              <div>
                <button onClick={handleShowPastBookings}>{!showPastBookings ? "Show past bookings" : "Close past bookings"}</button>
                {showPastBookings && (
                  <div>
                    <h2>Past bookings</h2>
                    {pastBookings.map((booking) => {
                      return (
                        <div key={booking.id}>
                          {booking.media.length === 0 && <img src={logo} />}
                          {booking.media.length > 0 && <img src={booking.media[0]} />}

                          <h3>{booking.name}</h3>
                          <p>Check-in: {formatDate(booking.dateFrom)}</p>
                          <p>Check-out: {formatDate(booking.dateTo)}</p>
                          <p>Guests: {booking.guests}</p>
                          <p>Booking ID: {booking.id}</p>
                          <Link to={`/booking-venue-manager/${booking.id}`}>Details</Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </AllBookingsContainer>
      )}
    </div>
  );
}
