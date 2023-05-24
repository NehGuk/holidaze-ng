import { Link } from "react-router-dom";
import { PageArea1Container, Sh1Title } from "../styles/globalstyles";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

export default function RegistrationSuccess() {
  useScrollTopAlways();

  return (
    <PageArea1Container>
      <Sh1Title>Welcome!</Sh1Title>
      <p>
        Registration successful. Please <Link to="/login">log in</Link>.
      </p>
    </PageArea1Container>
  );
}
