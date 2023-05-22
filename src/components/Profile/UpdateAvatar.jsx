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

  /* const [apiError, setApiError] = useState(false); */

  const [formDataCreated, setFormDataCreated] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    setFormDataCreated(true);
    setFormData(data);

    /* try {
      const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${userInfo().name}/media`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ avatar: data.avatar }),
      });

      if (!response.ok) {
        setApiError(true);
      }
      if (response.ok) {
        setApiError(false);
        setAvatarForm(false);
        setChangeAvatarButton(true);
        // UPDATE LOCAL STORAGE
        currentUserInfo.avatar = data.avatar;
        localStorage.setItem("token_state", JSON.stringify(currentUserInfo));
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    } */
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
        {/* {apiError ? <p>An error has occurred. Please try a different URL.</p> : null} */}

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
