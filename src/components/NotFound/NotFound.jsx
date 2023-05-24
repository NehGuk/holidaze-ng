import useScrollTopAlways from "../../hooks/useScrollTopAlways";
import { PageArea0Container, SLinkButton, Sh1Title } from "../styles/globalstyles";

export default function NotFound() {
  useScrollTopAlways();
  return (
    <div>
      <PageArea0Container>
        <Sh1Title>Page not found</Sh1Title>
        <div>
          <SLinkButton $blue to="/">
            Back to home
          </SLinkButton>
        </div>
      </PageArea0Container>
    </div>
  );
}
