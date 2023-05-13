import { useParams } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { BookingTravellerContainer } from "./BookingTraveller.style";
import Loading from "../Loading/Loading";
import estimatePrice from "../../utilities/estiamatePrice";
import formatDate from "../../utilities/formatDate";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import CancelBooking from "../CancelBooking/CancelBooking";
import createMethod from "../../utilities/createMethod";

export default function BookingTraveller() {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(null, null, id).getBooking, createMethod("GET"));
  const { id: bid, dateFrom, dateTo, guests, created, venue } = data;
  const [cancelClicked, setCancelClicked] = useState(false);
  const todayMidnight = new Date(new Date().setHours(0, 0, 0, 0));
  const todayEnd = new Date(new Date().setHours(23, 59, 0, 0));

  const handleCancelBookingButton = () => {
    setCancelClicked(!cancelClicked);
  };

  return (
    <div>
      {isError && <p>An error has occurred</p>}
      {isLoading && <Loading />}
      {isSuccess && (
        <BookingTravellerContainer>
          <h2>Booking</h2>

          {venue.media.length === 0 && <img src={logo} />}
          {venue.media.length > 0 && <img src={venue.media[0]} />}

          <h2>{venue.name}</h2>
          <p>Check-in: {formatDate(dateFrom)}</p>
          <p>Check-out: {formatDate(dateTo)}</p>
          <p>Number of guests: {guests}</p>
          <p>Estimated cost: ${estimatePrice(dateFrom, dateTo, venue.price)}</p>
          <p>Booked on {formatDate(created)}</p>
          <p>Booking ID: {bid}</p>

          <h3>Venue details</h3>
          {(venue.location.address === "" || venue.location.address === "Unknown") && <p>For directions, please contact the owner.</p>}
          <p>Address: {venue.location.address}</p>
          <p>City: {venue.location.city}</p>
          <p>Country: {venue.location.country}</p>
          <p>Price per night: ${venue.price}</p>

          {venue.meta.wifi && <p>wifi</p>}
          {venue.meta.parking && <p>parking</p>}
          {venue.meta.breakfast && <p>breakfast</p>}
          {venue.meta.pets && <p>pets allowed</p>}

          {new Date(dateFrom) >= todayEnd && <div>{!cancelClicked && <button onClick={handleCancelBookingButton}>Cancel this booking</button>}</div>}
          {new Date(dateTo) < todayMidnight && <h3>This booking is no longer active.</h3>}
          {new Date() <= new Date(dateTo).setHours(23, 59, 0, 0) && new Date() >= new Date(dateFrom).setHours(0, 0, 0, 0) && <p>This booking is currently ongoing. Enjoy your stay!</p>}
          {cancelClicked && <CancelBooking setCancelClicked={setCancelClicked} bid={bid} />}

          <Link to="/my-bookings">See all my Bookings</Link>
          <Link to="/">Back to home</Link>
        </BookingTravellerContainer>
      )}
    </div>
  );
}
