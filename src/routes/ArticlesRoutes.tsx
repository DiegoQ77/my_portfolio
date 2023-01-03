import Articles from "../pages/Articles";
import ArticlesLayout from "../layouts/ArticlesLayout";
import { ArticleContextProvider } from "../pages/Articles/context/index";

const ArticlesRoutes = {
  path: "/articles",
  element: <ArticlesLayout />,
  children: [
    {
      path: "",
      element: (
        <ArticleContextProvider>
          <Articles />
        </ArticleContextProvider>
      ),
    },
  ],
};

export default ArticlesRoutes;
