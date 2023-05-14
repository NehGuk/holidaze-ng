import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { MainGrid, NavStyled, OutletGrid } from "./Layout.style";

export default function Layout() {
  return (
    <MainGrid>
      <NavStyled>
        <Nav />
      </NavStyled>
      <OutletGrid>
        <Outlet />
      </OutletGrid>
      <Footer />
    </MainGrid>
  );
}
