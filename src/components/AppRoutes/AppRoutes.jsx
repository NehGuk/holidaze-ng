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

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="homein" element={<HomeLoggedIn />} />
          <Route path="venue" element={<Venue />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="register-manager" element={<RegisterManager />} />
          <Route path="register-traveller" element={<RegisterTraveller />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
