import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import logo from "../../../assets/logo.png";
import avatar from "../../../assets/avatar.png";
import { NavVenueManagerStyle } from "./NavVenueManager.style";
import { LogoImg } from "./NavVenueManager.style";
import { AvatarImg } from "./NavVenueManager.style";
import { HamburgerMenu } from "./NavVenueManager.style";
import NavVenueManagerModal from "./NavVenueManagerModal/NavVenueManagerModal";

export default function NavTraveller() {
  const userInfo = useAuthUser();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    console.log("OPENING MODAL");
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <NavVenueManagerStyle>
        <div>
          <Link to="/home">
            <LogoImg src={logo} />
          </Link>
        </div>
        <div>
          <p>{userInfo().name}</p>
          <Link to="/profile-venuemanager">
            {userInfo().avatar === null && <AvatarImg src={avatar} />}
            {userInfo().avatar !== null && <AvatarImg src={userInfo().avatar} />}
          </Link>

          <button onClick={openModal}>
            <HamburgerMenu />
          </button>
        </div>
      </NavVenueManagerStyle>
      {showModal && <NavVenueManagerModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
