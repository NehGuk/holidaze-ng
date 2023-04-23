import PropTypes from "prop-types";
import { ModalBackground, ModalContainer, ModalContent } from "./NavVenueManagerModal.style";
import { useNavigate } from "react-router-dom";

import { ModalCloseIcon } from "./NavVenueManagerModal.style";
import { useSignOut, useAuthUser } from "react-auth-kit";
import avatar from "../../../../assets/avatar.png";

import { AvatarImg } from "../NavVenueManager.style";

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

  const handleProfileButton = () => {
    setShowModal((prev) => !prev);
    navigate("/profile-venuemanager");
  };

  const handleMyVenuesButton = () => {
    setShowModal((prev) => !prev);
    navigate("/my-venues");
  };

  const handleUpcomingBookingsButton = () => {
    setShowModal((prev) => !prev);
    navigate("/upcoming-bookings");
  };

  const signOut = useSignOut();
  const handleSignOut = () => {
    navigate("/");
    signOut();
  };

  const userInfo = useAuthUser();

  return (
    <div>
      {/* {goToLogin && <Navigate to="/login" />} */}
      {showModal ? (
        <ModalBackground>
          <animated.div style={springs}>
            <ModalContainer>
              <ModalCloseIcon aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
              <ModalContent>
                <AvatarImg src={avatar}></AvatarImg>

                <p>User name: {userInfo().name}</p>
                {userInfo().venueManager && <p>Account type: Venue manager</p>}
                {!userInfo().venueManager && <p>Account type: Traveller</p>}

                <button onClick={handleHomeButton}>Home</button>
                <button onClick={handleProfileButton}>Profile</button>
                <button onClick={handleMyVenuesButton}>My venues</button>
                <button onClick={handleUpcomingBookingsButton}>Upcoming bookings</button>
                <button onClick={handleSignOut}>Sing out</button>
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
