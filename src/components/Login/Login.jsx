import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginFormContainer, RegisterAsOther } from "./Login.style";
import LoginAPICall from "./LoginAPICall";
import { Sh1Title, SpFormError, Sinput, SRegButton } from "../styles/globalstyles";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid @noroff.no email address")
    .matches(/^[\w\-.]+@(stud\.)?noroff\.no$/, "Enter a valid @noroff.no email address")
    .required("Please enter your email address"),
  password: yup.string().required("Please enter your password").min(8, "Password should be at least 8 characters"),
});

export default function Login() {
  useScrollTopAlways();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [data, setData] = useState(null);
  const [createFormData, setCreateFormData] = useState(false);
  const onSubmit = async (data) => {
    setData(data);
    setCreateFormData(true);
  };

  return (
    <div>
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
        </LoginFormContainer>
      </form>
      <RegisterAsOther>
        Or <Link to="/register">click here</Link> to create an account.
      </RegisterAsOther>
    </div>
  );
}
