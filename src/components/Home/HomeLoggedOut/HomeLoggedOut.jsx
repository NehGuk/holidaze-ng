import { useEffect } from "react";
import Venues from "../../Venues/Venues";
/* import Welcome from "../Welcome"; */

export default function HomeLoggedOut() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <h2>HomeLoggedOut Component</h2> */}
      {/* <Welcome /> */}
      <Venues />
    </div>
  );
}
