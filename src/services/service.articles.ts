/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prettier/prettier */
import api from "./service";
import { IArticle } from "../types/article";

const getArticles = async () => {
  const response = await api.get("/articles");
  return response.data;
};

const saveArticle = (data: IArticle) => {
  return api.post("/articles", data);
};

export { getArticles, saveArticle };
