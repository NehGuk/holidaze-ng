import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Link to="../register-manager">I am a venue manager</Link>
      <Link to="../register-traveller">I am a traveller</Link>
    </div>
  );
}
