import { Link } from "react-router-dom";
import { NavVenueManagerStyle } from "./NavVenueManager.style";

export default function NavVenueManager() {
  return (
    <NavVenueManagerStyle>
      <div>Logo Nav Venue managerrrr</div>
      <div>
        <Link to="login">Link 1</Link>
        <Link to="register">Link 2</Link>
        <button>Sing out</button>
        <p>name and avatar</p>
      </div>
    </NavVenueManagerStyle>
  );
}
