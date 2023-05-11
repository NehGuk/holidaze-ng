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
              .filter((venue) => {
                return searchTerm.toLocaleLowerCase() === "" ? venue : venue.name.toLocaleLowerCase().includes(searchTerm);
              })
              .map((venue) => {
                return (
                  <div key={venue.id}>
                    <VenueCard>
                      <Link to={`venue/${venue.id}`}>{venue.media.length === 0 ? <img src={logo} /> : <img src={venue.media[0]} />}</Link>
                      <Link to={`venue/${venue.id}`}>
                        <h3>{venue.name}</h3>
                      </Link>
                      <p>${venue.price}</p>
                      <p>Maximum guests: {venue.maxGuests}</p>
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
