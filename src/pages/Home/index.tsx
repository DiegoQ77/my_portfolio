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
              Throughout my journey as a developer, my services focus on
              developing quality software. The programming languages that I use
              are for the frontend part and for the backend part. I can develop
              personal applications, for companies or administration systems
              such as billing. Some of the programming languages. I use are.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 p-5 h-full">
            <CardCode
              title="Javascript"
              text="
              I have basic and solid knowledge in this programming language, I have been working with javascript technology for more than a year. I can apply this programming language in both backend and frontend"
              icon="FaJs"
            />
            <CardCode
              title="Python"
              text="
              Python is one of the last programming languages ​​that I am using, from experience I have some internal projects made in flask and fast api. I can develop backend systems using this programming language, which is one of the most widely used and famous today."
              icon="FaPython"
            />
            <CardCode
              title="Ruby/Rails"
              text="
              Ruby and ruby ​​on rails is one of my first programming languages, I have more than a year of experience with this technology. The framework par excellence that I use is rails, in capybara unit tests and for database management I can offer support with postgressql."
              icon="DiRuby"
            />
            <CardCode
              title="React"
              text="
              I have at least a year handling react, it is one of the new technologies where I am specialized. I can make from simple pages to complex systems using this technology. By default majeno javascript as the language of use but I can also offer the service using TS"
              icon="FaReact"
            />
            <CardCode
              title="Mysql"
              text="Mysql is one of the databases where I can provide support or services, I have university experience and two projects carried out in Maxia Latam using this technology. My services can be from design, implementation or general use of the database"
              icon="DiMysql"
            />
            <CardCode
              title="PHP"
              text="Php is one of the services that I can offer, I handle the Codeignater framework and PHP in general. I have around eight months using this language for the backend side"
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
