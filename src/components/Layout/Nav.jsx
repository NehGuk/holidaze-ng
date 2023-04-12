import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </div>
    </div>
  );
}
