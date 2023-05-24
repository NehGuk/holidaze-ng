import { useEffect } from "react";
import { CTAArea, PageArea1Container, SLinkButton, Sh1Title } from "../styles/globalstyles";

export default function CancelBookingConfirmed() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  console.log("CONFIRMED");

  return (
    <PageArea1Container>
      <Sh1Title>Booking canceled</Sh1Title>
      <p>Your booking has been cancelled.</p>

      <CTAArea>
        <SLinkButton $lightblue to="/my-bookings">
          Back to my bookings
        </SLinkButton>
        <SLinkButton to="/">Home page</SLinkButton>
      </CTAArea>
    </PageArea1Container>
  );
}
