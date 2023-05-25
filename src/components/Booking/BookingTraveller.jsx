import { useParams } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import estimatePrice from "../../utilities/estiamatePrice";
import formatDate from "../../utilities/formatDate";
import logo from "../../assets/logo.png";
import { useState } from "react";
import CancelBooking from "../CancelBooking/CancelBooking";
import createMethod from "../../utilities/createMethod";
import { CTAArea, SLinkButton, SRegButton, Sh1Title, Sh2CardTitle, SpWarning } from "../styles/globalstyles";
import { Area1, Area2, VenueContainer, ParkingIcon, WifiIcon, BreakfastIcon, PetsIcon, AreaNav } from "./BookingTraveller.style";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

export default function BookingTraveller() {
  useScrollTopAlways();
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
        <VenueContainer>
          <Sh1Title>Booking</Sh1Title>

          {venue.media.length === 0 && <img src={logo} alt="Holidaze logo" />}
          {venue.media.length > 0 && <img src={venue.media[0]} alt={`Cover image for the venue ${venue.name}`} />}

          <Area1>
            <Sh2CardTitle>{venue.name}</Sh2CardTitle>
            <p>
              <span>Check-in:</span> {formatDate(dateFrom)}
            </p>
            <p>
              <span>Check-out:</span> {formatDate(dateTo)}
            </p>
            <p>
              <span>Number of guests:</span> {guests}
            </p>
            <p>
              <span>Estimated cost:</span> ${estimatePrice(dateFrom, dateTo, venue.price)}
            </p>
            <p>
              <span>Booked on</span> {formatDate(created)}
            </p>
          </Area1>

          <SpWarning>Booking ID: {bid}</SpWarning>

          <Area2>
            <Sh2CardTitle>Venue details</Sh2CardTitle>

            {(venue.location.address === "" || venue.location.address === "Unknown") && <p>For directions, please contact the owner.</p>}
            <p>
              <span>Address:</span> {venue.location.address}
            </p>
            <p>
              <span>City:</span> {venue.location.city}
            </p>
            <p>
              <span>Country:</span> {venue.location.country}
            </p>
            <p>
              <span>Price per night:</span> ${venue.price}
            </p>
            <hr></hr>
            <h3>Facilities</h3>

            {venue.meta.wifi === false && venue.meta.parking === false && venue.meta.breakfast === false && venue.meta.pets === false && <p>This venue does not offer wifi, parking or breakfast. Pets are not allowed.</p>}

            {venue.meta.wifi && (
              <p>
                <WifiIcon />
                <span>Wifi</span>
              </p>
            )}
            {venue.meta.parking && (
              <p>
                <ParkingIcon />
                <span>Parking</span>
              </p>
            )}
            {venue.meta.breakfast && (
              <p>
                <BreakfastIcon />
                <span>Breakfast</span>
              </p>
            )}
            {venue.meta.pets && (
              <p>
                <PetsIcon />
                <span>Pet-friendly</span>
              </p>
            )}
          </Area2>

          <CTAArea>
            {new Date(dateFrom) >= todayEnd && (
              <>
                {!cancelClicked && (
                  <SRegButton $negative onClick={handleCancelBookingButton}>
                    Cancel this booking
                  </SRegButton>
                )}
              </>
            )}
            {new Date(dateTo) < todayMidnight && <h4>This booking is no longer active.</h4>}
            {new Date() <= new Date(dateTo).setHours(23, 59, 0, 0) && new Date() >= new Date(dateFrom).setHours(0, 0, 0, 0) && <h4>This booking is currently ongoing. Enjoy your stay!</h4>}
            {cancelClicked && <CancelBooking setCancelClicked={setCancelClicked} bid={bid} />}
            <hr></hr>

            <AreaNav>
              <SLinkButton $green to="/my-bookings">
                See all my bookings
              </SLinkButton>
              <SLinkButton to="/">Back to home</SLinkButton>
            </AreaNav>
          </CTAArea>
        </VenueContainer>
      )}
    </div>
  );
}
