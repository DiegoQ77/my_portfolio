import { IArticleState, IAction } from "~/types/context";
import { IArticle } from "~/types/article";

export function State(): IArticleState {
  return { articles: new Array<IArticle>() };
}

export function Reducer(state: IArticleState, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case "show": {
      return { ...state, articles: payload };
    }
    default:
      return state;
  }
}
