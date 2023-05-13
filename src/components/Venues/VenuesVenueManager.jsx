import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
/* import useApiVenuesVenueManager from "../../hooks/useAPIVenuesVenueManager"; */
import useApi from "../../hooks/useAPI";
import { useAuthUser } from "react-auth-kit";
import { VenueManagerMyVenuesList } from "./VenuesVenueManager.style";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import logo from "../../assets/logo.png";

export default function VenuesVenueManager() {
  console.log("MOUNTED TWICE?");
  const userInfo = useAuthUser();

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(userInfo().name).getVenuesManager, options);
  /* const { data, isLoading, isError } = useApiVenuesVenueManager(`https://api.noroff.dev/api/v1/holidaze/profiles/${userInfo().name}/venues`); */

  const [myVenuesList, setMyVenuesList] = useState([]);

  useEffect(() => {
    if (data.length !== 0) {
      setMyVenuesList(data);
    }
  }, [data]);

  /*   if (isLoading) {
    return <div>LOADINNNGGG loading component</div>;
  }
  if (isError) {
    return <div>ERRORRR component</div>;
  } */

  return (
    <div>
      <h1>My venues</h1>

      <p>You are currently managing {myVenuesList.length} venues.</p>

      {isLoading && <Loading />}
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <div>
          {myVenuesList.length === 0 && (
            <div>
              <div>
                <Link to="/post-new-venue">Create new venue</Link>
              </div>
              <div>
                <img src={logo} />
              </div>
            </div>
          )}

          <VenueManagerMyVenuesList>
            {myVenuesList.map((item) => (
              <div key={item.id}>
                <div>
                  <div>
                    <Link to={`/venue/${item.id}`}>
                      {item.media.length === 0 && <img src={logo} />}
                      {item.media.length > 0 && <img src={item.media[0]} />}
                    </Link>
                  </div>
                  <div>
                    <Link to={`/venue/${item.id}`}>
                      <h3>{item.name}</h3>
                    </Link>

                    <p>${item.price}</p>
                    <p>Rating: {item.rating}</p>
                    <p>Max guests: {item.maxGuests}</p>
                    {item.bookings.length === 0 && <p>This venue has no bookings yet.</p>}
                    {item.bookings.length === 1 && <p>This venue has 1 booking.</p>}
                    {item.bookings.length > 1 && <p>This venue has {item.bookings.length} bookings.</p>}
                    <Link to={`/venue/${item.id}`}>Manage</Link>
                  </div>
                </div>
              </div>
            ))}
          </VenueManagerMyVenuesList>
        </div>
      )}
    </div>
  );
}
