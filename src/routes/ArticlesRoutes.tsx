import Articles from "../pages/Articles";
import ArticlesLayout from "../layouts/ArticlesLayout";
import { ArticleContextProvider } from "../pages/Articles/context/index";
import Article from "../pages/Article/index";

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
    {
      path: ":id",
      element: <Article />,
    },
  ],
};

export default ArticlesRoutes;
