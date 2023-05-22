import { useAuthUser } from "react-auth-kit";

import useApi from "../../../../hooks/useAPI";
import api_endpoints from "../../../../shared/shared";
import createMethod from "../../../../utilities/createMethod";
import { useEffect } from "react";

import { BookingIcon, DashboardGrid, ManagerDashboardArea, StatsSquare, VenueIcon } from "./HomeVenueManager.style";
import { CTAArea, SLinkButton, Sh1Title } from "../../../styles/globalstyles";

export default function HomeVenueManager() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const userInfo = useAuthUser();

  const { data, isSuccess, isError } = useApi(api_endpoints(userInfo().name).getProfile, createMethod("GET"));

  const { data: data2 } = useApi(api_endpoints(userInfo().name).getVenuesManager, createMethod("GET"));
  console.log(data2);

  // TOTAL HISTORY BOOKINGS
  let totalBookingsHistory = 0;
  for (let i = 0; i < data2.length; i++) {
    totalBookingsHistory += data2[i].bookings.length;
  }
  console.log(totalBookingsHistory);
  // TOTAL HISTORY BOOKINGS END

  // TOTAL CURRENT BOOKINGS
  const today = new Date();
  const totalBookings = data2
    .flatMap((property) => property.bookings)
    .filter((booking) => new Date(booking.dateTo) >= today)
    .reduce((total, booking) => total + booking.guests, 0);

  console.log(totalBookings);
  // TOTAL CURRENT BOOKINGS END

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
