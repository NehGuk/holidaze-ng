import { CTAArea, PageArea1Container, SLinkButton, Sh1Title } from "../styles/globalstyles";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

export default function DeleteVenueSuccess() {
  useScrollTopAlways();
  return (
    <PageArea1Container>
      <Sh1Title>Venue successfully deleted!</Sh1Title>
      <CTAArea>
        <SLinkButton $green to="/post-new-venue">
          Create new venue
        </SLinkButton>
        <SLinkButton to="/home">Back to home</SLinkButton>
      </CTAArea>
    </PageArea1Container>
  );
}
