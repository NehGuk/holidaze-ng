import { useAuthUser } from "react-auth-kit";

import { useAuthHeader } from "react-auth-kit";

import avatar from "../../assets/avatar.png";

import UpdateAvatar from "./UpdateAvatar";

import { ProfileVenueManagerContainer } from "./ProfileVenueManager.style";

import { useState } from "react";

export default function ProfileVenueManager() {
  const userInfo = useAuthUser();
  console.log(userInfo().venueManager);
  console.log(userInfo().avatar);
  console.log(userInfo().name);

  const authHeader = useAuthHeader();
  console.log(authHeader());
  const token = authHeader().split(" ")[1];
  console.log(token);
  const currentUserInfo = JSON.parse(localStorage.token_state);
  /* console.log(currentUserInfo); */

  const [changeAvatarButton, setChangeAvatarButton] = useState(true);

  const [avatarForm, setAvatarForm] = useState(false);

  const showAvatarForm = () => {
    console.log("SHOE AVATAR FORM");
    setAvatarForm(true);
    setChangeAvatarButton(false);
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

        <p>Home</p>
        <p>My bookings</p>
        <p>Sign out</p>
      </div>
    </ProfileVenueManagerContainer>
  );
}
