import PropTypes from "prop-types";
import { ModalBackground, ModalContainer, ModalContent } from "./NavTravellerModal.style";
import { useNavigate } from "react-router-dom";
import { ModalCloseIcon } from "./NavTravellerModal.style";
import { useSignOut, useAuthUser } from "react-auth-kit";
import avatar from "../../../../assets/avatar.png";

import { useSpring, animated } from "@react-spring/web";
import { SimgAvatarMenu, Sbutton } from "../../../styles/globalstyles";

export default function NavTravellerModal({ showModal, setShowModal }) {
  const springs = useSpring({
    from: { x: 100 },
    to: { x: 0 },
  });

  const navigate = useNavigate();

  const handleHomeButton = () => {
    setShowModal((prev) => !prev);
    navigate("/home");
  };

  const handleMyBookingsButton = () => {
    setShowModal((prev) => !prev);
    navigate("/my-bookings");
  };

  const handleProfileButton = () => {
    setShowModal((prev) => !prev);
    navigate("/profile-traveller");
  };

  const signOut = useSignOut();
  const handleSignOut = () => {
    navigate("/");
    signOut();
  };

  const userInfo = useAuthUser();

  return (
    <div>
      {showModal ? (
        <ModalBackground>
          <animated.div style={springs}>
            <ModalContainer>
              <ModalCloseIcon aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
              <ModalContent>
                <div>
                  {userInfo().avatar === null && <SimgAvatarMenu src={avatar} alt="Avatar image" />}
                  {userInfo().avatar !== null && <SimgAvatarMenu src={userInfo().avatar} alt="Avatar image" />}
                </div>
                <div>
                  <h1>
                    <strong>{userInfo().name}</strong>
                  </h1>
                  <span>
                    <strong>Account type</strong>
                  </span>
                  {userInfo().venueManager && (
                    <>
                      <p>Venue manager</p>
                    </>
                  )}
                  {!userInfo().venueManager && (
                    <>
                      <p>Traveller</p>
                    </>
                  )}
                </div>
                <div>
                  <Sbutton onClick={handleHomeButton}>Home</Sbutton>
                  <Sbutton onClick={handleMyBookingsButton}>My bookings</Sbutton>
                  <Sbutton onClick={handleProfileButton}>Profile</Sbutton>
                  <Sbutton $negative onClick={handleSignOut}>
                    Sing out
                  </Sbutton>
                </div>
              </ModalContent>
            </ModalContainer>
          </animated.div>
        </ModalBackground>
      ) : null}
    </div>
  );
}

NavTravellerModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
