/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useArticleContext } from "./context/index";
import ArticlesTable from "../../components/Articles";

function Articles() {
  const [state, actions] = useArticleContext();
  // const { data, refetch } = useQuery({
  //   queryKey: ["getArticles"],
  //   queryFn: getArticles,
  //   onSuccess: (articles: IArticle) => {
  //     actions.onShowArticles(articles);
  //   },
  // });

  return (
    <div className="bg-blue-dark ">
      <section className="bg-blue-dark">
        <div className=" container-default w-full h-full sm:h-full flex flex-col sm:flex-row p-10 sm:p-20">
          <ArticlesTable articles={state.articles} />
        </div>
      </section>
    </div>
  );
}

export default Articles;
