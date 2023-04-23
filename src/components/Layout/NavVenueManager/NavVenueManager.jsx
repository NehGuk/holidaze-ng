import { useState } from "react";
import { Link } from "react-router-dom";
import { NavVenueManagerStyle } from "./NavVenueManager.style";

import { useAuthUser } from "react-auth-kit";
import logo from "../../../assets/logo.png";
import { LogoImg } from "./NavVenueManager.style";
import avatar from "../../../assets/avatar.png";
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
          <AvatarImg src={avatar} />
          <button onClick={openModal}>
            <HamburgerMenu />
          </button>
        </div>
      </NavVenueManagerStyle>
      {showModal && <NavVenueManagerModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
