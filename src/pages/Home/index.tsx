/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-return-assign */
import React from "react";

import CardCode from "./CardCode";
import ArticlesSection from "./ArticlesSection";
import Initial from "./Initial";
import AboutMe from "./AboutMe";
import ExperienceSection from "./ExperienceSection";

function Home() {
  return (
    <div className="">
      <Initial />
      {/* Second section about me */}
      <AboutMe />
      {/* Experience */}
      <ExperienceSection />
      {/* My services */}
      <section className="h-full sm:h-full scroll-mt-10 mt-10">
        <div className="container-default text-center mt-11 pt-4">
          <h4 className="text-blue-primary text-xl">What I Offer?</h4>
          <h2 className="text-blue-dark text-5xl font-extrabold mt-2">
            My Services
          </h2>
          <div className="w-full p-4 sm:w-1/2 m-auto text-center mt-5">
            <p className="text-gray ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore, error veniam necessitatibus laudantium
              voluptatum tenetur deserunt earum non veritatis maiores sed!
              Tempore, incidunt! Illum error sapiente officia omnis corporis.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 p-5 h-full">
            <CardCode
              title="Javascript"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore, error veniam necessitatibus laudantium
              voluptatum tenetur deserunt earum non veritatis maiores sed!
              Tempore, incidunt! Illum error sapiente officia omnis corporis."
              icon="FaJs"
            />
            <CardCode
              title="Python"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore, error veniam necessitatibus laudantium
              voluptatum tenetur deserunt earum non veritatis maiores sed!
              Tempore, incidunt! Illum error sapiente officia omnis corporis."
              icon="FaPython"
            />
            <CardCode
              title="Ruby/Rails"
              text="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore, error veniam necessitatibus laudantium
              voluptatum tenetur deserunt earum non veritatis maiores sed!
              Tempore, incidunt! Illum error sapiente officia omnis corporis."
              icon="DiRuby"
            />
            <CardCode
              title="React"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore, error veniam necessitatibus laudantium
              voluptatum tenetur deserunt earum non veritatis maiores sed!
              Tempore, incidunt! Illum error sapiente officia omnis corporis."
              icon="FaReact"
            />
            <CardCode
              title="Mysql"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore, error veniam necessitatibus laudantium
              voluptatum tenetur deserunt earum non veritatis maiores sed!
              Tempore, incidunt! Illum error sapiente officia omnis corporis."
              icon="DiMysql"
            />
            <CardCode
              title="PHP"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore, error veniam necessitatibus laudantium
              voluptatum tenetur deserunt earum non veritatis maiores sed!
              Tempore, incidunt! Illum error sapiente officia omnis corporis."
              icon="DiPhp"
            />
          </div>
        </div>
      </section>

      <section className="h-full sm:h-full scroll-mt-10 mt-10 bg-blue-primary">
        <ArticlesSection />
      </section>
    </div>
  );
}

export default Home;
