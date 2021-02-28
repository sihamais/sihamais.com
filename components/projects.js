import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-screen lg:min-h-screen h-auto 
      bg-white content-center justify-center grid
      dark:bg-gray-800"
    >
      <div className="h-full px-4 py-10 sm:px-6 lg:px-8 content-center space-y-10">
        <div className="lg:text-center pl-8">
          <h2 className="text-base text-xl text-indigo-600 dark:text-indigo-500 font-bold tracking-wide uppercase">
            Projects
          </h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10">
            <div className="max-w-lg flex">
              <div className="space-y-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-200">
                  <img src="../valframe.svg" className="h-8 w-8"></img>
                </div>
              </div>
              <div className="ml-4">
                <div className="flex align-baseline justify-between space-x-10">
                  <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
                    Valframe
                  </dt>
                  <a
                    href="valfra.me"
                    className="text-blue-500 hover:underline"
                    target="blank"
                  >
                    valfra.me
                  </a>
                  <a href="https://github.com/sihamais/valframe" target="blank">
                    <FontAwesomeIcon
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 h-6 w-6"
                      icon={faGithub}
                    />
                  </a>
                </div>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  <p>
                    A different way to beautify data.<br></br>
                    This program extracts data from large JSONS and displays it
                    while taking into account the hierarchy. It does it with the
                    use of{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Depth-first_search"
                      target="blank"
                      className="text-blue-500 hover:underline"
                    >
                      depth-first search
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Breadth-first_search"
                      target="blank"
                      className="text-blue-500 hover:underline"
                    >
                      breadth-first search{" "}
                    </a>{" "}
                    algorithms. This project was generated with{" "}
                    <a
                      href="https://github.com/angular/angular-cli"
                      target="blank"
                      className="text-blue-500 hover:underline"
                    >
                      Angular CLI
                    </a>{" "}
                    version 9.1.0 and is implemented as a single-page
                    application.
                  </p>
                </dd>
              </div>
            </div>
            <div className="flex max-w-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-200">
                  <img src="../valframe.svg" className="h-8 w-8"></img>
                </div>
              </div>
              <div className="ml-4">
                <div className="flex align-baseline justify-between  space-x-10">
                  <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
                    Strugl
                  </dt>
                  <a
                    href="stru.gl"
                    className="text-blue-500 hover:underline"
                    target="blank"
                  >
                    stru.gl
                  </a>
                  <a href="https://github.com/sihamais/strugl" target="blank">
                    <FontAwesomeIcon
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 h-6 w-6"
                      icon={faGithub}
                    />
                  </a>
                </div>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  <p>
                    A decentralized social network powered by the IOTA Tangle.
                    <br></br>{" "}
                  </p>
                </dd>
              </div>
            </div>
            <div className="flex max-w-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-200">
                  <img src="../valframe.svg" className="h-8 w-8"></img>
                </div>
              </div>
              <div className="ml-4">
                <div className="flex align-baseline justify-between  space-x-10">
                  <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
                    Dolores
                  </dt>
                  <a
                    href="dolo.rs"
                    className="text-blue-500 hover:underline"
                    target="blank"
                  >
                    dolo.rs
                  </a>
                  <a href="https://github.com/sihamais/dolores" target="blank">
                    <FontAwesomeIcon
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 h-6 w-6"
                      icon={faGithub}
                    />
                  </a>
                </div>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  <p>
                    An AI.<br></br>
                    This program extracts data from large JSONS and displays it
                    while taking into account the hierarchy. It does it with the
                    use of{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Depth-first_search"
                      target="blank"
                      className="text-blue-500 hover:underline"
                    >
                      depth-first search
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Breadth-first_search"
                      target="blank"
                      className="text-blue-500 hover:underline"
                    >
                      breadth-first search{" "}
                    </a>{" "}
                    algorithms. This project was generated with{" "}
                    <a
                      href="https://github.com/angular/angular-cli"
                      target="blank"
                      className="text-blue-500 hover:underline"
                    >
                      Angular CLI
                    </a>{" "}
                    version 9.1.0 and is implemented as a single-page
                    application.
                  </p>
                </dd>
              </div>
            </div>
            <div className="flex max-w-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-200">
                  <img src="../valframe.svg" className="h-8 w-8"></img>
                </div>
              </div>
              <div className="ml-4">
                <div className="flex align-baseline justify-between  space-x-10">
                  <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
                    The trojan horsemen
                  </dt>
                  <a
                    href="valfra.me"
                    className="text-blue-500 hover:underline"
                    target="blank"
                  >
                    trojanho.rs
                  </a>
                  <a
                    href="https://github.com/sihamais/trojan-horsemen"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 h-6 w-6"
                      icon={faGithub}
                    />
                  </a>
                </div>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  <p>
                    A game.<br></br>
                    This program extracts data from large JSONS and displays it
                    while taking into account the hierarchy. It does it with the
                    use of{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Depth-first_search"
                      target="blank"
                      className="text-blue-500 hover:underline"
                    >
                      depth-first search
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Breadth-first_search"
                      target="blank"
                      className="text-blue-500 hover:underline"
                    >
                      breadth-first search{" "}
                    </a>{" "}
                    algorithms. This project was generated with{" "}
                    <a
                      href="https://github.com/angular/angular-cli"
                      target="blank"
                      className="text-blue-500 hover:underline"
                    >
                      Angular CLI
                    </a>{" "}
                    version 9.1.0 and is implemented as a single-page
                    application.
                  </p>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
