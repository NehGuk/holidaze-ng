import { PropTypes } from "prop-types";

export default function UpdateAvatar({ token, setAvatarForm, setChangeAvatarButton }) {
  console.log(token);
  console.log(setAvatarForm);

  const hideAvatarForm = () => {
    console.log("HIDINNNGGGG");
    setAvatarForm(false);
    setChangeAvatarButton(true);
  };
  return (
    <div>
      <h2>Update avatar</h2>
      <input></input>
      <button>Update avatar</button>
      <button onClick={hideAvatarForm}>Cancel</button>
    </div>
  );
}

UpdateAvatar.propTypes = {
  token: PropTypes.string.isRequired,
  setAvatarForm: PropTypes.object.isRequired,
  setChangeAvatarButton: PropTypes.object.isRequired,
};
