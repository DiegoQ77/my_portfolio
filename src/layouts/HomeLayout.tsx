import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./Home.css";

function HomeLayout() {
  return (
    <div className="container-Home">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout;
