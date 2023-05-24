import { useEffect, useState } from "react";
import useApi from "../../hooks/useAPI";
import { useAuthUser } from "react-auth-kit";
import { MyVenuesGrid, MyVenuesListContainer } from "./VenuesVenueManager.style";
import api_endpoints from "../../shared/shared";
import Loading from "../Loading/Loading";
import logo from "../../assets/logo.png";
import { CTAArea, SLinkButton, SSpanTitle, Sh1Title } from "../styles/globalstyles";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";
import createMethod from "../../utilities/createMethod";

export default function VenuesVenueManager() {
  useScrollTopAlways();
  const userInfo = useAuthUser();
  const { data, isLoading, isError, isSuccess } = useApi(api_endpoints(userInfo().name).getVenuesManager, createMethod("GET"));
  const [myVenuesList, setMyVenuesList] = useState([]);
  useEffect(() => {
    if (data.length !== 0) {
      setMyVenuesList(data);
    }
  }, [data]);

  return (
    <div>
      <MyVenuesListContainer>
        <Sh1Title>My venues</Sh1Title>

        {myVenuesList.length === 0 && <h2>You are not managing any venues yet.</h2>}
        {myVenuesList.length > 0 && <h2>You are currently managing {myVenuesList.length} venues.</h2>}

        {/* {myVenuesList.length === 0 && (
          <div>
            <div>
              <Link to="/post-new-venue">Create new venue</Link>
            </div>
          </div>
        )} */}
        {isLoading && <Loading />}
        {isError && <p>An error has occurred</p>}
        {isSuccess && (
          <div>
            {myVenuesList.map((item) => (
              <div key={item.id}>
                <MyVenuesGrid>
                  <div>
                    {item.media.length === 0 && <img src={logo} />}
                    {item.media.length > 0 && <img src={item.media[0]} />}
                    {/* <img src={imgtest} /> */}
                  </div>

                  <div>
                    <div>
                      <h3>{item.name}</h3>
                    </div>

                    <div>
                      <p>{item.location.city}</p>
                    </div>

                    <div>
                      <p>{item.location.country}</p>
                    </div>

                    <div>
                      <p>
                        <strong>${item.price}</strong> per night
                      </p>
                    </div>

                    <div>
                      <p>
                        <SSpanTitle>Rating: {item.rating}</SSpanTitle>
                      </p>
                    </div>

                    <div>
                      <p>
                        {item.bookings.length === 0 && <>This venue has no bookings yet.</>}
                        {item.bookings.length === 1 && <>This venue has 1 booking.</>}
                        {item.bookings.length > 1 && <>This venue has {item.bookings.length} bookings.</>}
                      </p>
                    </div>

                    <div>
                      <SLinkButton to={`/venue/${item.id}`}>Manage</SLinkButton>
                    </div>
                  </div>
                </MyVenuesGrid>
              </div>
            ))}
          </div>
        )}
        <CTAArea>
          <SLinkButton $green to="/post-new-venue">
            Create new venue
          </SLinkButton>
        </CTAArea>
      </MyVenuesListContainer>
    </div>
  );
}
