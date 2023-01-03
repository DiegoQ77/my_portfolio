import React from "react";

const ArticlesTable = ({ articles }: any) => {
  return (
    <div>
      <h2>Articulos publicados</h2>
      {articles.map((article: any) => {
        return (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesTable;
