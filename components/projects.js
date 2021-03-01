import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faRust } from "@fortawesome/free-brands-svg-icons";

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
          <h2 className="text-xl text-indigo-600 dark:text-indigo-500 font-bold tracking-wide uppercase">
            Projects
          </h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10">
            <div className="max-w-lg flex">
              <div className="space-y-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-200">
                  <img src="../valframe.svg" className="h-8 w-8"></img>
                </div>
                <FontAwesomeIcon
                  className="m-auto text-red-600 h-8 w-8"
                  icon={faAngular}
                  title="Angular"
                />
                <img
                  src="1200px-Typescript_logo_2020.svg.png"
                  className="m-auto h-7 w-7"
                  title="Typescript"
                ></img>
                <FontAwesomeIcon
                  className="m-auto text-indigo-600 h-8 w-8"
                  icon={faBootstrap}
                  title="Bootstrap"
                />
              </div>
              <div className="ml-4">
                <div className="flex align-baseline justify-between space-x-10">
                  <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
                    Valframe
                  </dt>
                  <a
                    href="https://valfra.me"
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
              <div className="space-y-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-900">
                  <img src="/strugl.svg" className="h-8 w-8"></img>
                </div>
                <FontAwesomeIcon
                  className="m-auto text-blue-400 h-8 w-8"
                  icon={faReact}
                  title="React"
                />
              </div>
              <div className="ml-4">
                <div className="flex align-baseline justify-between  space-x-10">
                  <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
                    Strugl
                  </dt>
                  <a
                    href="https://stru.gl"
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
                    <br></br>
                    Strugglig to find a decentralized social network in which
                    you can say whatever crap crosses your mind? Struggle no
                    more ! With Strugl you can be whoever you want to be.
                  </p>
                </dd>
              </div>
            </div>
            <div className="flex max-w-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-200">
                  <img src="../valframe.svg" className="h-8 w-8"></img>
                </div>
                <FontAwesomeIcon
                  className="m-auto text-gray h-8 w-8"
                  icon={faRust}
                  title="Rust"
                />
              </div>
              <div className="ml-4">
                <div className="flex align-baseline justify-between  space-x-10">
                  <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
                    Dolores
                  </dt>
                  <a
                    href="https://dolo.rs"
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
                    Dolores will be so powerful she will try to take over the
                    world. But thanks to Rust, her algorithms will be perfectly
                    balanced so that she cannot harm humans. <br></br> (I bet
                    Westworld didn't think of that.)
                  </p>
                </dd>
              </div>
            </div>
            <div className="flex max-w-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-md">
                  <img src="../trojanhorsemen.png" className="h-12 w-12"></img>
                </div>
                <FontAwesomeIcon
                  className="m-auto text-green-600 h-8 w-8"
                  icon={faVuejs}
                  title="VueJS"
                />
                <img
                  src="1200px-Typescript_logo_2020.svg.png"
                  className="mx-auto h-7 w-7"
                  title="Typescript"
                ></img>
                <FontAwesomeIcon
                  className="m-auto text-green-600 h-8 w-8"
                  icon={faNodeJs}
                  title="NodeJS"
                />
                <FontAwesomeIcon
                  className="m-auto text-blue-600 h-8 w-8"
                  icon={faDocker}
                  title="Docker"
                />
              </div>
              <div className="ml-4">
                <div className="flex align-baseline justify-between  space-x-10">
                  <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
                    The trojan horsemen
                  </dt>
                  <a
                    href="https://trojanho.rs"
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
                    A game.<br></br>I had no choice but to participate to this
                    project with nine stangers to get my bachelor degree. Turns
                    out I know how to control my anger and I can manage to do
                    the work of three people at the same time. <br></br>(I also
                    learned a thing or two.)
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
