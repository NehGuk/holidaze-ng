import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import { VenuesListContainer, VenueCard } from "./Venues.style";
import logo from "../../assets/logo.png";

import Search from "../Search/Search";

export default function Venues() {
  console.log("MOUNTING Venues component");
  const [venueList, setVenueList] = useState([]);
  const { data, isLoading, isError, isSuccess } = useAPI(api_endpoints().getVenues);

  useEffect(() => {
    if (isSuccess) {
      setVenueList(data);
    }
  }, [isSuccess, data]);

  // GETTING THE SEARCH TERM FROM THE CHILD COMPONENT
  const [searchTerm, setSearchTerm] = useState("");
  const handleChildData = (childData) => {
    setSearchTerm(childData);
    console.log(searchTerm);
  };

  // GETTING THE SEARCH TERM FROM THE CHILD COMPONENT END

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <div>
          <Search onChildData={handleChildData} />
          <VenuesListContainer>
            {venueList
              .filter((item) => {
                return searchTerm.toLocaleLowerCase() === "" ? item : item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
              })
              .map((venue) => {
                return (
                  <div key={venue.id}>
                    <VenueCard>
                      <Link to={`/venue/${venue.id}`}>{venue.media.length === 0 ? <img src={logo} /> : <img src={venue.media[0]} />}</Link>
                      <Link to={`/venue/${venue.id}`}>
                        <h3>{venue.name}</h3>
                      </Link>
                      {venue.location.city !== "Unknown" && venue.location.city !== "unknown" ? <p>{venue.location.city}</p> : <p></p>}
                      {venue.location.country !== "Unknown" && venue.location.country !== "unknown" && venue.location.country.length > 2 ? <p>{venue.location.country}</p> : <p>Planet Earth</p>}
                      <p>Maximum guests: {venue.maxGuests}</p>
                      <p>${venue.price}</p>
                    </VenueCard>
                  </div>
                );
              })}
          </VenuesListContainer>
        </div>
      )}
    </div>
  );
}
