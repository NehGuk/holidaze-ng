import { Link } from "react-router-dom";

export default function RegistrationSuccess() {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>
        Registration successful. Please <Link to="/login">log in</Link>.
      </p>
    </div>
  );
}
