import { useRoutes } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";
import ArticlesRoutes from "./ArticlesRoutes";
import BlogeRoute from "./BlogRoutes";
import MyArticlesRoutes from "./MyProjects";

function RoutesApp() {
  return useRoutes([HomeRoutes, ArticlesRoutes, BlogeRoute, MyArticlesRoutes]);
}

export default RoutesApp;
