// eslint-disable-next-line import/no-unresolved
import commigSoon from "../../../public/comming.svg";

function MyProjects() {
  return (
    <div className=" bg-blue overflow-auto">
      <section className="w-100 h-screen mt-32 flex-row">
        <div className="">
          <h2 className="mt-10 text-center text-white text-5xl font-black  mb-4">
            My projects on GitHub{" "}
          </h2>
          <p className="text-center text-white ">
            Sorry, this page is current in progress. Visit my github:
            https://github.com/DiegoQ77
          </p>
        </div>

        <div className="mt-20 flex justify-center">
          <img src={commigSoon} alt="comming soon" className="w-1/2 sm:-full" />
        </div>
      </section>
    </div>
  );
}

export default MyProjects;
