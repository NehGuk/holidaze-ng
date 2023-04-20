import PropTypes from "prop-types";
import { ModalContainer, ModalContent } from "./NavTravellerModal.style";
import { useNavigate } from "react-router-dom";
import { ModalCloseIcon } from "./NavTravellerModal.style";
import { useSignOut } from "react-auth-kit";

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

  return (
    <div>
      {/* {goToLogin && <Navigate to="/login" />} */}
      {showModal ? (
        <ModalContainer>
          <ModalCloseIcon aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
          <ModalContent>
            <p>Avatar</p>
            <p>Name</p>
            <p>Account type: yyyy</p>
            <button onClick={handleLoginButton}>Home</button>
            <button onClick={handleLoginButton}>Profile</button>
            <button onClick={handleLoginButton}>My bookings</button>
            <button onClick={handleSignOut}>Sing out</button>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </div>
  );
}

NavTravellerModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
