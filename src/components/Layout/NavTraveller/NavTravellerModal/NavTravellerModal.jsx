import PropTypes from "prop-types";
import { ModalBackground, ModalContainer, ModalContent } from "./NavTravellerModal.style";
import { useNavigate } from "react-router-dom";
import { ModalCloseIcon } from "./NavTravellerModal.style";
import { useSignOut, useAuthUser } from "react-auth-kit";
import avatar from "../../../../assets/avatar.png";
import { AvatarImg } from "./NavTravellerModal.style";

export default function NavTravellerModal({ showModal, setShowModal }) {
  console.log(showModal);
  console.log(setShowModal);

  const navigate = useNavigate();

  const handleLoginButton = () => {
    setShowModal((prev) => !prev);
    navigate("/login");
    console.log("GO TO LOGIN");
  };

  const signOut = useSignOut();
  const handleSignOut = () => {
    signOut();
  };

  const userInfo = useAuthUser();

  return (
    <div>
      {/* {goToLogin && <Navigate to="/login" />} */}
      {showModal ? (
        <ModalBackground>
          <ModalContainer>
            <ModalCloseIcon aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
            <ModalContent>
              <AvatarImg src={avatar}></AvatarImg>

              <p>User name: {userInfo().name}</p>
              {userInfo().venueManager && <p>Account type: Venue manager</p>}
              {!userInfo().venueManager && <p>Account type: Traveller</p>}

              <button onClick={handleLoginButton}>Home</button>
              <button onClick={handleLoginButton}>Profile</button>
              <button onClick={handleLoginButton}>My bookings</button>
              <button onClick={handleSignOut}>Sing out</button>
            </ModalContent>
          </ModalContainer>
        </ModalBackground>
      ) : null}
    </div>
  );
}

NavTravellerModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
