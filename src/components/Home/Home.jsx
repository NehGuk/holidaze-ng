import { useIsAuthenticated } from "react-auth-kit";
import HomeLoggedOut from "./HomeLoggedOut/HomeLoggedOut";
import { Navigate } from "react-router-dom";

export default function Home() {
  const userAuth = useIsAuthenticated();
  console.log(userAuth());

  return (
    <div>
      {/* <h2>Home component</h2> */}
      {!userAuth() && <HomeLoggedOut />}
      {userAuth() && <Navigate to="/home" />}
    </div>
  );
}
