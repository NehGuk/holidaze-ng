import { Link } from "react-router-dom";
import { NavVenueManagerStyle } from "./NavVenueManager.style";
import { useSignOut } from "react-auth-kit";

export default function NavVenueManager() {
  const signOut = useSignOut();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <NavVenueManagerStyle>
      <div>Logo Nav Venue managerrrr</div>
      <div>
        <Link to="login">Link 1</Link>
        <Link to="register">Link 2</Link>
        <button onClick={handleSignOut}>Sing out</button>
        <p>name and avatar</p>
      </div>
    </NavVenueManagerStyle>
  );
}
