import PropTypes from "prop-types";
import { ModalBackground, ModalContainer, ModalContent } from "./NavVenueManagerModal.style";
import { useNavigate } from "react-router-dom";
import { ModalCloseIcon } from "./NavVenueManagerModal.style";
import { useSignOut, useAuthUser } from "react-auth-kit";
import avatar from "../../../../assets/avatar.png";
import { SimgAvatarMenu, Sbutton } from "../../../styles/globalstyles";
import { useSpring, animated } from "@react-spring/web";

export default function NavVenueManagerModal({ showModal, setShowModal }) {
  const springs = useSpring({
    from: { x: 100 },
    to: { x: 0 },
  });

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
                  <Sbutton onClick={handleHomeButton}>Home</Sbutton>
                  <Sbutton onClick={handleMyVenuesButton}>My venues</Sbutton>
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

NavVenueManagerModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
