import PropTypes from "prop-types";
import { ModalBackground, ModalContainer, ModalContent } from "./NavTravellerModal.style";
import { useNavigate } from "react-router-dom";
import { ModalCloseIcon } from "./NavTravellerModal.style";
import { useSignOut, useAuthUser } from "react-auth-kit";
import avatar from "../../../../assets/avatar.png";

import { useSpring, animated } from "@react-spring/web";
import { SimgAvatarMenu } from "../../../styles/globalstyles";

export default function NavTravellerModal({ showModal, setShowModal }) {
  const springs = useSpring({
    from: { x: 100 },
    to: { x: 0 },
  });

  console.log(showModal);
  console.log(setShowModal);

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
                  {userInfo().avatar === null && <SimgAvatarMenu src={avatar} />}
                  {userInfo().avatar !== null && <SimgAvatarMenu src={userInfo().avatar} />}
                </div>
                <div>
                  <span>
                    <strong>User name</strong>
                  </span>
                  <p>
                    <strong>{userInfo().name}</strong>
                  </p>
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
                  <button onClick={handleHomeButton}>Home</button>
                  <button onClick={handleMyBookingsButton}>My bookings</button>
                  <button onClick={handleProfileButton}>Profile</button>
                  <button onClick={handleSignOut}>Sing out</button>
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
