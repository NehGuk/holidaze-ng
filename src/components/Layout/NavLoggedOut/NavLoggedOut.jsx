import { Link } from "react-router-dom";
import { NavLoggedOutStyle } from "./NavLoggedOut.style";

export default function NavLoggedOut() {
  return (
    <NavLoggedOutStyle>
      <div>Logo Nav Logged Out</div>
      <div>
        <Link to="login">Login</Link>
        <Link to="register">Registerrrrr</Link>
      </div>
    </NavLoggedOutStyle>
  );
}
