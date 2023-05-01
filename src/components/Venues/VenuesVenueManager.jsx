import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useApiVenuesVenueManager from "../../hooks/useAPIVenuesVenueManager";
import { useAuthUser } from "react-auth-kit";
import { VenueManagerMyVenuesList } from "./VenuesVenueManager.style";

export default function VenuesVenueManager() {
  console.log("MOUNTED TWICE?");
  const userInfo = useAuthUser();

  const { data, isLoading, isError } = useApiVenuesVenueManager(`https://api.noroff.dev/api/v1/holidaze/profiles/${userInfo().name}/venues`);

  const [myVenuesList, setMyVenuesList] = useState([]);

  useEffect(() => {
    if (data.length !== 0) {
      setMyVenuesList(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>LOADINNNGGG loading component</div>;
  }
  if (isError) {
    return <div>ERRORRR component</div>;
  }

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
