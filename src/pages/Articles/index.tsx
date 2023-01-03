/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useArticleContext } from "./context/index";
import ArticlesTable from "../../components/Articles";
import { getArticles, saveArticle } from "../../services/service.articles";

function Articles() {
  const queryCLient = useQueryClient;
  const [state, actions] = useArticleContext();
  const { data, refetch } = useQuery({
    queryKey: ["getArticles"],
    queryFn: getArticles,
    onSuccess: (articles: any) => {
      actions.onShowArticles(articles);
    },
  });

  const { isLoading: isPostingTutorial, mutate: postTutorial } = useMutation<
    any,
    Error
  >(async () => {
    return saveArticle({
      title: "postTitle",
      description: "postDescription",
    });
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("paso add");
    postTutorial();
  };

  return (
    <div>
      <ArticlesTable articles={state.articles} />
      <br />
      <hr />
      <h2>Agrer nuevo producto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="article">Agregar producto</label>
        <br />
        <br />
        <input type="text" name="article" />
        <br />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Articles;
