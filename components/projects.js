import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faAngular,
  faBootstrap,
  faReact,
  faVuejs,
  faNodeJs,
  faDocker,
  faRust,
} from "@fortawesome/free-brands-svg-icons";


const ProjectsList = [
  {
    projectName: "Valframe",
    projectLogo: "../valframe.svg",
    hasBg: false,
    projectLink: "valfra.me",
    projectDescription:
      "A different way to beautify data.\nThis program extracts data from large JSONS and displays it while taking into account the hierarchy. It does it with the use of depth-first search and breadth-first search algorithms. This project was generated with Angular CLI version 9.1.0 and is implemented as a single-page application.",
    projectGithubLink: "https://github.com/sihamais/valframe",
    projectTechs: [
      {
        techName: "Angular",
        techLogo: faAngular,
        techColor: "text-red-500",
        isFA: true,
      },
      {
        techName: "Typescript",
        techLogo: "typescript.png",
        isFA: false,
      },
      {
        techName: "Bootstrap",
        techLogo: faBootstrap,
        techColor: "text-indigo-600",
        isFA: true,
      },
    ],
  },
  {
    projectName: "Strugl",
    projectLogo: "../strugl.svg",
    hasBg: true,
    projectLink: "strugl.cc",
    projectDescription:
      "A decentralized social network powered by the IOTA Tangle.\nStrugglig to find a decentralized social network in which you can say whatever crap crosses your mind? Struggle no more ! With Strugl you can be whoever you want to be.",
    projectGithubLink: "https://github.com/pacokleitz/strugl",
    projectTechs: [
      {
        techName: "React",
        techLogo: faReact,
        techColor: "text-blue-400",
        isFA: true,
      },
    ],
  },
  {
    projectName: "Dolores",
    projectLogo: "../dolores.png",
    hasBg: true,
    projectLink: "dolo.rs",
    projectDescription:
      "An AI.\nDolores will be so powerful she will try to take over the world. But thanks to Rust, her algorithms will be perfectly balanced so that she cannot harm humans.\n(I bet Westworld didn't think of that.)",
    projectGithubLink: "https://github.com/sihamais/dolores",
    projectTechs: [
      {
        techName: "Rust",
        techLogo: faRust,
        techColor: "text-black",
        isFA: true,
      },
      {
        techName: "Pytorch",
        techLogo: "pytorch.png",
        isFA: false,
      },
    ],
  },
  {
    projectName: "Trojan Horsemen",
    projectLogo: "../trojanhorsemen.png",
    hasBg: true,
    projectLink: "trojanhorse.cc",
    projectDescription:
      "A game.\nI had no choice but to participate to this project with nine stangers to get my bachelor degree. Turns out I know how to control my anger and I can manage to do the work of three people at the same time.\n(I also learned a thing or two.)",
    projectGithubLink: "https://github.com/sihamais/trojanhorsemen",
    projectTechs: [
      {
        techName: "VueJS",
        techLogo: faVuejs,
        techColor: "text-green-600",
        isFA: true,
      },
      {
        techName: "Typescript",
        techLogo: "typescript.png",
        isFA: false,
      },
      {
        techName: "NodeJS",
        techLogo: faNodeJs,
        techColor: "text-green-500",
        isFA: true,
      },
      {
        techName: "Docker",
        techLogo: faDocker,
        techColor: "text-blue-600",
        isFA: true,
      },
    ],
  },
];

function ProjectsRender(props) {
  return (
    <div className="flex max-w-lg">
      <div className="space-y-2">
        {props.project.hasBg && (
          <div className="flex items-center justify-center h-12 w-12 rounded-md">
            <img src={props.project.projectLogo} className="h-12 w-12"></img>
          </div>
        )}
        {!props.project.hasBg && (
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-200">
            <img src={props.project.projectLogo} className="h-8 w-8"></img>
          </div>
        )}
        {props.project.projectTechs.map((tech) => (
          <TechsRender key={tech.techName} tech={tech} />
        ))}
      </div>
      <div className="ml-4">
        <div className="flex align-baseline justify-between  space-x-10">
          <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
            {props.project.projectName}
          </dt>
          <a
            href={"https://"+props.project.projectLink}
            className="text-blue-500 hover:underline"
            target="blank"
          >
            {props.project.projectLink}
          </a>
          <a href={props.project.projectGithubLink} target="blank">
            <FontAwesomeIcon
              className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 h-6 w-6"
              icon={faGithub}
            />
          </a>
        </div>
        <dd className="mt-2 text-base text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
          <p>{props.project.projectDescription}</p>
        </dd>
      </div>
    </div>
  );
}

function TechsRender(props) {
  return (
    <>
      {props.tech.isFA && (
        <FontAwesomeIcon
          className={props.tech.techColor + " m-auto w-8"}
          icon={props.tech.techLogo}
          title={props.tech.techName}
        />
      )}
      {!props.tech.isFA && (
        <img
          src={props.tech.techLogo}
          className="mx-auto w-7"
          title={props.tech.techName}
        ></img>
      )}
    </>
  );
}

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-screen lg:min-h-screen h-auto 
      bg-white content-center justify-center grid
      dark:bg-gray-800 py-10"
    >
      <div className="h-full px-4 py-10 sm:px-6 lg:px-8 content-center space-y-10">
        <div className="lg:text-center pl-8">
          <h2 className="text-xl text-gray-900 dark:text-white font-bold tracking-wide uppercase">
            Projects
          </h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-20 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-16">
            {ProjectsList.map((project) => (
              <ProjectsRender key={project.projectName} project={project} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
