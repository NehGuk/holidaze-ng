import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import useApiVenuesVenueManager from "../../hooks/useAPIVenuesVenueManager";

import { useAuthUser } from "react-auth-kit";
import { VenueManagerMyVenuesList } from "./VenuesVenueManager.style";

export default function VenuesVenueManager() {
  const userInfo = useAuthUser();
  console.log(userInfo().name);

  const { data, isLoading, isError } = useApiVenuesVenueManager(`https://api.noroff.dev/api/v1/holidaze/profiles/johntest2/venues`);

  const [myVenuesList, setMyVenuesList] = useState([]);

  useEffect(() => {
    setMyVenuesList(data);
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

        <h2>VenuesVenueManager component --for my specific venues</h2>

        <p>Map below</p>

        <VenueManagerMyVenuesList>
          {myVenuesList.map((item) => (
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
        </VenueManagerMyVenuesList>
      </div>
    );
  }
}
