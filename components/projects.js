import React from "react";
import en from "../public/translations/en.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t, translate } from "react-switch-lang";
import {
  faGithub,
  faAngular,
  faBootstrap,
  faReact,
  faVuejs,
  faNodeJs,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

class TechsRender extends React.Component {
  iconParse(iconName) {
    switch (iconName) {
      case "faAngular":
        return faAngular;
      case "faBootstrap":
        return faBootstrap;
      case "faReact":
        return faReact;
      case "faVuejs":
        return faVuejs;
      case "faNodeJs":
        return faNodeJs;
      case "faDocker":
        return faDocker;
    }
  }

  render() {
    return (
      <>
        {this.props.tech.isFA && (
          <FontAwesomeIcon
            className={this.props.tech.techColor + " m-auto w-8"}
            icon={this.iconParse(this.props.tech.techLogo)}
            title={this.props.tech.techName}
          />
        )}
        {!this.props.tech.isFA && (
          <img
            src={this.props.tech.techLogo}
            className="mx-auto w-7"
            title={this.props.tech.techName}
          ></img>
        )}
      </>
    );
  }
}

class ProjectsRender extends React.Component {
  render() {
    return (
      <div className="flex max-w-lg">
        <div className="space-y-2">
          {this.props.project.hasBg && (
            <div className="flex items-center justify-center h-12 w-12 rounded-md">
              <img
                src={this.props.project.projectLogo}
                className="h-12 w-12"
              ></img>
            </div>
          )}
          {!this.props.project.hasBg && (
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-200">
              <img
                src={this.props.project.projectLogo}
                className="h-8 w-8"
              ></img>
            </div>
          )}
          {this.props.project.projectTechs.map((tech) => (
            <TechsRender key={tech.techName} tech={tech} />
          ))}
        </div>
        <div className="ml-4">
          <div className="flex align-baseline justify-between  space-x-10">
            <dt className="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-100">
              {this.props.project.projectName}
            </dt>
            <a
              href={"https://" + this.props.project.projectLink}
              className="text-blue-500 hover:underline"
              target="blank"
            >
              {this.props.project.projectLink}
            </a>
            <a href={this.props.project.projectGithubLink} target="blank">
              <FontAwesomeIcon
                className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 h-6 w-6"
                icon={faGithub}
              />
            </a>
          </div>
          <dd className="mt-2 text-base text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
            <p>{t(this.props.project.projectDescription)}</p>
          </dd>
        </div>
      </div>
    );
  }
}
class Projects extends React.Component {
  ProjectsList = en.projects;

  render() {
    return (
      <div
        id="projects"
        className="w-screen lg:min-h-screen h-auto 
      bg-white content-center justify-center grid
      dark:bg-gray-800 py-10"
      >
        <div className="h-full px-4 py-10 sm:px-6 lg:px-8 content-center space-y-10">
          <div className="lg:text-center pl-8 flex">
            <div className="h-1 w-1/5 bg-gradient-to-l from-green-400 to-blue-400 m-auto dark:bg-gray-50 rounded-full"></div>
            <h2 className="text-xl text-gray-900 dark:text-white font-bold tracking-wide uppercase">
              Projects
            </h2>
            <div className="h-1 w-1/5 bg-gradient-to-r from-green-400 to-blue-400 m-auto dark:bg-gray-50 rounded-full"></div>
          </div>
          <div className="mt-10">
            <dl className="space-y-20 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-16">
              {this.ProjectsList.map((project) => (
                <ProjectsRender key={project.projectName} project={project} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default translate(Projects);
