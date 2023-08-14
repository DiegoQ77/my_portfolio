/* eslint-disable react/no-unused-prop-types */
import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import articlesImg from "../../public/articleOne.svg";
import { IArticle } from "../types/article";

interface IArtricles {
  articles: IArticle;
}

function ArticlesTable({ articles }: IArtricles) {
  return (
    <div className="text-white mt-10 ">
      <div className="border-white">
        <h2 className="mt-10 text-5xl font-bold text-center">My articles </h2>
        <p className="mt-5 text-center text-xl ">
          In this blog I post many articles, and my knowleage experience related
          to tech and programming languages, I share with you all my knowleage
          and opinions about any topic related to techonology. I expect to enjoy
          this articles
        </p>
        <img src={articlesImg} alt="" className="mt-10 mb-5" />

        {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
          <h2 className="mt-5 mb-14 text-5xl font-bold text-center">
            Explore my articles
          </h2>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              {articles.map((article: IArticle, idx: number) => {
                return (
                  <tr
                    className="border-b hover:bg-gray sm:text-xl mt-2"
                    key={article.id}
                  >
                    <td># {idx + 1}</td>
                    <td>{article.title}</td>
                    <td>{article.publicated}</td>
                    <td>
                      <Link to={`/articles/${article.id}`} state={article}>
                        <FaEye />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
      </div>
      <hr className="mt-10" />
    </div>
  );
}

export default ArticlesTable;
