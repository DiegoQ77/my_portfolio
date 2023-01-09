import React from "react";
import "./index.css";
import CardArticle from "../../components/CardArticle";
import animation_img from "../../../public/img.png";

export const Home = () => {
  return (
    <div className="container__page">
      <section className="">
        <div className="container container__page-info">
          <div className="container__page-left">
            <div className="general__info">
              <h4>Hey There I am</h4>
              <h2>Diego Quisbert</h2>
              <h3>Software Developer</h3>
            </div>
            <div className="general__info-about">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                esse, aspernatur pariatur possimus tempora dolorem fugiat ipsa
                quo doloribus eveniet quaerat a vel voluptate temporibus error
                odit praesentium iusto? Eos!
              </p>
              <button
                type="button"
                className="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded-full"
              >
                My Articles
              </button>
            </div>
          </div>

          <div className="container__page_right img__content">
            <img src={animation_img} alt="" />
          </div>
        </div>
      </section>
      {/* Second section */}
      <section className="description__section">
        <div className="container description__container">
          <h2>Titlte description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            minima non tempore vitae id sed voluptatibus architecto excepturi
            possimus atque eveniet veritatis praesentium, perferendis hic sunt
            repellendus pariatur vero consequuntur.
          </p>
        </div>
      </section>
      {/* Third section Programiing lenguages cards */}
      <section className="lenguejes__section">
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
      </section>
    </div>
  );
};
