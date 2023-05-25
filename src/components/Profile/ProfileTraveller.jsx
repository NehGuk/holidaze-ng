import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUser, useSignOut } from "react-auth-kit";
import avatar from "../../assets/avatar.png";
import UpdateAvatar from "./UpdateAvatar";
import { Area1, ProfileImgArea, ProfileTravellerContainer } from "./ProfileTraveller.style";
import { CTAArea, PageArea0Container, SLinkButton, Sbutton, Sh1Title } from "../styles/globalstyles";
import useScrollTopAlways from "../../hooks/useScrollTopAlways";

export default function ProfileTraveller() {
  useScrollTopAlways();
  const userInfo = useAuthUser();
  const [changeAvatarButton, setChangeAvatarButton] = useState(true);
  const [avatarForm, setAvatarForm] = useState(false);
  const navigate = useNavigate();
  const signOut = useSignOut();
  const showAvatarForm = () => {
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
          {userInfo().avatar === null && <img src={avatar} alt="Avatar image" />}
          {userInfo().avatar !== null && <img src={userInfo().avatar} alt="Avatar image" />}
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
          <p>
            <span>Email</span>
            <br></br> {userInfo().email}
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
          <SLinkButton $white to="/home">
            Home
          </SLinkButton>
          <SLinkButton $white to="/my-bookings">
            My bookings
          </SLinkButton>
          <Sbutton $negative onClick={handleSignOut}>
            Sign out
          </Sbutton>
        </CTAArea>
      </ProfileTravellerContainer>
    </PageArea0Container>
  );
}
