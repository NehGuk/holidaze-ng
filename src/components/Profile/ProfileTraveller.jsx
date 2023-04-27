import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthUser, useAuthHeader, useSignOut } from "react-auth-kit";
import avatar from "../../assets/avatar.png";
import UpdateAvatar from "./UpdateAvatar";
import { ProfileTravellerContainer } from "./ProfileTraveller.style";

export default function ProfileTraveller() {
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
    <ProfileTravellerContainer>
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
        <Link to="/my-bookings">My bookings</Link>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </ProfileTravellerContainer>
  );
}
