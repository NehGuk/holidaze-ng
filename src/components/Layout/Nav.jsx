import { Link } from "react-router-dom";
import { NavLoggedOut } from "./Nav.style";

export default function Nav() {
  return (
    <NavLoggedOut>
      <div>Logo</div>
      <div>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </div>
    </NavLoggedOut>
  );
}
