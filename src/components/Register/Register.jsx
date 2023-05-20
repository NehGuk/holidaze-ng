import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RegisterGrid } from "./Register.style";

export default function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <RegisterGrid>
      <h1>Sign up</h1>
      <Link to="../register-traveller">I am a traveller</Link>
      <Link to="../register-manager">I am a venue manager</Link>
    </RegisterGrid>
  );
}
