import { useParams } from "react-router-dom";
import ShowBookings from "../ShowBookings/ShowBookings";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import logo from "../../assets/logo.png";
import { SLinkButton, SSpanPrice, SSpanTitle, Sh1Title, Sh2CardTitle } from "../styles/globalstyles";
import { VenueContainer, StarIcon, ParkingIcon, WifiIcon, BreakfastIcon, PetsIcon, Area1, Area2, Area3, Area4, AreaCTAs } from "./VenueLoggedInTraveller.style";

export default function VenueLoggedInTraveller() {
  const params = useParams();
  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(null, params.id).getVenue);
  const venueBookings = data.bookings;
  const { id, name, media, description, price, rating, maxGuests, meta, location, owner } = data;

  return (
    <div>
      {isError && <p>An error has occurred</p>}
      {isLoading && <Loading />}
      {isSuccess && (
        <VenueContainer>
          <Sh1Title>{name}</Sh1Title>
          {media.length === 0 && <img src={logo} alt="Holidaze logo" />}
          {media.length > 0 && <img src={media[0]} alt={`Cover image for the venue ${name}`} />}

          <div>
            {description.length > 10 && (
              <p>
                <SSpanTitle>Description: </SSpanTitle> {description}
              </p>
            )}
            {description.length < 10 && (
              <p>
                <SSpanTitle>Description: </SSpanTitle> The venue manager has not provided a description of this property yet. Please reach out to them if you want to konw more.
              </p>
            )}
          </div>

          <Area1>
            <p>
              <SSpanPrice> ${price}</SSpanPrice> per night
            </p>
          </Area1>

          <Area2>
            <h2>Details</h2>

            <p>
              This property accepts a maximum of <strong>{maxGuests}</strong> guests.
            </p>
            <div>
              <>
                <StarIcon /> <p>Rating: {rating}</p>
              </>
              {meta.wifi && (
                <>
                  <WifiIcon /> <p>Wifi </p>
                </>
              )}
              {meta.parking && (
                <>
                  <ParkingIcon /> <p>Parking </p>
                </>
              )}
              {meta.breakfast && (
                <>
                  <BreakfastIcon /> <p>Breakfast</p>
                </>
              )}
              {meta.pets && (
                <>
                  <PetsIcon /> <p>Pets allowed</p>
                </>
              )}
            </div>
          </Area2>

          <Area3>
            <Sh2CardTitle $details>Location</Sh2CardTitle>
            {(location.address === "" || location.address === "Unknown") && (
              <p>
                <em>For directions, please contact the owner.</em>
              </p>
            )}
            <p>
              <SSpanTitle>Address </SSpanTitle>
              {location.address}
            </p>
            <p>
              <SSpanTitle>City </SSpanTitle>
              {location.city}
            </p>
            <p>
              <SSpanTitle>Country </SSpanTitle>
              {location.country}
            </p>

            <Sh2CardTitle $details>Owner</Sh2CardTitle>
            <p>
              <SSpanTitle>Name</SSpanTitle> {owner.name}
            </p>
            <p>
              <SSpanTitle>Email </SSpanTitle>
              {owner.email}
            </p>
          </Area3>

          <Area4>{venueBookings && <ShowBookings venueBookings={venueBookings} maxGuests={maxGuests} price={price} id={id} />}</Area4>
          <AreaCTAs>
            <SLinkButton to="/">Back</SLinkButton>
          </AreaCTAs>
        </VenueContainer>
      )}
    </div>
  );
}
