import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginFormContainer, RegisterAsOther } from "./Login.style";
import LoginAPICall from "./LoginAPICall";
import { Sh1Title, SpFormError, Sinput, SRegButton } from "../styles/globalstyles";

/* import { useSignIn } from "react-auth-kit"; */

/* import { Navigate } from "react-router-dom"; */

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

  /* const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const signIn = useSignIn(); */

  /* const [goToHomeLoggedIn, setGoToHomeLoggedIn] = useState(false); */

  const [data, setData] = useState(null);
  const [createFormData, setCreateFormData] = useState(false);

  const onSubmit = async (data) => {
    setData(data);
    setCreateFormData(true);

    /* try {
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
    } */
  };

  return (
    <div>
      {/* {goToHomeLoggedIn && <Navigate to="/home" />} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginFormContainer>
          <Sh1Title>Login</Sh1Title>

          <label htmlFor="email" hidden>
            Email:
          </label>
          <Sinput type="email" {...register("email")} placeholder="email@stud.noroff.no" />
          {errors.email && <SpFormError>{errors.email.message}</SpFormError>}

          <label htmlFor="password" hidden>
            Password:
          </label>
          <Sinput type="password" {...register("password")} placeholder="Password" />
          {errors.password && <SpFormError>{errors.password.message}</SpFormError>}

          <SRegButton $green type="submit">
            Login
          </SRegButton>

          {createFormData && data && <LoginAPICall data={data} />}

          {/* <LoginFormStatusMessages>
            {error && <p>{errorMessage}</p>}
            {success && <p>Logged in!</p>}
          </LoginFormStatusMessages> */}
        </LoginFormContainer>
      </form>
      <RegisterAsOther>
        Or <Link to="/register">click here</Link> to create an account.
      </RegisterAsOther>
    </div>
  );
}
