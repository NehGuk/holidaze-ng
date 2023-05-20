import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginFormContainer, LoginFormStatusMessages } from "./Login.style";

import { useSignIn } from "react-auth-kit";

import { Navigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid @noroff.no email address")
    .matches(/^[\w\-.]+@(stud\.)?noroff\.no$/, "Enter a valid @noroff.no email address")
    .required("Please enter your email address"),
  password: yup.string().required("Please enter your password").min(8, "Password should be at least 8 characters"),
});

export default function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const signIn = useSignIn();

  const [goToHomeLoggedIn, setGoToHomeLoggedIn] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setError(false);

        setGoToHomeLoggedIn(true);
      }

      if (!response.ok) {
        console.log("Ops, nao deu certo!!!");
        console.log(result.errors[0].message);
        setError(true);
        setErrorMessage(result.errors[0].message);
        setSuccess(false);
      }

      signIn({ token: result.accessToken, expiresIn: 86400, tokenType: "Bearer", authState: { name: result.name, email: result.email, venueManager: result.venueManager, avatar: result.avatar } });
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div>
      {goToHomeLoggedIn && <Navigate to="/home" />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginFormContainer>
          <h2>Login</h2>

          <label htmlFor="email" hidden>
            Email:
          </label>
          <input type="email" {...register("email")} placeholder="email@stud.noroff.no" />
          {errors.email && <p>{errors.email.message}</p>}

          <label htmlFor="password" hidden>
            Password:
          </label>
          <input type="password" {...register("password")} placeholder="Password" />
          {errors.password && <p>{errors.password.message}</p>}

          <button type="submit">Login</button>

          <LoginFormStatusMessages>
            {error && <p>{errorMessage}</p>}
            {success && <p>Logged in!</p>}
            <div>
              Or click <Link to="/register">here to create an account</Link>.
            </div>
          </LoginFormStatusMessages>
        </LoginFormContainer>
      </form>
    </div>
  );
}
