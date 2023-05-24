import { useParams } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import estimatePrice from "../../utilities/estiamatePrice";
import { BookingDetails, BookingVenueManagerContainer, GuestDetails, VenueDetails } from "./BookingVenueManager.style";
import formatDate from "../../utilities/formatDate";
import { CTAArea, SLinkButton, Sh1Title, SpWarning } from "../styles/globalstyles";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";
import createMethod from "../../utilities/createMethod";

export default function BookingVenueManager() {
  useScrollTopAlways();
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(null, null, id).getBooking, createMethod("GET"));

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <div>
          <BookingVenueManagerContainer>
            <Sh1Title>Booking</Sh1Title>
            <SpWarning>ID: {data.id}</SpWarning>

            <BookingDetails>
              <p>
                <span>Check-in:</span> {formatDate(data.dateFrom)}
              </p>
              <p>
                <span>Check-out:</span> {formatDate(data.dateTo)}
              </p>
              <p>
                <span>Estimated price:</span> ${estimatePrice(data.dateFrom, data.dateTo, data.venue.price)}{" "}
              </p>
            </BookingDetails>

            <GuestDetails>
              <h2>Guest details</h2>
              <p>
                <span>Guest name:</span> {data.customer.name}
              </p>
              <p>
                <span>Guest email:</span> {data.customer.email}
              </p>
              <p>
                <span>Number of guests:</span> {data.guests}
              </p>
            </GuestDetails>

            <VenueDetails>
              <h2>Venue details</h2>
              <p>
                <span>Venue name:</span> <Link to={`/venue/${data.venue.id}`}>{data.venue.name}</Link>{" "}
              </p>
              <p>
                <span>Price per night:</span> ${data.venue.price}
              </p>
            </VenueDetails>

            <CTAArea>
              <SLinkButton to="/all-bookings">All bookings</SLinkButton>
              <SLinkButton to="/home">Back to home</SLinkButton>
            </CTAArea>
          </BookingVenueManagerContainer>
        </div>
      )}
    </div>
  );
}
