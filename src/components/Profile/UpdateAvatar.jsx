import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PropTypes } from "prop-types";
import { useState } from "react";
import UpdateAvatarAPICall from "./UpdateAvatarAPICall";
import { CTAArea, Sbutton, Sinput, SpFormError } from "../styles/globalstyles";
import { FormArea } from "./UpdateAvatar.style";

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
    setFormDataCreated(true);
    setFormData(data);
  };
  const hideAvatarForm = () => {
    setAvatarForm(false);
    setChangeAvatarButton(true);
  };

  return (
    <FormArea>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="url" hidden>
          Avatar URL
        </label>
        <Sinput type="text" id="url" name="avatar" placeholder="http://..." {...register("avatar")} />

        <SpFormError>{errors.avatar?.message}</SpFormError>
        <CTAArea>
          <Sbutton $green type="submit">
            Update avatar
          </Sbutton>
          <Sbutton $negative onClick={hideAvatarForm}>
            Cancel
          </Sbutton>
        </CTAArea>
        {formDataCreated && formData && <UpdateAvatarAPICall data={formData} />}
      </form>
    </FormArea>
  );
}

UpdateAvatar.propTypes = {
  userInfo: PropTypes.func.isRequired,
  setAvatarForm: PropTypes.func.isRequired,
  setChangeAvatarButton: PropTypes.func.isRequired,
};
