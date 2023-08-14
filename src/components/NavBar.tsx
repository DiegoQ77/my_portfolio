/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import code from "../../public/logo.png";

function NavBar() {
  const [hidden, setHiddent] = useState("hidden");
  const handleNavBar = (e: any) => {
    e.preventDefault();
    if (hidden === "hidden") {
      setHiddent("");
    } else {
      setHiddent("hidden");
    }
  };
  return (
    <nav
      className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
      style={{ position: "fixed", zIndex: 9999, width: "100%" }}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={code} alt="" className="h-6 mr-3 sm:h-9" />
          <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
            My Portfolio
          </span>
        </Link>

        <div className="flex md:order-2">
          <Link
            to="/articles"
            type="button"
            className="text-white bg-blue-primary rounded-lg text-xl font-bold px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            My Articles
          </Link>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={handleNavBar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${hidden}`}
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 font-bold text-xl rounded md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/articles"
                className="block py-2 pl-3 pr-4 font-bold text-xl rounded md:p-0 "
              >
                Articles
              </Link>
            </li>

            <li>
              <Link
                to="/my-projects"
                className="block py-2 pl-3 pr-4 font-bold text-xl rounded md:p-0 "
              >
                My Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
