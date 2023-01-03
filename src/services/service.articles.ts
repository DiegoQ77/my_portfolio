/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prettier/prettier */
import api from "./service";

const getArticles = async () => {
  const response = await api.get("/articles");
  return response.data;
};

const saveArticle = (data: any) => {
  console.log(data, "save articleeee");
  return api
    .post("/articles", { title: "example", description: "test desc" })
    .then(function (res) {
      console.log(res);
    });
};

export { getArticles, saveArticle };
