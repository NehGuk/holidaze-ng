import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import { VenuesListContainer, VenueListGrid, VenueCard, VenueCardImg, VenueCardTitle, VenueCardRating, VenueCardCountry, VenueCardCity, VenueCardGuests, VenueCardPrice, VenueCardCTA, GreetingArea, GlobeIcon } from "./VenuesTraveller.style";
import logoemptyvenue from "../../assets/logo-empty-venue.png";
import SearchTraveller from "../Search/SearchTraveller";
import { SLinkButton, SSpanTitle, Sh1Title, Sh2CardTitle, Shr } from "../styles/globalstyles";
import { useAuthUser } from "react-auth-kit";
import NoResultsTraveller from "../Search/NoResultsTraveller";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

export default function VenuesTraveller() {
  useScrollTopAlways();

  const userInfo = useAuthUser();
  const [venueList, setVenueList] = useState([]);
  const { data, isLoading, isError, isSuccess } = useAPI(api_endpoints().getVenues);

  useEffect(() => {
    if (isSuccess) {
      setVenueList(data);
    }
  }, [isSuccess, data]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleChildData = (childData) => {
    setSearchTerm(childData);
  };

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <div>
          <GreetingArea>
            <Sh1Title>
              Welcome back, <strong>{userInfo().name}</strong>!
            </Sh1Title>
            <Sh2CardTitle $generic>Ready for your next journey?</Sh2CardTitle>
            <GlobeIcon />
          </GreetingArea>
          <SearchTraveller onChildData={handleChildData} />
          <VenuesListContainer>
            <VenueListGrid>
              {venueList
                .filter((item) => {
                  return searchTerm.toLocaleLowerCase() === "" ? item : item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.location.city.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.location.country.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
                })
                .map((venue) => {
                  return (
                    <div key={venue.id}>
                      <VenueCard>
                        {venue.media.length === 0 ? <VenueCardImg src={logoemptyvenue} /> : <VenueCardImg src={venue.media[0]} />}
                        <VenueCardTitle>
                          <Link to={`/venue/${venue.id}`}>
                            <Sh2CardTitle>{venue.name}</Sh2CardTitle>
                          </Link>
                        </VenueCardTitle>
                        <VenueCardRating>
                          <SSpanTitle>Rating: </SSpanTitle> {venue.rating}
                        </VenueCardRating>
                        <VenueCardCity>
                          {venue.location.city !== "Unknown" && venue.location.city !== "" ? (
                            <p>
                              <em>{venue.location.city}</em>
                            </p>
                          ) : (
                            <p>
                              <em>Hidden city</em>
                            </p>
                          )}
                        </VenueCardCity>
                        <VenueCardCountry>
                          {venue.location.country !== "Unknown" && venue.location.country !== "" ? (
                            <>
                              <p>
                                <em>{venue.location.country}</em>
                              </p>
                              <Shr></Shr>
                            </>
                          ) : (
                            <>
                              <p>
                                <em>Faraway country</em>
                              </p>
                              <Shr></Shr>
                            </>
                          )}
                        </VenueCardCountry>
                        <VenueCardGuests>
                          <p>
                            <SSpanTitle>Guests: </SSpanTitle> {venue.maxGuests}
                          </p>
                        </VenueCardGuests>
                        <VenueCardPrice>
                          <h4>${venue.price}</h4>
                        </VenueCardPrice>

                        <VenueCardCTA>
                          <SLinkButton to={`/venue/${venue.id}`}>Book</SLinkButton>
                        </VenueCardCTA>
                      </VenueCard>
                    </div>
                  );
                })}
            </VenueListGrid>
          </VenuesListContainer>
          {venueList.filter((item) => {
            return searchTerm.toLocaleLowerCase() === "" ? item : item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.location.city.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.location.country.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
          }).length === 0 && <NoResultsTraveller />}
        </div>
      )}
    </div>
  );
}
