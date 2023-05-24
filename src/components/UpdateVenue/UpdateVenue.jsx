import UpdateVenueForm from "./UpdateVenueForm";
import useScrollTop from "../../hooks/useScrollTop";

export default function UpdateVenue() {
  useScrollTop();
  return (
    <div>
      <UpdateVenueForm />
    </div>
  );
}
