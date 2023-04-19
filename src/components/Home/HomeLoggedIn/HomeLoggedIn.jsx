import { useEffect } from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export default function HomeLoggedIn() {
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  console.log(isAuth());

  useEffect(() => {
    if (isAuth() === false) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {isAuth() === false && <h2>You are logged out.</h2>}
      {isAuth() === true && <h2>Logged innnn</h2>}
    </div>
  );
}
