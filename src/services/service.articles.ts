/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prettier/prettier */
import api from "./service";

const getArticles = async () => {
  const response = await api.get("/articles");
  return response.data;
};

const saveArticle = (data: any) => {
  return api.post("/articles", data);
};

export { getArticles, saveArticle };
