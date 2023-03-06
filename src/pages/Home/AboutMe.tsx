/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-target-blank */
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import developer_img_2 from "../../../public/img2.svg";

function AboutMe() {
  return (
    <section className="bg-blue-primary mt-12">
      <div className="container-default h-screen sm:max-h-[80vh] sm:items-center">
        <div className="flex items-center sm:flex-row-reverse flex-col p-7 sm:h-full">
          <div className="w-full sm:w-1/2 p-5 ">
            <h4 className="text-white text-2xl font-bold">ABOUT ME</h4>
            <h2 className="text-blue-dark text-5xl font-extrabold">
              I am <span className="text-white">Diego Quisbert,</span> Software
              Enginner
            </h2>
            <p className="text-white font-bold mt-6 sm:w-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              minima non tempore vitae id sed voluptatibus architecto excepturi
              possimus atque eveniet veritatis praesentium, perferendis hic sunt
              repellendus pariatur vero consequuntur.
            </p>
            <div className="mt-6">
              <h4 className="text-white text-xl font-extrabold">
                Connect with me, my social networks
              </h4>
              <div className="flex mt-4">
                <div>
                  <a href="https://github.com/DiegoQ77" target="_blank">
                    <FaGithub
                      color="white"
                      size="35px"
                      onMouseOver={({ target }) =>
                        (target.style.color = "051229")
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = "white")
                      }
                    />
                  </a>
                </div>
                <div className="ml-2 mr-2">
                  <a
                    href="https://www.linkedin.com/in/diego-quisbert-296a91192/"
                    target="_blank"
                  >
                    <FaLinkedin
                      color="white"
                      size="35px"
                      onMouseOver={({ target }) =>
                        (target.style.color = "051229")
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = "white")
                      }
                    />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/DiegoQuisbbert" target="_blank">
                    <FaTwitterSquare
                      size="35px"
                      color="white"
                      onMouseOver={({ target }) =>
                        (target.style.color = "051229")
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = "white")
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 sm:h-full flex items-center ">
            <img
              src={developer_img_2}
              alt="developer"
              className="floating-img-second w-5/6 hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
