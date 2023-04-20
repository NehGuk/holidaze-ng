import { useState } from "react";
import { Link } from "react-router-dom";
import { NavTravellerStyle } from "./NavTraveller.style";
import { useSignOut, useAuthUser } from "react-auth-kit";
import logo from "../../../assets/logo.png";
import { LogoImg } from "./NavTraveller.style";
import avatar from "../../../assets/avatar.png";
import { AvatarImg } from "./NavTraveller.style";
import { HamburgerMenu } from "./NavTraveller.style";
import NavTravellerModal from "./NavTravellerModal/NavTravellerModal";

export default function NavTraveller() {
  const signOut = useSignOut();
  const userInfo = useAuthUser();
  const handleSignOut = () => {
    signOut();
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("OPENING MODAL");

    setShowModal((prev) => !prev);
  };

  return (
    <>
      <NavTravellerStyle>
        <div>
          <Link to="/homein">
            <LogoImg src={logo} />
            Logo Nav Travellerrrr
          </Link>
        </div>
        <div>
          <Link to="login">Link 1</Link>
          <Link to="register">Link 2</Link>
          <button onClick={handleSignOut}>Sing out</button>
          <p>{userInfo().name}</p>
          <AvatarImg src={avatar} />
          <button onClick={openModal}>
            <HamburgerMenu />
          </button>
        </div>
      </NavTravellerStyle>
      {showModal && <NavTravellerModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
