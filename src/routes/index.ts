import { useRoutes } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";
import ArticlesRoutes from "./ArticlesRoutes";

function RoutesApp() {
  return useRoutes([HomeRoutes, ArticlesRoutes]);
}

export default RoutesApp;
