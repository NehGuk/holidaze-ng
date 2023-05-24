import { Link } from "react-router-dom";
import { NavLoggedOutStyle, LinkStyled1, LinkStyled2 } from "./NavLoggedOut.style";
import logobluename from "../../../assets/logo-name-blue.png";
import { LogoImg } from "./NavLoggedOut.style";

export default function NavLoggedOut() {
  return (
    <NavLoggedOutStyle>
      <div>
        <Link to="/">
          <LogoImg src={logobluename} />
        </Link>
      </div>
      <div>
        <LinkStyled1 to="login">Login</LinkStyled1>
        <LinkStyled2 to="register">Sign up</LinkStyled2>
      </div>
    </NavLoggedOutStyle>
  );
}
