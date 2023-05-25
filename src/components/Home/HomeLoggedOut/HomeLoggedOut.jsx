import Venues from "../../Venues/Venues";
import useScrollTopAlways from "../../../hooks/useScrollTopAlways";

export default function HomeLoggedOut() {
  useScrollTopAlways();
  return (
    <div>
      <Venues />
    </div>
  );
}
