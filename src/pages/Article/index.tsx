import { useLocation } from "react-router-dom";

function Article() {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="bg-blue-dark text-white">
      <section className="bg-blue-dark">
        <div className="container-default w-full h-full sm:h-full flex flex-col sm:flex-row p-10 sm:p-20">
          <div className="h-full mt-10 w-full">
            <div>
              <h2 className="text-center font-extrabold text-5xl mb-5">
                {data.title}
              </h2>
              <div className="mt-2 text-center mb-10">
                Publish on: {data.publicated}
              </div>
              <hr />
            </div>
            <div className="mt-10 ">
              <h2 className="font-extrabold text-2xl mb-5">Introduction</h2>
              <p>{data.introduction}</p>
            </div>
            <div className="mt-10">
              <h2 className="font-extrabold text-2xl mb-5">Description</h2>
              <p>{data.description}</p>
            </div>
            <div className="mt-10">
              <h2 className="font-extrabold text-2xl mb-5">Conclution</h2>
              <p>{data.conclution}</p>
            </div>
            <hr className="mt-12" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Article;
