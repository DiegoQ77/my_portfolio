/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-return-assign */
import developer from "../../../public/developer.png";

function Initial() {
  return (
    <section className="">
      <div className="container-default h-screen sm:max-h-[100vh] w-full flex flex-col sm:flex-row p-2 sm:p-20">
        <div className="flex flex-col justify-center p-5">
          <div className="general__info mt-20">
            <h4 className="text-blue-primary">Hey There I am</h4>
            <h2 className="text-blue-dark text-5xl font-black mt-4 mb-4 ">
              Diego Quisbert
            </h2>
            <h3 className="mt-2 mb-2">Software Developer</h3>
          </div>
          <div className="mt-2 flex flex-col items-center sm:items-start">
            <p className="text-gray ">
              My name is Diego and I am from La Paz, Bolivia. I like to code and
              all related to techonology. I manage front and back end in
              programming. Thanks for watch this website and enjoy my articles!
            </p>
            <div className="flex flex-col sm:flex-row ">
              <a
                href="/articles"
                type="button"
                className="bg-blue-primary w-64 h-12 text-white rounded-full hover:bg-blue-second font-bold mt-5 mr-4 p-3 text-center"
              >
                My Articles
              </a>
              <a
                href="https://drive.google.com/file/d/1K6Ikf2kO1wXkxu2Gl_Ex_IepgSw1elUv/view"
                target="_blank"
                type="button"
                className="bg-blue-dark w-64 h-12 text-white rounded-full font-bold mt-5 p-3 text-center"
              >
                Dowload my Portfolio
              </a>
            </div>
          </div>
        </div>

        <div className="container__page_right img__content float-area mt-10 sm:mt-1">
          <img
            src={developer}
            alt=""
            className="floating-img w-1/2 sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Initial;
