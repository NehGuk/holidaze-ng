import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import { VenuesListContainer, VenueListGrid, VenueCard, VenueCardImg, VenueCardTitle, VenueCardRating, VenueCardCountry, VenueCardCity, VenueCardGuests, VenueCardPrice, VenueCardCTA, FilterButtonsArea } from "./Venues.style";
import logoemptyvenue from "../../assets/logo-empty-venue.png";
import Search from "../Search/Search";
import NoResults from "../Search/NoResults";
import { SLinkButton, SSpanTitle, Sh2CardTitle, Shr } from "../styles/globalstyles";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function Venues() {
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
  const venuesListRef = useRef(null);
  const scrollToVenuesList = () => {
    venuesListRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleOldestFirst = () => {
    setOrder(api_endpoints().getVenuesAsc);
  };

  const handleNewestFirst = () => {
    setOrder(api_endpoints().getVenues);
  };

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <ErrorPage />}
      {isSuccess && (
        <div>
          <Search onChildData={handleChildData} scrollToVenuesList={scrollToVenuesList} />
          <VenuesListContainer ref={venuesListRef}>
            <FilterButtonsArea>
              <button onClick={handleNewestFirst}>Newest first</button>
              <button onClick={handleOldestFirst}>Oldest first</button>
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
          }).length === 0 && <NoResults />}
        </div>
      )}
    </div>
  );
}
