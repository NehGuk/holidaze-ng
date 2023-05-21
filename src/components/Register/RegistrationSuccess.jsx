import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PageArea1Container } from "../styles/globalstyles";

export default function RegistrationSuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageArea1Container>
      <h2>Welcome!</h2>
      <p>
        Registration successful. Please <Link to="/login">log in</Link>.
      </p>
    </PageArea1Container>
  );
}
