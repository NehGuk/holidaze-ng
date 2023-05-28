import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import { VenuesListContainer, VenueListGrid, VenueCard, VenueCardImg, VenueCardTitle, VenueCardRating, VenueCardCountry, VenueCardCity, VenueCardGuests, VenueCardPrice, VenueCardCTA, GreetingArea, GlobeIcon, FilterButtonsArea, FilterBigButton, Filters } from "./VenuesTraveller.style";
import logoemptyvenue from "../../assets/logo-empty-venue.png";
import SearchTraveller from "../Search/SearchTraveller";
import { SLinkButton, SSpanTitle, Sh1Title, Sh2CardTitle, Shr } from "../styles/globalstyles";
import { useAuthUser } from "react-auth-kit";
import NoResultsTraveller from "../Search/NoResultsTraveller";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

export default function VenuesTraveller() {
  useScrollTopAlways();

  const userInfo = useAuthUser();
  const [order, setOrder] = useState(api_endpoints().getVenues);
  const [venueList, setVenueList] = useState([]);
  const { data, isLoading, isError, isSuccess } = useAPI(order);

  useEffect(() => {
    if (isSuccess) {
      setVenueList(data);
    }
  }, [isSuccess, data]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleChildData = (childData) => {
    setSearchTerm(childData);
  };

  ///
  const [showFilters, setShowFilters] = useState(false);
  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleOldestFirst = () => {
    setOrder(api_endpoints().getVenuesAsc);
  };

  const handleNewestFirst = () => {
    setOrder(api_endpoints().getVenues);
  };

  const handleLowestPrice = () => {
    const sortedByPriceVenueList = [...venueList].sort((a, b) => a.price - b.price);
    setVenueList(sortedByPriceVenueList);
  };

  const handleHighestPrice = () => {
    const sortedByPriceVenueList = [...venueList].sort((a, b) => b.price - a.price);
    setVenueList(sortedByPriceVenueList);
  };

  const handleWifi = () => {
    const venuesWifi = venueList.filter((item) => item.meta.wifi === true);
    setVenueList(venuesWifi);
  };

  const handleBreakfast = () => {
    const venuesBreakfast = venueList.filter((item) => item.meta.breakfast === true);
    setVenueList(venuesBreakfast);
  };

  const handleParking = () => {
    const venuesParking = venueList.filter((item) => item.meta.parking === true);
    setVenueList(venuesParking);
  };

  const handlePets = () => {
    const venuesPets = venueList.filter((item) => item.meta.pets === true);
    setVenueList(venuesPets);
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
            <FilterButtonsArea>
              <FilterBigButton onClick={handleShowFilters}>{!showFilters ? "Show filters" : "Hide filters"}</FilterBigButton>
              {showFilters && (
                <Filters>
                  <button onClick={handleNewestFirst}>Newest first</button>
                  <button onClick={handleOldestFirst}>Oldest first</button>
                  <button onClick={handleLowestPrice}>Lowest price</button>
                  <button onClick={handleHighestPrice}>Highest price</button>
                  <button onClick={handleWifi}>Wifi</button>
                  <button onClick={handleBreakfast}>Breakfast</button>
                  <button onClick={handleParking}>Parking</button>
                  <button onClick={handlePets}>Pets</button>
                </Filters>
              )}
            </FilterButtonsArea>

            <VenueListGrid>
              {venueList
                .filter((item) => {
                  return searchTerm.toLocaleLowerCase() === "" ? item : item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.location.city.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.location.country.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
                })
                .map((venue) => {
                  return (
                    <div key={venue.id}>
                      <VenueCard>
                        {venue.media.length === 0 ? <VenueCardImg src={logoemptyvenue} alt="Holidaze logo" /> : <VenueCardImg src={venue.media[0]} alt={`Cover image for the venue ${venue.name}`} />}
                        <VenueCardTitle>
                          <Link to={`/venue/${venue.id}`}>
                            <Sh2CardTitle>{`${venue.name}`.slice(0, 40)}</Sh2CardTitle>
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
                          <SLinkButton $lightblue to={`/venue/${venue.id}`}>
                            Book
                          </SLinkButton>
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
