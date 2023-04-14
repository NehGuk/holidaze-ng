import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email("Please enter a valid email address").required("Please enter your email address"),
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input type="text" {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="email">Email:</label>
      <input type="email" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="password">Password:</label>
      <input type="password" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Register</button>

      {error && <p>{errorMessage}</p>}
      {success && (
        <p>
          Registration successful! Click here to <Link to="/login">Login</Link>.
        </p>
      )}
    </form>
  );
}
