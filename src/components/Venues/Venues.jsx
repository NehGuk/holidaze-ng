import { Link } from "react-router-dom";
import useApiVenues from "../../hooks/useAPIVenues";
import { useEffect, useState } from "react";
/* import VenueCard from "./VenueCard"; */

export default function Venues() {
  const { data, isLoading, isError } = useApiVenues("https://api.noroff.dev/api/v1/holidaze/venues?_owner=true&_bookings=true");
  const [venuesList, setVenuesList] = useState([]);
  useEffect(() => {
    setVenuesList(data);
  });

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
      </div>
    );
  }
}
