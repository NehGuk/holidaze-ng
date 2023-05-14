import { Link } from "react-router-dom";
import { NavLoggedOutStyle, LinkStyled1, LinkStyled2 } from "./NavLoggedOut.style";
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
        <LinkStyled1 to="login">Login</LinkStyled1>
        <LinkStyled2 to="register">Register</LinkStyled2>
      </div>
    </NavLoggedOutStyle>
  );
}
