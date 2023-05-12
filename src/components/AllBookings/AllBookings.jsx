import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { useAuthUser } from "react-auth-kit";
import createMethod from "../../utilities/createMethod";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import formatDate from "../../utilities/formatDate";
import { Link } from "react-router-dom";

export default function AllBookings() {
  console.log("MOUNTING ALL BOOKINGS");
  const userInfo = useAuthUser();

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(userInfo().name).getVenuesManager, createMethod("GET"));
  console.log(data);

  const [totalBookings, setTotalBookings] = useState(0);

  // CALCULATE TOTAL BOOKINGS
  const countTotalBookings = () => {
    const totalBookings = data.reduce((acc, venue) => acc + venue.bookings.length, 0);
    console.log("Total bookings: ", totalBookings);
    setTotalBookings(totalBookings);
    return totalBookings;
  };

  useEffect(() => {
    countTotalBookings();
  }, [data]);

  // CALCULATE TOTAL BOOKINGS END

  // CREATE A STATE ARRAY WITH PAST BOOKINGS
  /* const [pastBookings, setPastBookings] = useState([]);

  useEffect(() => {
    // Filter past bookings
    const filteredBookings = data.flatMap((venue) => venue.bookings.filter((booking) => new Date(booking.dateTo) < new Date()));
    console.log("Filtered bookings: ", filteredBookings);
    setPastBookings(filteredBookings);
  }, [data]);

  console.log(pastBookings); */
  // CREATE A STATE ARRAY WITH PAST BOOKINGS END

  // CREATE A STATE ARRAY WITH UPCOMING BOOKINGS
  /* const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    // Filter past bookings
    const filteredBookings = data.flatMap((venue) => venue.bookings.filter((booking) => new Date(booking.dateTo) > new Date()));
    console.log("Filtered bookings: ", filteredBookings);
    setUpcomingBookings(filteredBookings);
  }, [data]);

  console.log(upcomingBookings); */

  // CREATE A STATE ARRAY WITH UPCOMING BOOKINGS END

  const sortedChronos = data.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));
  console.log(sortedChronos);

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <div>
          <h1>Bookings history</h1>
          <p>You have managed a total of {totalBookings} bookings.</p>

          {data.map((venue) => (
            <div key={venue.id}>
              {venue.bookings.length > 0 && (
                <div>
                  {venue.bookings
                    .sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom))
                    .map((booking) => (
                      <div key={booking.id}>
                        <img src={venue.media[0]} />
                        <h2>{venue.name}</h2>
                        <p>Booking ID: {booking.id}</p>
                        <p>Check-in: {formatDate(booking.dateFrom)}</p>
                        <p>Check-out: {formatDate(booking.dateTo)}</p>
                        <p>Number of guests: {booking.guests}</p>
                        <Link to={`/booking-venue-manager/${booking.id}`}>Details</Link>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
