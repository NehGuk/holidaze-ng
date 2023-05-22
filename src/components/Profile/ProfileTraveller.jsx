import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUser, useSignOut } from "react-auth-kit";
import avatar from "../../assets/avatar.png";
import UpdateAvatar from "./UpdateAvatar";
import { Area1, ProfileImgArea, ProfileTravellerContainer } from "./ProfileTraveller.style";
import { CTAArea, PageArea0Container, SLinkButton, Sbutton, Sh1Title } from "../styles/globalstyles";

export default function ProfileTraveller() {
  const userInfo = useAuthUser();
  /* const authHeader = useAuthHeader(); */
  /* const token = authHeader().split(" ")[1]; */
  /* const currentUserInfo = JSON.parse(localStorage.token_state); */
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
    <PageArea0Container>
      <ProfileTravellerContainer>
        <Sh1Title>Profile</Sh1Title>
        <ProfileImgArea>
          {userInfo().avatar === null && <img src={avatar} />}
          {userInfo().avatar !== null && <img src={userInfo().avatar} />}
        </ProfileImgArea>

        <CTAArea>
          {changeAvatarButton && <Sbutton onClick={showAvatarForm}>Change avatar</Sbutton>}
          {avatarForm && <UpdateAvatar userInfo={userInfo} setAvatarForm={setAvatarForm} setChangeAvatarButton={setChangeAvatarButton} />}
        </CTAArea>
        <Area1>
          <p>
            <span>User name</span>
            <br></br> {userInfo().name}
          </p>
          {!userInfo().venueManager && (
            <p>
              <span>Account type</span>
              <br></br> Traveller
            </p>
          )}
          {userInfo().venueManager && (
            <p>
              <span>Account type:</span> Venue manager
            </p>
          )}
        </Area1>

        <CTAArea>
          <SLinkButton to="/home">Home</SLinkButton>
          <SLinkButton to="/my-bookings">My bookings</SLinkButton>
          <Sbutton $negative onClick={handleSignOut}>
            Sign out
          </Sbutton>
        </CTAArea>
      </ProfileTravellerContainer>
    </PageArea0Container>
  );
}
