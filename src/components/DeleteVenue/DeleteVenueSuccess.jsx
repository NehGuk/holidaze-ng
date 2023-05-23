/* import { Link } from "react-router-dom"; */
import { CTAArea, PageArea1Container, SLinkButton, Sh1Title } from "../styles/globalstyles";

export default function DeleteVenueSuccess() {
  console.log("delete successsss");

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
