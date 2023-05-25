import { useParams } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import ShowBookings from "../ShowBookings/ShowBookings";
import Loading from "../Loading/Loading";
/* import logo from "../../assets/logo.png"; */
import logo from "../../assets/logo-empty-venue-blue.png";
import { SLinkButton, SSpanPrice, SSpanTitle, Sh1Title, Sh2CardTitle } from "../styles/globalstyles";
import { VenueContainer, StarIcon, ParkingIcon, WifiIcon, BreakfastIcon, PetsIcon, Area1, Area2, Area3, Area4, AreaCTAs } from "./VenueLoggedOut.style";

export default function VenueLoggedOut() {
  const params = useParams();
  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(null, params.id).getVenue);
  const venueBookings = data.bookings;

  return (
    <div>
      {isError && <p>An error has occurred</p>}
      {isLoading && <Loading />}
      {isSuccess && (
        <VenueContainer>
          <Sh1Title>{data.name}</Sh1Title>
          {data.media.length === 0 && <img src={logo} alt="Holidaze logo" />}
          {data.media.length > 0 && <img src={data.media[0]} alt={`Cover image for the venue ${data.name}`} />}

          <div>
            {data.description.length > 10 && (
              <p>
                <SSpanTitle>Description: </SSpanTitle> {data.description}
              </p>
            )}
            {data.description.length < 10 && (
              <p>
                <SSpanTitle>Description: </SSpanTitle> The venue manager has not provided a description of this property yet. Please reach out to them if you want to konw more.
              </p>
            )}
          </div>

          <Area1>
            <p>
              <SSpanPrice> ${data.price}</SSpanPrice> per night
            </p>
          </Area1>

          <Area2>
            <h2>Details</h2>

            <p>
              This property accepts a maximum of <strong>{data.maxGuests}</strong> guests.
            </p>
            <div>
              <>
                <StarIcon /> <p>Rating: {data.rating}</p>
              </>
              {data.meta.wifi && (
                <>
                  <WifiIcon /> <p>Wifi </p>
                </>
              )}
              {data.meta.parking && (
                <>
                  <ParkingIcon /> <p>Parking </p>
                </>
              )}
              {data.meta.breakfast && (
                <>
                  <BreakfastIcon /> <p>Breakfast</p>
                </>
              )}
              {data.meta.pets && (
                <>
                  <PetsIcon /> <p>Pets allowed</p>
                </>
              )}
            </div>
          </Area2>

          <Area3>
            <Sh2CardTitle $details>Location</Sh2CardTitle>
            {(data.location.address === "" || data.location.address === "Unknown") && (
              <p>
                <em>For directions, please contact the owner.</em>
              </p>
            )}
            <p>
              <SSpanTitle>Address </SSpanTitle>
              {data.location.address}
            </p>
            <p>
              <SSpanTitle>City </SSpanTitle>
              {data.location.city}
            </p>
            <p>
              <SSpanTitle>Country </SSpanTitle>
              {data.location.country}
            </p>

            <Sh2CardTitle $details>Owner</Sh2CardTitle>
            <p>
              <SSpanTitle>Name</SSpanTitle> {data.owner.name}
            </p>
            <p>
              <SSpanTitle>Email </SSpanTitle>
              {data.owner.email}
            </p>
          </Area3>

          <Area4>
            <Sh2CardTitle $details>Availability</Sh2CardTitle>
            {venueBookings && <ShowBookings venueBookings={venueBookings} />}
          </Area4>

          <AreaCTAs>
            <div>
              <SLinkButton $green to="/login">
                Login to book
              </SLinkButton>
            </div>
            <div>
              <SLinkButton $green to="/register">
                Create an account
              </SLinkButton>
            </div>
            <div>
              <SLinkButton $dark to="/">
                Back
              </SLinkButton>
            </div>
          </AreaCTAs>
        </VenueContainer>
      )}
    </div>
  );
}
