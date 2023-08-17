import { Link } from "react-router-dom";
import article2 from "../../../public/article4.svg";

function ArticlesSection() {
  return (
    <div className="container-default flex flex-row p-10">
      <div className="text-center w-full sm:w-3/6 text-white p-10 m-auto ">
        <h2 className="text-5xl font-extrabold">Read my articles</h2>
        <p className="mt-5 text-lg">
          I created many articles related to tech, you can contact with me if
          you have any questions. Normally I post one article in one month, the
          topics as JS, Python, Ruby, Data base and others.
        </p>

        <Link
          to="/articles"
          type="button"
          className="bg-blue-dark w-64 h-12 text-white rounded-full font-bold mt-5 p-3 text-center"
        >
          Explore my articles
        </Link>
      </div>
      <div className="w-0 sm:w-3/6">
        <img src={article2} alt="developer" className="w-2/3 m-auto" />
      </div>
    </div>
  );
}

export default ArticlesSection;
