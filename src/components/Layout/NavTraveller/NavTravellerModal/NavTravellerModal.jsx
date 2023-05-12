import PropTypes from "prop-types";
import { ModalBackground, ModalContainer, ModalContent } from "./NavTravellerModal.style";
import { useNavigate } from "react-router-dom";
import { ModalCloseIcon } from "./NavTravellerModal.style";
import { useSignOut, useAuthUser } from "react-auth-kit";
import avatar from "../../../../assets/avatar.png";
import { AvatarImg } from "./NavTravellerModal.style";

import { useSpring, animated } from "@react-spring/web";

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
      {/* {goToLogin && <Navigate to="/login" />} */}
      {showModal ? (
        <ModalBackground>
          <animated.div style={springs}>
            <ModalContainer>
              <ModalCloseIcon aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
              <ModalContent>
                {userInfo().avatar === null && <AvatarImg src={avatar} />}
                {userInfo().avatar !== null && <AvatarImg src={userInfo().avatar} />}
                {/* <AvatarImg src={avatar}></AvatarImg> */}

                <p>User name: {userInfo().name}</p>
                {userInfo().venueManager && <p>Account type: Venue manager</p>}
                {!userInfo().venueManager && <p>Account type: Traveller</p>}

                <button onClick={handleHomeButton}>Home</button>
                <button onClick={handleMyBookingsButton}>My bookings</button>
                <button onClick={handleProfileButton}>Profile</button>
                <button onClick={handleSignOut}>Sing out</button>
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
