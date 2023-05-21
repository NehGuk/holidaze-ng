import { useEffect } from "react";

import { RegisterGrid } from "./Register.style";
import { SLinkButton, Sh1Title } from "../styles/globalstyles";

export default function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <RegisterGrid>
      <Sh1Title>Sign up</Sh1Title>

      <SLinkButton $lightblue to="../register-traveller">
        I am a traveller
      </SLinkButton>

      <SLinkButton $lightblue to="../register-manager">
        I am a venue manager
      </SLinkButton>
    </RegisterGrid>
  );
}
