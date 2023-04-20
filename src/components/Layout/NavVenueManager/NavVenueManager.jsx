import { Link } from "react-router-dom";
import { NavVenueManagerStyle } from "./NavVenueManager.style";
import { useSignOut, useAuthUser } from "react-auth-kit";
import logo from "../../../assets/logo.png";
import { LogoImg } from "./NavVenueManager.style";
import avatar from "../../../assets/avatar.png";
import { AvatarImg } from "./NavVenueManager.style";

export default function NavVenueManager() {
  const signOut = useSignOut();
  const userInfo = useAuthUser();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <NavVenueManagerStyle>
      <div>
        <Link to="/homein">
          <LogoImg src={logo} />
          Logo Nav Venue Manager:
        </Link>
      </div>
      <div>
        <Link to="login">Link 1</Link>
        <Link to="register">Link 2</Link>
        <button onClick={handleSignOut}>Sing out</button>
        <p>{userInfo().name}</p>
        <AvatarImg src={avatar} />
      </div>
    </NavVenueManagerStyle>
  );
}
