import VenuesTraveller from "../../../Venues/VenuesTraveller";
import useScrollTopAlways from "../../../../hooks/useScrollTopAlways";

export default function HomeTraveller() {
  useScrollTopAlways();
  return (
    <div>
      <VenuesTraveller />
    </div>
  );
}
