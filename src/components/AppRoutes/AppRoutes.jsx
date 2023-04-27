import { Routes, Route } from "react-router-dom";
import Venue from "../Venue/Venue";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Layout from "../Layout/Layout";
import RegisterManager from "../Register/RegisterManager";
import RegisterTraveller from "../Register/RegisterTraveller";
import HomeLoggedIn from "../Home/HomeLoggedIn/HomeLoggedIn";
import ProfileTraveller from "../Profile/ProfileTraveller";
import ProfileVenueManager from "../Profile/ProfileVenueManager";
import MyBookings from "../MyBookings/MyBookings";
import UpcomingBookings from "../UpcomingBookings/UpcomingBookings";
import MyVenues from "../MyVenues/MyVenues";
import RegistrationSuccess from "../Register/RegistrationSuccess";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<HomeLoggedIn />} />
          <Route path="profile-traveller" element={<ProfileTraveller />} />
          <Route path="my-bookings" element={<MyBookings />} />
          <Route path="profile-venuemanager" element={<ProfileVenueManager />} />
          <Route path="my-venues" element={<MyVenues />} />
          <Route path="upcoming-bookings" element={<UpcomingBookings />} />
          <Route path="venue/:id" element={<Venue />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="register-manager" element={<RegisterManager />} />
          <Route path="register-traveller" element={<RegisterTraveller />} />
          <Route path="registration-success" element={<RegistrationSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
