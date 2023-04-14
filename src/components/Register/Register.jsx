import { Link } from "react-router-dom";
import { RegisterGrid } from "./Register.style";

export default function Register() {
  return (
    <RegisterGrid>
      <h1>Register</h1>
      <Link to="../register-traveller">I am a traveller</Link>
      <Link to="../register-manager">I am a venue manager</Link>
    </RegisterGrid>
  );
}
