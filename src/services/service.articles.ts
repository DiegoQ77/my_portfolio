/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prettier/prettier */
import api from "./service";

const getArticles = async () => {
  const response = await api.get("/articles");
  return response.data;
};

// const saveArticle = (data: any) => {
//   console.log(data, "save articleeee");
//   return api
//     .post("/articles", { title: "example", description: "test desc" })
//     .then(function (res) {
//       console.log(res);
//     });
// };

const saveArticle = (data: any) => {
  console.log(data, "save articleeee");
  return api.post("/realms/react/protocol/openid-connect/token", {
    username: "diego",
    password: "diego",
    client_id: "diego-cli",
    grant_type: "password",
  });
  // .then(function (res) {
  //   console.log(res);
  // })
  // .catch((e) => {
  //   console.log(e);
  // });
};

export { getArticles, saveArticle };
