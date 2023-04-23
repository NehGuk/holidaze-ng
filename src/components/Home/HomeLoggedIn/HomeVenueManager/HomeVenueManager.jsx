import { useAuthUser } from "react-auth-kit";

export default function HomeVenueManager() {
  const userInfo = useAuthUser();
  return (
    <div>
      <h1>Homeeee Venue Manager</h1>
      <p>Content for the home to be displayed to the Venue Manager</p>
      <p>Info from useAuthInfo here: {userInfo().email}</p>
    </div>
  );
}
