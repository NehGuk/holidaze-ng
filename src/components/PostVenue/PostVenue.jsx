import PostVenueForm from "./PostVenueForm";
import useScrollTop from "../../hooks/useScrollTop";

export default function PostVenue() {
  useScrollTop();
  return (
    <div>
      <PostVenueForm />
    </div>
  );
}
