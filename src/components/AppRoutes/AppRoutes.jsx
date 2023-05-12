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
import RegistrationSuccess from "../Register/RegistrationSuccess";
import PostVenue from "../PostVenue/PostVenue";
import UpdateVenue from "../UpdateVenue/UpdateVenue";
import DeleteVenueSuccess from "../DeleteVenue/DeleteVenueSuccess";
import BookingVenueManager from "../Booking/BookingVenueManager";
import BookingTraveller from "../Booking/BookingTraveller";
import BookingConfirmed from "../BookingConfirmed/BookingConfirmed";
import AllBookings from "../AllBookings/AllBookings";
import VenuesVenueManager from "../Venues/VenuesVenueManager";

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
          <Route path="venue/:id" element={<Venue />} />
          <Route path="post-new-venue" element={<PostVenue />} />
          <Route path="venue/:id/update" element={<UpdateVenue />} />
          <Route path="delete-venue-success" element={<DeleteVenueSuccess />} />
          <Route path="my-venues" element={<VenuesVenueManager />} />
          <Route path="booking-venue-manager/:id" element={<BookingVenueManager />} />
          <Route path="booking-traveller/:id" element={<BookingTraveller />} />
          <Route path="all-bookings" element={<AllBookings />} />
          <Route path="booking-confirmed" element={<BookingConfirmed />} />
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
