import { RegisterGrid } from "./Register.style";
import { SLinkButton, Sh1Title } from "../styles/globalstyles";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

export default function Register() {
  useScrollTopAlways();

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
