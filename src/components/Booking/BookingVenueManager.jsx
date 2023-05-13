import { useParams } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import estimatePrice from "../../utilities/estiamatePrice";
import { BookingVenueManagerContainer } from "./BookingVenueManager.style";
import formatDate from "../../utilities/formatDate";
import logo from "../../assets/logo.png";

export default function BookingVenueManager() {
  console.log("MOUNTING BOOKING VENUE MANAGER");
  const { id } = useParams();
  console.log(id);

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(null, null, id).getBooking, options);

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <div>
          <BookingVenueManagerContainer>
            <h1>Booking</h1>
            <p>Booking ID: {data.id}</p>
            <p>Check-in: {formatDate(data.dateFrom)}</p>
            <p>Check-out: {formatDate(data.dateTo)}</p>
            <p>Number of guests: {data.guests}</p>
            <p>Estimated price: ${estimatePrice(data.dateFrom, data.dateTo, data.venue.price)} </p>

            <h2>Guest details</h2>
            <p>Name: {data.customer.name}</p>
            <p>Email: {data.customer.email}</p>

            <h2>Venue details</h2>
            {data.venue.media.length === 0 && <img src={logo} />}
            {data.venue.media.length > 0 && <img src={data.venue.media[0]} />}

            <p>Property name: {data.venue.name}</p>
            <p>Price per night: ${data.venue.price}</p>

            <Link to={`/venue/${data.venue.id}`}>Manage venue</Link>
            <Link to={`/my-venues`}>Check all venues I manage</Link>
            <Link to={`/all-bookings`}>See all bookings</Link>
            <Link to={`/venue/${data.venue.id}`}>Home</Link>
          </BookingVenueManagerContainer>
        </div>
      )}
    </div>
  );
}
