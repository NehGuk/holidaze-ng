import { Link } from "react-router-dom";
import { NavLoggedOutStyle } from "./NavLoggedOut.style";
import logo from "../../../assets/logo.png";
import { LogoImg } from "./NavLoggedOut.style";

export default function NavLoggedOut() {
  return (
    <NavLoggedOutStyle>
      <div>
        <Link to="/">
          <LogoImg src={logo} />
        </Link>
      </div>
      <div>
        <Link to="login">Login</Link>
        <Link to="register">Registerrrrr</Link>
      </div>
    </NavLoggedOutStyle>
  );
}
