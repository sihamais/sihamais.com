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
    projectName: "Strugl",
    projectLogo: "../strugl.svg",
    hasBg: true,
    projectLink: "strugl.cc",
    projectDescription:
      "A privacy-conscious social network.\nStruggling to find a decentralized social network in which you can say whatever crosses your mind? Struggle no more ! With Strugl you can be whoever you want.\nI am in charge of the front end application and my realisations are distributed as follow:\n- Front end web application with Next.js and Typescript\n- Data management with Redux\n- Responsive and interactive design with Tailwind",
    projectGithubLink: "https://github.com/pacokleitz/strugl",
    projectTechs: [
      {
        techName: "React",
        techLogo: faReact,
        techColor: "text-blue-400",
        isFA: true,
      },
      {
        techName: "GO",
        techLogo: "go.svg",
        isFA: false,
      },
      {
        techName: "PostgreSQL",
        techLogo: "PostgreSQL.svg",
        isFA: false,
      },
      {
        techName: "Tailwind",
        techLogo: "tailwindcss.svg",
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
      "A game.\nI participated in a group project with 9 other people as part of a university course. Helped by the scrum methodology, I learned to communicate effectively and in the interest of the group.\nMy tasks were distributed as follow:\n- Back end web application with Express and Typescript\n- PostgreSQL database with TypeORM\n- WebSockets with Socket.IO\n- Deployment with Docker and DigitalOcean",
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
        techName: "Socket-io",
        techLogo: "Socket-io.svg",
        isFA: false,
      },
      {
        techName: "PostgreSQL",
        techLogo: "PostgreSQL.svg",
        isFA: false,
      },
      {
        techName: "Docker",
        techLogo: faDocker,
        techColor: "text-blue-600",
        isFA: true,
      },
    ],
  },
  {
    projectName: "The Bank",
    projectLogo: "../dolores.png",
    hasBg: true,
    projectDescription:
      "An application to view the bank's quarterly turnover and sales volumes as well as bankers' performances.\nThe aim of this application is to combine efficiency and ergonomics in order to provide the information necessary for carrying out a quarterly report. The application groups together all the branches of the bank and allows data to be filtered according to the date, the branch, or the banker.\n",
    projectGithubLink: "https://github.com/sihamais/TheBank",
    projectTechs: [
      {
        techName: "Qt",
        techLogo: "qt.svg",
        isFA: false,
      },
      {
        techName: "C++",
        techLogo: "c++.svg",
        isFA: false,
      },
    ],
  },
  {
    projectName: "Valframe",
    projectLogo: "../valframe.svg",
    hasBg: false,
    projectDescription:
      "A different way to visualize data.\nThis program extracts data from large JSONS and displays it while taking into account the hierarchy. This project was generated with Angular CLI version 9.1.0 and is implemented as a single-page application.",
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
];

function ProjectsRender(props) {
  return (
      <div className="flex text-justify m-auto max-w-3xl">
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
          <div className="flex align-baseline justify-between lg:space-x-10 md:space-x-4">
            <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
              {props.project.projectName}
            </dt>
            <a
              href={"https://" + props.project.projectLink}
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
      className="w-full lg:min-h-screen h-auto 
      bg-white grid justify-items-center content-center items-start
      dark:bg-gray-800 py-10"
    >
      <div className="h-full px-4 py-10 sm:px-6 lg:px-8 grid gap-y-10">
        <div className="lg:text-center pl-8 flex">
          <div className="h-1 w-1/5 bg-gradient-to-l from-green-400 to-blue-400 m-auto dark:bg-gray-50 rounded-full"></div>
          <h2 className="text-xl text-gray-900 dark:text-white font-bold tracking-wide uppercase">
            Projects
          </h2>
          <div className="h-1 w-1/5 bg-gradient-to-r from-green-400 to-blue-400 m-auto dark:bg-gray-50 rounded-full"></div>
        </div>
        <div className="mt-10">
          <div className="w-full space-y-20  md:space-y-0 md:grid md:grid-flow-row lg:gap-20 md:gap-16 md:grid-cols-2 items-start">
            {ProjectsList.map((project) => (
              <ProjectsRender key={project.projectName} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
