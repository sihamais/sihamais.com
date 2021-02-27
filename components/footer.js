import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <div className="w-screen h-auto py-3 items-center content-center bg-white dark:bg-gray-800">
      <div className="flex text-center justify-center text-gray-600 dark:text-white">
        <a href="https://github.com/sihamais" target="blank">
          <FontAwesomeIcon className="h-8 w-8 mr-5 mb-2" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/siham-aissaoui-8aaa50185/"
          target="blank"
        >
          <FontAwesomeIcon className="h-8 w-8 mr-5 mb-2" icon={faLinkedin} />
        </a>
        <a
          href="https://www.linkedin.com/in/siham-aissaoui-8aaa50185/"
          target="blank"
        >
          <FontAwesomeIcon className="h-8 w-8 mr-5 mb-2" icon={faFilePdf} />
        </a>
      </div>
    </div>
  );
}