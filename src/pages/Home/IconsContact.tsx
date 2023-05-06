/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-target-blank */
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function IconsContact() {
  return (
    <div>
      <div className="flex mt-4">
        <div>
          <a href="https://github.com/DiegoQ77" target="_blank">
            <FaGithub
              color="white"
              size="35px"
              onMouseOver={({ target }: any) => (target.style.color = "blue")}
              onMouseOut={({ target }: any) => (target.style.color = "white")}
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
              onMouseOver={({ target }: any) => (target.style.color = "blue")}
              onMouseOut={({ target }: any) => (target.style.color = "white")}
            />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/DiegoQuisbbert" target="_blank">
            <FaTwitterSquare
              size="35px"
              color="white"
              onMouseOver={({ target }: any) => (target.style.color = "blue")}
              onMouseOut={({ target }: any) => (target.style.color = "white")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default IconsContact;
