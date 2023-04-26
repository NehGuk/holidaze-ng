import { useAuthUser } from "react-auth-kit";
import avatar from "../../assets/avatar.png";
import { ProfileTravellerContainer } from "./ProfileTraveller.style";

export default function ProfileTraveller() {
  const userInfo = useAuthUser();
  console.log(userInfo().venueManager);
  console.log(userInfo().avatar);
  return (
    <ProfileTravellerContainer>
      <div>
        <h1>Profile</h1>
        {userInfo().avatar === null && <img src={avatar} />}
        {userInfo().avatar !== null && <img src={userInfo().avatar} />}
        <button>Change avatar</button>

        <p>Name: {userInfo().name}</p>
        {!userInfo().venueManager && <p>Account type: Traveller</p>}
        {userInfo().venueManager && <p>Account type: Venue manager</p>}

        <p>Home</p>
        <p>My bookings</p>
        <p>Sign out</p>
      </div>
    </ProfileTravellerContainer>
  );
}
