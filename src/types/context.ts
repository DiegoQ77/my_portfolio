import { IArticle } from "./article";

export interface IAction {
  type: string;
  payload: any;
}

export interface IArticleState {
  articles: IArticle[];
}
