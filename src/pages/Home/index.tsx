import React from "react";
import "./index.css";
import CardArticle from "../../components/CardArticle";
import developer from "../../../public/developer.png";
import code from "../../../public/code7.png";

export const Home = () => {
  return (
    <div className="">
      <section className="h-screen max-h-[70vh] sm:max-h-[90vh] w-full flex flex-col sm:flex-row p-2 sm:p-20">
        <div className="flex flex-col justify-center ">
          <div className="general__info">
            <h4 className="text-blue-primary">Hey There I am</h4>
            <h2 className="text-blue-dark text-4xl font-bold mt-4 mb-4">
              Diego Quisbert
            </h2>
            <h3 className="mt-2 mb-2">Software Developer</h3>
          </div>
          <div className="mt-2 flex flex-col items-center sm:items-start">
            <p className="text-gray ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              esse, aspernatur pariatur possimus tempora dolorem fugiat ipsa quo
              doloribus eveniet quaerat a vel voluptate temporibus error odit
              praesentium iusto? Eos!
            </p>
            <button
              type="button"
              className="bg-blue-primary w-64 h-12 text-white rounded-full hover:bg-blue-second font-bold mt-5"
            >
              My Articles
            </button>
          </div>
        </div>

        <div className="container__page_right img__content float-area mt-10 sm:mt-1">
          <img
            src={developer}
            alt=""
            className="floating-img w-1/2 sm:w-full"
          />
        </div>
      </section>
      {/* Second section */}

      <section className="h-screen max-h-[60vh] bg-blue-primary flex flex-col flex-wrap justify-center sm:items-center">
        <div className="w-full sm:w-1/2 p-3">
          <h2 className="text-white text-5xl font-bold text-center mt-12">
            About me
          </h2>
          <p className="text-white text-center mt-8 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            minima non tempore vitae id sed voluptatibus architecto excepturi
            possimus atque eveniet veritatis praesentium, perferendis hic sunt
            repellendus pariatur vero consequuntur.
          </p>
        </div>
      </section>

      <div id="wave" />

      {/* <div className="float-area">
        <img
          src="https://ethrex-watch.web.app/favicon.ico"
          className="floating-img"
          alt="my floating image"
        />
        <br />
        <span>Flaoting pop corn</span>
      </div> */}

      {/* 
        Work experience

      */}

      <section className="bg-blue-dark h-full min-h-[80vh] flex flex-col sm:flex sm:flex-row text-white relative p-5">
        <div className="w-screen sm:w-1/3 flex items-center justify-center font-bold text-2xl">
          EXPERIENCE BEFORE AND AFTER UNIVERSITY
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
          <div className="flex items-center justify-center flex-wrap">
            <div className="border-solid  border-2 border-white-500 shadow-2xl w-5/6 p-5 hover:bg-blue-second hover:text-white rounded-lg mt-4">
              <h2 className="font-bold">
                First place in Hackathon "datos abiertos Panama"
              </h2>
              <span className="text-xs">Date: 2019-08-12</span>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas commodi molestiae nostrum molestias tempora. Sapiente
                sunt eveniet recusandae impedit natus libero quam quasi vero
                officiis quas odit id, deleniti excepturi!
              </p>
            </div>
          </div>

          <div className=" flex items-center justify-center flex-wrap mt-8 sm:mt-0">
            <div className="border-solid border-2 border-white-500 shadow-2xl w-5/6  p-5 hover:bg-blue-second hover:text-white rounded-lg">
              <h2 className="font-bold">Software development Junior</h2>
              <span className="text-xs">Date: 2019-08-12</span>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas commodi molestiae nostrum molestias tempora. Sapiente
                sunt eveniet recusandae impedit natus libero quam quasi vero
                officiis quas odit id, deleniti excepturi!
              </p>
            </div>
          </div>

          <div className=" flex items-center justify-center flex-wrap mt-5">
            <div className="border-solid border-2 border-white-500 shadow-2xl w-5/6  p-5 hover:bg-blue-second hover:text-white rounded-lg">
              <h2 className="font-bold">
                First place in Hackathon "datos abiertos Panama"
              </h2>
              <span className="text-xs">Date: 2019-08-12</span>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas commodi molestiae nostrum molestias tempora. Sapiente
                sunt eveniet recusandae impedit natus libero quam quasi vero
                officiis quas odit id, deleniti excepturi!
              </p>
            </div>
          </div>
        </div>
        {/* <img src={code} alt="" className="absolute right-10 bottom-10" /> */}
      </section>

      <section>My knowlage</section>

      {/* Third section Programiing lenguages cards */}
      {/* <section className="lenguejes__section">
        <div className="container lenguajes__container">
          <div className="lenguajes__container-head">
            <span>My knolglege</span>
            <h1>Progrmagin lenguajes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              recusandae, tenetur molestiae, minima qui reprehenderit at quis
              neque doloremque eius exercitationem voluptatibus consectetur cum
              quibusdam nulla, iste possimus optio ad.
            </p>
          </div>

          <div className="container__cards grid grid-cols-2 gap-4 content-between">
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
          </div>
        </div>
      </section> */}
    </div>
  );
};
