// Form stuff
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Form stuff end

import { PropTypes } from "prop-types";

// Yup schema
const schema = yup.object().shape({
  avatar: yup.string().url("Please enter a valid URL").required("This field is required"),
});
// Yup schema end

export default function UpdateAvatar({ token, setAvatarForm, setChangeAvatarButton }) {
  // More form stuff
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // More form stuff end

  // Function onSubmit
  const onSubmit = () => {
    console.log("DO SOMTHING ON SUBMITTTT YEYYYY");
    console.log("SUBMITTINGGG THE FORM DATAAA YAYY");
  };

  // Function onSubmit end

  console.log(token);
  console.log(setAvatarForm);

  const hideAvatarForm = () => {
    setAvatarForm(false);
    setChangeAvatarButton(true);
  };

  /* const handleUpdateAvatarButton = (e) => {
    e.preventDefault();
    // Creates an object with the avatar URL
    const formData = new FormData(e.target.form);
    const formDataReady = Object.fromEntries(formData);
    console.log(formDataReady);
  }; */

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Update avatar</h2>

        <label htmlFor="url" hidden>
          Avatar URL
        </label>
        <input type="text" id="url" name="avatar" placeholder="http://www..." {...register("avatar")} />
        <p>{errors.avatar?.message}</p>

        <button type="submit">Update avatar</button>
        <button onClick={hideAvatarForm}>Cancel</button>
      </form>
    </div>
  );
}

UpdateAvatar.propTypes = {
  token: PropTypes.string.isRequired,
  setAvatarForm: PropTypes.func.isRequired,
  setChangeAvatarButton: PropTypes.func.isRequired,
};
