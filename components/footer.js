import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPortrait } from "@fortawesome/free-solid-svg-icons"


export default function Footer() {
  return (
    <div className="absolute  w-screen h-auto py-3 items-center content-center bg-white dark:bg-gray-800">
      <div className="flex text-center justify-center text-gray-600 dark:text-white">
        <a href="https://github.com/sihamais" target="blank">
          <FontAwesomeIcon
            className="hover:text-gray-500 dark:hover:text-gray-300 h-8 w-8 mr-5 mb-2"
            icon={faGithub}
          />
        </a>
        <a href="https://www.linkedin.com/in/sihamais/" target="blank">
          <FontAwesomeIcon
            className="hover:text-gray-500 dark:hover:text-gray-300 h-8 w-8 mr-5 mb-2"
            icon={faLinkedin}
          />
        </a>
        <a href="../CV.pdf" target="blank" title="My resume">
          <FontAwesomeIcon
            className="hover:text-gray-500 dark:hover:text-gray-300 h-8 w-8 mr-5 mb-2"
            icon={faPortrait}
          />
        </a>
      </div>
    </div>
  );
}