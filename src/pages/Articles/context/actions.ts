import { IArticle } from "../../../types/article";
import ArticleActionTypes from "./enum";

function onAddArticle(dispatch: any, payload: IArticle[]) {
  dispatch({ type: ArticleActionTypes.addProduct, payload });
}

function onShowArticles(dispatch: any, payload: IArticle[]) {
  dispatch({ type: "show", payload });
}

const ArticleActionFactory = (dispatch: any) => {
  return {
    onAddProducts: (payload: IArticle[]) => onAddArticle(dispatch, payload),
    onShowArticles: (payload: IArticle[]) => onShowArticles(dispatch, payload),
  };
};

export default ArticleActionFactory;
