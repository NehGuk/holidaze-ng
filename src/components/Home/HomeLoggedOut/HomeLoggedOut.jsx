/* import Search from "../../Search/Search"; */
import Venues from "../../Venues/Venues";
import Welcome from "../Welcome";

export default function HomeLoggedOut() {
  return (
    <div>
      <h2>HomeLoggedOut Component</h2>
      <Welcome />
      {/* <Search /> */}
      <Venues />
    </div>
  );
}
