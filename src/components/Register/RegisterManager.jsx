import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import RegisterSuccess from "./RegisterSuccess";

const schema = yup
  .object({
    userName: yup.string().min(3, "Your user name should be at least 3 characters.").required("Please enter your user name"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address")
      .required("Please enter a valid email address"),
    password: yup.string().min(3, "The password should be at least 3 characters").required("Please enter a password"),
  })
  .required();

export default function RegisterManager() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  function onSubmit(data) {
    data.venueManager = true;
    console.log("Submitting the form");
    console.log("Add the admin true the form object");
    console.log(data);
    console.log("Send the data to the API");
    reset();
    setFormSubmitted(true);
  }

  if (formSubmitted === true) {
    return (
      <div>
        <RegisterSuccess />
      </div>
    );
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName" hidden>
          User name
        </label>
        <input name="userName" {...register("userName")} placeholder="User name" />
        <p>{errors.userName?.message}</p>

        <label htmlFor="email" hidden>
          Email
        </label>
        <input name="email" {...register("email")} placeholder="name@email.com" />
        <p>{errors.email?.message}</p>

        <label htmlFor="password" hidden>
          Password
        </label>
        <input name="password" {...register("password")} placeholder="Password" />
        <p>{errors.password?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
