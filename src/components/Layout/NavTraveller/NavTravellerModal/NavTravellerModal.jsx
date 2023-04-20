import PropTypes from "prop-types";
import { ModalContainer, ModalContent } from "./NavTravellerModal.style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ModalCloseIcon } from "./NavTravellerModal.style";

export default function NavTravellerModal({ showModal, setShowModal }) {
  console.log(showModal);
  console.log(setShowModal);

  const navigate = useNavigate();

  const handleLoginButton = () => {
    setShowModal((prev) => !prev);
    navigate("/login");
    console.log("GO TO LOGIN");
  };

  return (
    <div>
      {/* {goToLogin && <Navigate to="/login" />} */}
      {showModal ? (
        <ModalContainer>
          <ModalCloseIcon aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
          <ModalContent>
            <p>Modal content hereeee</p>
            <Link to="login">Login</Link>
            <button onClick={handleLoginButton}>Go to login</button>
            <button aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)}>
              Close modal button
            </button>
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
