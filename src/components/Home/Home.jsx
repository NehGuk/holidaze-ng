import { useIsAuthenticated } from "react-auth-kit";
import HomeLoggedOut from "./HomeLoggedOut/HomeLoggedOut";
import { Navigate } from "react-router-dom";

export default function Home() {
  const userAuth = useIsAuthenticated();

  return (
    <div>
      {!userAuth() && <HomeLoggedOut />}
      {userAuth() && <Navigate to="/home" />}
    </div>
  );
}
