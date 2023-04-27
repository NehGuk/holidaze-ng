import { useAuthUser } from "react-auth-kit";
import Venues from "../../../Venues/Venues";

export default function HomeTraveller() {
  const userInfo = useAuthUser();
  return (
    <div>
      <h1>Homeeee traveller</h1>
      <p>Content for the home to be displayed to the Venue Manager</p>
      <p>Info from useAuthInfo here: {userInfo().email}</p>
      <Venues />
    </div>
  );
}
