import HomeLayout from "../layouts/HomeLayout";
import Blog from "../pages/Blog/index";
import BlogLayout from "../layouts/Blog";

const BlogeRoute = {
  path: "/blog",
  element: <BlogLayout />,
  children: [
    {
      path: "",
      element: <Blog />,
    },
  ],
};

export default BlogeRoute;
