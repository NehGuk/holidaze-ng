import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
/* import { Link, Navigate } from "react-router-dom"; */
import { RegisterFormContainer } from "./RegisterManager.style";
import RegisterAPICall from "./RegisterAPICall";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name").max(20, "Name should be no more than 20 characters"),
  email: yup
    .string()
    .email("Enter a valid @noroff.no email address")
    .matches(/^[\w\-.]+@(stud\.)?noroff\.no$/, "Enter a valid @noroff.no email address")
    .required("Please enter your email address"),
  password: yup.string().required("Please enter your password").min(8, "Password should be at least 8 characters"),
});

export default function RegisterManager() {
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

  const [data, setData] = useState(null);
  const [formDataCreated, setFormDataCreated] = useState(false);

  const onSubmit = async (data) => {
    data.venueManager = true;
    setData(data);
    setFormDataCreated(true);
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

          {formDataCreated && data && <RegisterAPICall data={data} />}
        </RegisterFormContainer>
      </form>
    </div>
  );
}
