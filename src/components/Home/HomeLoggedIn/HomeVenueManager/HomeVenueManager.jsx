import { useAuthUser } from "react-auth-kit";
import useApi from "../../../../hooks/useAPI";
import api_endpoints from "../../../../shared/shared";
import createMethod from "../../../../utilities/createMethod";
import { BookingIcon, DashboardGrid, ManagerDashboardArea, StatsSquare, VenueIcon } from "./HomeVenueManager.style";
import { CTAArea, SLinkButton, Sh1Title } from "../../../styles/globalstyles";
import useScrollTopAlways from "../../../../hooks/useScrollTopAlways";

export default function HomeVenueManager() {
  useScrollTopAlways();
  const userInfo = useAuthUser();
  const { data, isSuccess, isError } = useApi(api_endpoints(userInfo().name).getProfile, createMethod("GET"));
  const { data: data2 } = useApi(api_endpoints(userInfo().name).getVenuesManager, createMethod("GET"));
  let totalBookingsHistory = 0;
  for (let i = 0; i < data2.length; i++) {
    totalBookingsHistory += data2[i].bookings.length;
  }

  return (
    <ManagerDashboardArea>
      {isError && <p>An error has occurred</p>}
      {isSuccess && (
        <>
          <Sh1Title>
            Welcome back, <strong>{userInfo().name}</strong>!
          </Sh1Title>

          <DashboardGrid>
            <div>
              <StatsSquare>
                <VenueIcon />
                <p>
                  You are currently managing <span> {data._count.venues} venues</span>
                </p>
              </StatsSquare>
            </div>
            <div>
              <StatsSquare $secondary>
                <BookingIcon />
                <p>
                  Your venues have been booked <span> {totalBookingsHistory} times</span>
                </p>
              </StatsSquare>
            </div>
            <div>
              <h2>What is next? Here are a few suggestions:</h2>
            </div>
            <div>
              <CTAArea>
                <SLinkButton $green to="/post-new-venue">
                  Create new venue
                </SLinkButton>
                <SLinkButton $white to="/my-venues">
                  See my venues
                </SLinkButton>

                <SLinkButton $white to="/all-bookings">
                  See upcoming bookings
                </SLinkButton>
              </CTAArea>
            </div>
          </DashboardGrid>
        </>
      )}
    </ManagerDashboardArea>
  );
}
