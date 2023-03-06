import React from "react";
import rails from "../../public/rails.jpg";

const CardArticle = ({ title = "Python", description = "desc" }: any) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 hover:bg-sky-500 hover:color-white">
      <div className="img__container">
        <img className="" src={rails} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          dolorum, illum totam non odio perspiciatis itaque voluptatem nobis
          cumque, nemo voluptatum soluta numquam ipsa est veniam eum porro
          maiores pariatur.
        </p>
      </div>
    </div>
  );
};

export default CardArticle;
