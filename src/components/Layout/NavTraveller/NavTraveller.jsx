import { Link } from "react-router-dom";
import { NavTravellerStyle } from "./NavTraveller.style";
import { useSignOut } from "react-auth-kit";
import logo from "../../../assets/logo.png";
import { LogoImg } from "./NavTraveller.style";

export default function NavTraveller() {
  const signOut = useSignOut();

  const handleSignOut = () => {
    signOut();
  };
  return (
    <NavTravellerStyle>
      <div>
        <Link to="/homein">
          <LogoImg src={logo} />
          Logo Nav Traveller:
        </Link>
      </div>
      <div>
        <Link to="login">Link 1</Link>
        <Link to="register">Link 2</Link>
        <button onClick={handleSignOut}>Sing out</button>
        <p>name and avatar</p>
      </div>
    </NavTravellerStyle>
  );
}
