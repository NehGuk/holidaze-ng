import { useEffect } from "react";

import { useIsAuthenticated } from "react-auth-kit";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export default function HomeLoggedIn() {
  const userInfo = useAuthUser();
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  console.log("HEEEERE: " + isAuth());

  useEffect(() => {
    if (isAuth() === false) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {isAuth() === false && <h2>You are logged out.</h2>}
      {isAuth() === true && <h2>Logged innnn as {userInfo().name}</h2>}
    </div>
  );
}
