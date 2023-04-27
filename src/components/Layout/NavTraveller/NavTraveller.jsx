import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import logo from "../../../assets/logo.png";
import avatar from "../../../assets/avatar.png";
import { LogoImg } from "./NavTraveller.style";
import { NavTravellerStyle } from "./NavTraveller.style";
import { AvatarImg } from "./NavTraveller.style";
import { HamburgerMenu } from "./NavTraveller.style";
import NavTravellerModal from "./NavTravellerModal/NavTravellerModal";

export default function NavTraveller() {
  const userInfo = useAuthUser();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("OPENING MODAL");
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <NavTravellerStyle>
        <div>
          <Link to="/home">
            <LogoImg src={logo} />
          </Link>
        </div>
        <div>
          <p>{userInfo().name}</p>
          <Link to="/profile-traveller">
            {userInfo().avatar === null && <AvatarImg src={avatar} />}
            {userInfo().avatar !== null && <AvatarImg src={userInfo().avatar} />}
          </Link>
          <button onClick={openModal}>
            <HamburgerMenu />
          </button>
        </div>
      </NavTravellerStyle>
      {showModal && <NavTravellerModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
