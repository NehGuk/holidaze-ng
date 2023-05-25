import { CTAArea, PageArea1Container, SLinkButton, Sh1Title } from "../styles/globalstyles";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

export default function CancelBookingConfirmed() {
  useScrollTopAlways();

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
