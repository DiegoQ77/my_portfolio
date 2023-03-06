import { useRoutes } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";
import ArticlesRoutes from "./ArticlesRoutes";
import BlogeRoute from "./BlogRoutes";

function RoutesApp() {
  return useRoutes([HomeRoutes, ArticlesRoutes, BlogeRoute]);
}

export default RoutesApp;
