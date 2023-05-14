import PropTypes from "prop-types";
import { ModalBackground, ModalContainer, ModalContent } from "./NavVenueManagerModal.style";
import { useNavigate } from "react-router-dom";

import { ModalCloseIcon } from "./NavVenueManagerModal.style";
import { useSignOut, useAuthUser } from "react-auth-kit";
import avatar from "../../../../assets/avatar.png";

/* import { AvatarImg } from "../NavVenueManager.style"; */

import { useSpring, animated } from "@react-spring/web";

export default function NavVenueManagerModal({ showModal, setShowModal }) {
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

  const handleMyVenuesButton = () => {
    setShowModal((prev) => !prev);
    navigate("/my-venues");
  };

  const handleMyBookingsButton = () => {
    setShowModal((prev) => !prev);
    navigate("/all-bookings");
  };

  const handleProfileButton = () => {
    setShowModal((prev) => !prev);
    navigate("/profile-venuemanager");
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
                  {userInfo().avatar === null && <img src={avatar} />}
                  {userInfo().avatar !== null && <img src={userInfo().avatar} />}
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
                  <button onClick={handleMyVenuesButton}>My venues</button>
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

NavVenueManagerModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
