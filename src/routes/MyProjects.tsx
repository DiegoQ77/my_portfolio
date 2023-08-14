import MyProjects from "../pages/MyProjects";
import ArticlesLayout from "../layouts/ArticlesLayout";

const MyArticlesRoutes = {
  path: "/my-projects",
  element: <ArticlesLayout />,
  children: [
    {
      path: "",
      element: <MyProjects />,
    },
  ],
};

export default MyArticlesRoutes;
