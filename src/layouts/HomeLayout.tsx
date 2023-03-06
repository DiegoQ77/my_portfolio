import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function HomeLayout() {
  return (
    <div className="">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout;
