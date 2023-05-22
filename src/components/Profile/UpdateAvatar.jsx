import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PropTypes } from "prop-types";
import { useState } from "react";
import UpdateAvatarAPICall from "./UpdateAvatarAPICall";

const schema = yup.object().shape({
  avatar: yup.string().url("Please enter a valid URL").required("A URL is required"),
});

export default function UpdateAvatar({ setAvatarForm, setChangeAvatarButton }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [formDataCreated, setFormDataCreated] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    setFormDataCreated(true);
    setFormData(data);
  };

  const hideAvatarForm = () => {
    setAvatarForm(false);
    setChangeAvatarButton(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Update avatar</h2>

        <label htmlFor="url" hidden>
          Avatar URL
        </label>
        <input type="text" id="url" name="avatar" placeholder="http://..." {...register("avatar")} />
        <p>{errors.avatar?.message}</p>

        <button type="submit">Update avatar</button>
        <button onClick={hideAvatarForm}>Cancel</button>

        {formDataCreated && formData && <UpdateAvatarAPICall data={formData} />}
      </form>
    </div>
  );
}

UpdateAvatar.propTypes = {
  userInfo: PropTypes.func.isRequired,
  setAvatarForm: PropTypes.func.isRequired,
  setChangeAvatarButton: PropTypes.func.isRequired,
};
