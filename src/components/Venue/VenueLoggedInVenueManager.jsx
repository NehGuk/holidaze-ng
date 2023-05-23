import { useNavigate, useParams } from "react-router-dom";

import DeleteVenue from "../DeleteVenue/DeleteVenue";
import { useState } from "react";
import useApi from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import ShowBookingsListVenueManager from "../ShowBookings/ShowBookingsListVenueManager";

import logo from "../../assets/logo.png";

import { Area1, Area2, Area3, Area4, BreakfastIcon, ParkingIcon, PetsIcon, StarIcon, VenueContainer, WifiIcon } from "./VenueLoggedInVenueManager.style";
import { CTAArea, SLinkButton, SSpanPrice, SSpanTitle, Sbutton, Sh1Title, Sh2CardTitle } from "../styles/globalstyles";

export default function VenueLoggedInVenueManager() {
  const params = useParams();
  console.log(params.id);

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(null, params.id).getVenue);

  const venueBookings = data.bookings;

  const [isDeleted, setIsDeleted] = useState(false);

  const [showBookings, setShowBookings] = useState(false);

  const navigate = useNavigate();

  const handleUpdateVenueButton = () => {
    console.log("GO TO UPDATE");
    navigate(`/venue/${params.id}/update`);
  };

  const handleDeleteButton = () => {
    console.log("DELETING VENUE");
    setIsDeleted(true);
  };

  const handleShowBookingsButton = () => {
    console.log("SHOW BOOKINGS NOWW");

    setShowBookings((prevShowBookings) => !prevShowBookings);
  };

  return (
    <VenueContainer>
      {isError && <p>An error has occurred</p>}
      {isLoading && <Loading />}
      {isSuccess && (
        <div>
          <Sh1Title>{data.name}</Sh1Title>

          {data.media.length === 0 && <img src={logo} />}
          {data.media.length > 0 && <img src={data.media[0]} />}

          <p>
            <SSpanTitle>Description: </SSpanTitle>
            {data.description}
          </p>

          <Area1>
            <p>
              <SSpanPrice>${data.price}</SSpanPrice> per night
            </p>
          </Area1>

          <Area2>
            <Sh2CardTitle>Details</Sh2CardTitle>

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
            <Sh2CardTitle>Location</Sh2CardTitle>
            <p>
              <SSpanTitle>Address: </SSpanTitle>
              {data.location.address}
            </p>
            <p>
              <SSpanTitle>City: </SSpanTitle>
              {data.location.city}
            </p>
            <p>
              <SSpanTitle>Country: </SSpanTitle>
              {data.location.country}
            </p>
          </Area3>

          <Area4>
            <CTAArea>
              <Sh2CardTitle>Admin area</Sh2CardTitle>
              <Sbutton onClick={handleUpdateVenueButton}>Update venue</Sbutton>
              {!isDeleted && <Sbutton onClick={handleDeleteButton}>Delete venue</Sbutton>}

              {isDeleted && <DeleteVenue setIsDeleted={setIsDeleted} />}
              <Sbutton onClick={handleShowBookingsButton}>{!showBookings ? "Show bookings for this venue" : "Hide bookings"}</Sbutton>

              {showBookings && <ShowBookingsListVenueManager venueBookings={venueBookings} />}

              <SLinkButton $green to="/my-venues">
                Back to my venues
              </SLinkButton>
            </CTAArea>
          </Area4>
        </div>
      )}
    </VenueContainer>
  );
}
