import { Link } from "react-router-dom";

export default function DeleteVenueSuccess() {
  console.log("delete successsss");

  return (
    <div>
      <h2>Venue Successfully deleted</h2>
      <Link to="/post-new-venue">Create new venue</Link>
      <Link to="/home">Go back home</Link>
    </div>
  );
}
