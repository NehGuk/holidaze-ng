import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RegisterFormContainer, RegisterFormStatusMessages } from "./RegisterManager.style";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name").max(20, "Name should no more than 20 characters"),
  email: yup
    .string()
    .email("Enter a valid @noroff.no email address")
    .matches(/^[\w\-.]+@(stud\.)?noroff\.no$/, "Enter a valid @noroff.no email address")
    .required("Please enter your email address"),
  password: yup.string().required("Please enter your password").min(8, "Password should be at least 8 characters"),
});

export default function RegisterManager() {
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

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        console.log("Boaaaa, isso ae!!!!!!!");
        console.log(result);
        setSuccess(true);
        setError(false);
      }

      if (!response.ok) {
        console.log("Ops, nao deu certo!!!");
        console.log(result.errors[0].message);
        setError(true);
        setErrorMessage(result.errors[0].message);
        setSuccess(false);
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RegisterFormContainer>
          <h2>Register as a venue manager</h2>
          <label htmlFor="name" hidden>
            Name:
          </label>
          <input type="text" {...register("name")} placeholder="Name" />
          {errors.name && <p>{errors.name.message}</p>}

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

          <button type="submit">Register</button>

          <RegisterFormStatusMessages>
            {error && <p>{errorMessage}</p>}
            {success && (
              <p>
                Registration successful! Click here to <Link to="/login">Login</Link>.
              </p>
            )}
            <div>
              Register as a <Link to="/register-traveller">traveller</Link>.
            </div>
          </RegisterFormStatusMessages>
        </RegisterFormContainer>
      </form>
    </div>
  );
}
