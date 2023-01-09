import HomeLayout from "../layouts/HomeLayout";
import { Home } from "../pages/Home/index";

const HomeRoutes = {
  path: "/",
  element: <HomeLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
  ],
};

export default HomeRoutes;
