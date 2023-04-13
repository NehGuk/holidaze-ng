import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    userName: yup.string().min(3, "Your user name should be at least 3 characters.").required("Please enter your user name"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address")
      .required("Please enter a valid email address"),
    avatar: yup.string().min(3, "The avatar should be a valid image URL").required("Please enter a avatar"),
    password: yup.string().min(3, "The password should be at least 3 characters").required("Please enter a password"),
  })
  .required();

export default function RegisterManager() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    console.log(data);
    console.log("Submitting the form");
    console.log("Add the admin true or false to the form object");
    console.log("Send the data to the API");
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

        <label htmlFor="avatar" hidden>
          Avatar
        </label>
        <input name="avatar" {...register("avatar")} placeholder="Avatar" />
        <p>{errors.avatar?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
