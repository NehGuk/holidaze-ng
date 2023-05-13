import { useParams } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { BookingTravellerContainer } from "./BookingTraveller.style";
import Loading from "../Loading/Loading";
import estimatePrice from "../../utilities/estiamatePrice";
import formatDate from "../../utilities/formatDate";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function BookingTraveller() {
  console.log("MOUNTING BOOKING TRAVELLER COMPONENT");
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
  console.log(data);
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  const { id: bid, dateFrom, dateTo, guests, created, venue } = data;

  return (
    <div>
      {isError && <p>An error has occurred</p>}
      {isLoading && <Loading />}
      {isSuccess && (
        <BookingTravellerContainer>
          <h2>Booking travellerrr </h2>

          {venue.media.length === 0 && <img src={logo} />}
          {venue.media.length > 0 && <img src={venue.media[0]} />}

          <p>Check-in: {formatDate(dateFrom)}</p>
          <p>Check-out: {formatDate(dateTo)}</p>
          <p>Number of guests: {guests}</p>
          <p>Estimated cost: ${estimatePrice(dateFrom, dateTo, venue.price)}</p>
          <p>Booked on {formatDate(created)}</p>
          <p>Booking ID: {bid}</p>

          <h3>Venue</h3>
          {(venue.location.address === "" || venue.location.address === "Unknown") && <p>For directions, please contact the owner.</p>}
          <p>Address: {venue.location.address}</p>
          <p>City: {venue.location.city}</p>
          <p>Country: {venue.location.country}</p>
          <p>Price per night: ${venue.price}</p>

          {venue.meta.wifi && <p>wifi</p>}
          {venue.meta.parking && <p>parking</p>}
          {venue.meta.breakfast && <p>breakfast</p>}
          {venue.meta.pets && <p>pets allowed</p>}

          <button>Cancel this booking</button>

          <Link to="/my-bookings">See all my Bookings</Link>
          <Link to="/">Back to home</Link>
        </BookingTravellerContainer>
      )}
    </div>
  );
}
