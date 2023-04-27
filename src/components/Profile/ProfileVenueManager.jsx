import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthUser, useAuthHeader, useSignOut } from "react-auth-kit";
import avatar from "../../assets/avatar.png";
import UpdateAvatar from "./UpdateAvatar";
import { ProfileVenueManagerContainer } from "./ProfileVenueManager.style";

export default function ProfileVenueManager() {
  const userInfo = useAuthUser();
  const authHeader = useAuthHeader();
  const token = authHeader().split(" ")[1];
  const currentUserInfo = JSON.parse(localStorage.token_state);
  const [changeAvatarButton, setChangeAvatarButton] = useState(true);
  const [avatarForm, setAvatarForm] = useState(false);
  const navigate = useNavigate();
  const signOut = useSignOut();

  const showAvatarForm = () => {
    console.log("SHOE AVATAR FORM");
    setAvatarForm(true);
    setChangeAvatarButton(false);
  };

  const handleSignOut = () => {
    navigate("/");
    signOut();
  };

  return (
    <ProfileVenueManagerContainer>
      <div>
        <h1>Profile</h1>
        {userInfo().avatar === null && <img src={avatar} />}
        {userInfo().avatar !== null && <img src={userInfo().avatar} />}

        {changeAvatarButton && <button onClick={showAvatarForm}>Change avatar</button>}

        {avatarForm && <UpdateAvatar token={token} userInfo={userInfo} setAvatarForm={setAvatarForm} setChangeAvatarButton={setChangeAvatarButton} currentUserInfo={currentUserInfo} />}

        <p>Name: {userInfo().name}</p>
        {!userInfo().venueManager && <p>Account type: Traveller</p>}
        {userInfo().venueManager && <p>Account type: Venue manager</p>}

        <Link to="/home">Home</Link>

        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </ProfileVenueManagerContainer>
  );
}
