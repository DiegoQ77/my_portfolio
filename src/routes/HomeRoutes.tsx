import HomeLayout from "../layouts/HomeLayout";

const HomeRoutes = {
  path: "/",
  element: <HomeLayout />,
  children: [
    {
      path: "",
      element: <h1>Home</h1>,
    },
  ],
};

export default HomeRoutes;
