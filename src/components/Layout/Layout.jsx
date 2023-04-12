import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { MainGrid } from "./Layout.style";

export default function Layout() {
  return (
    <MainGrid>
      <Nav />
      <Outlet />
      <Footer />
    </MainGrid>
  );
}
