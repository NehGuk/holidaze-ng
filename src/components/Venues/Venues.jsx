import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import { VenuesListContainer, VenueListGrid, VenueCard, VenueCardImg, VenueCardTitle, VenueCardRating, VenueCardCountry, VenueCardCity, VenueCardGuests, VenueCardPrice, VenueCardCTA } from "./Venues.style";
import logoemptyvenue from "../../assets/logo-empty-venue.png";
import Search from "../Search/Search";
import NoResults from "../Search/NoResults";
import { Sh3CardTitle } from "../styles/globalstyles";
/* import { Sh3CardTitle } from "../styles/globalstyles"; */

export default function Venues() {
  console.log("MOUNTING Venues component");
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

  // scroll
  const venuesListRef = useRef(null); // step 1

  const scrollToVenuesList = () => {
    venuesListRef.current.scrollIntoView({ behavior: "smooth" }); // Step 2: Create a function to scroll to the VenuesListContainer
  };

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <div>
          <Search onChildData={handleChildData} scrollToVenuesList={scrollToVenuesList} />
          <VenuesListContainer ref={venuesListRef}>
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
                            <Sh3CardTitle>{venue.name}</Sh3CardTitle>
                          </Link>
                        </VenueCardTitle>
                        <VenueCardRating>Rating: {venue.rating}</VenueCardRating>
                        <VenueCardCity>{venue.location.city !== "Unknown" && venue.location.city !== "" ? <p>{venue.location.city}</p> : <p>Hidden city</p>}</VenueCardCity>
                        <VenueCardCountry>{venue.location.country !== "Unknown" && venue.location.country !== "" ? <p>{venue.location.country}</p> : <p>Faraway country</p>}</VenueCardCountry>
                        <VenueCardGuests>
                          <p>Maximum guests: {venue.maxGuests}</p>
                        </VenueCardGuests>
                        <VenueCardPrice>
                          <h4>${venue.price}</h4>
                        </VenueCardPrice>

                        <VenueCardCTA to={`/venue/${venue.id}`}>Book</VenueCardCTA>
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
