import { Link } from "react-router-dom";
import { NavTravellerStyle } from "./NavTraveller.style";

export default function NavTraveller() {
  return (
    <NavTravellerStyle>
      <div>Logo Nav Travellerrrr</div>
      <div>
        <Link to="login">Link 1</Link>
        <Link to="register">Link 2</Link>
        <button>Sing out</button>
        <p>name and avatar</p>
      </div>
    </NavTravellerStyle>
  );
}
