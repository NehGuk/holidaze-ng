import { CTAArea, PageArea1Container, SLinkButton, Sh1Title } from "../styles/globalstyles";

export default function BookingConfirmed() {
  return (
    <PageArea1Container>
      <Sh1Title>Nice one!</Sh1Title>
      <p>Your booking has been confirmed.</p>

      <CTAArea>
        <SLinkButton to="/my-bookings">My bookings</SLinkButton>
        <SLinkButton $lightblue to="/home">
          Back to homepage
        </SLinkButton>
      </CTAArea>
    </PageArea1Container>
  );
}
