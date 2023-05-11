import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import { VenuesListContainer, VenueCard } from "./Venues.style";
import logo from "../../assets/logo.png";

export default function Venues() {
  console.log("MOUNTING Venues component");
  const [venueList, setVenueList] = useState([]);
  const { data, isLoading, isError, isSuccess } = useAPI(api_endpoints().getVenues);
  /* const { id, media, name, price, maxGuests } = data; */
  console.log(venueList);

  useEffect(() => {
    if (isSuccess) {
      setVenueList(data);
    }
  }, [isSuccess, data]);

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <VenuesListContainer>
          {data.map((venue) => {
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
      )}
    </div>
  );
}

/* import { Link } from "react-router-dom";
import useApiVenues from "../../hooks/useAPIVenues";
import { useEffect, useState } from "react";
import { VenuesList } from "./Venues.style";

export default function Venues() {
  const { data, isLoading, isError } = useApiVenues("https://api.noroff.dev/api/v1/holidaze/venues?_owner=true&_bookings=true");
  const [venuesList, setVenuesList] = useState([]);

  useEffect(() => {
    setVenuesList(data);
  }, [data]);

  //

  //

  if (isLoading) {
    return <div>LOADINNNGGG loading component</div>;
  }
  if (isError) {
    return <div>ERRORRR component</div>;
  }

  if (data.length !== 0) {
    return (
      <div>
        {isError && <p>SOME ERRORRRR</p>}

        <h2>Venues component --for the venues list</h2>

        <p>Map below</p>

        <VenuesList>
          {venuesList.map((item) => (
            <div key={item.id}>
              <div>
                <div>
                  <Link to={`/venue/${item.id}`}>
                    <img src={item.media} />
                  </Link>
                </div>
                <div>
                  <Link to={`/venue/${item.id}`}>
                    <h3>{item.name}</h3>
                  </Link>

                  <p>${item.price}</p>
                  <p>Rating: {item.rating}</p>
                  <p>Max guests: {item.maxGuests}</p>
                </div>
              </div>
            </div>
          ))}
        </VenuesList>
      </div>
    );
  }
}
 */
