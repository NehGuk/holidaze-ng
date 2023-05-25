import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { RegisterFormContainer, RegisterAsOther } from "./RegisterManager.style";
import RegisterAPICall from "./RegisterAPICall";
import { Sh1Title, Sinput, SRegButton, SpFormError } from "../styles/globalstyles";
import { Link } from "react-router-dom";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name").max(20, "Name should be no more than 20 characters"),
  email: yup
    .string()
    .email("Enter a valid @noroff.no email address")
    .matches(/^[\w\-.]+@stud\.noroff\.no$/, "Enter a valid @stud.noroff.no email address")
    .required("Please enter your email address"),
  password: yup.string().required("Please enter your password").min(8, "Password should be at least 8 characters"),
});

export default function RegisterManager() {
  useScrollTopAlways();
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
          <Sh1Title>Sign up as a venue manager</Sh1Title>
          <label htmlFor="name" hidden>
            Name:
          </label>
          <Sinput type="text" {...register("name")} placeholder="Name" />
          {errors.name && <SpFormError>{errors.name.message}</SpFormError>}

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
            Register
          </SRegButton>

          {formDataCreated && data && <RegisterAPICall data={data} />}
        </RegisterFormContainer>
      </form>
      <RegisterAsOther>
        <p>
          Or <Link to="/register-traveller">click here</Link> to sign up as a venue manager instead.
        </p>
      </RegisterAsOther>
    </div>
  );
}
