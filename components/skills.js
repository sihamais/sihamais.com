import React from "react";
import en from "../public/translations/en.json";
import { t, translate } from "react-switch-lang";

class SubdirectoryRender extends React.Component {
  render() {
    return (
      <div className="flex">
        <li className="text-center text-lg text-gray-600 dark:text-gray-300">
          {this.props.sub}
        </li>
      </div>
    );
  }
}

class DirectoryRender extends React.Component {
  render() {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-md">
        <h3 className="text-2xl font-semibold p-7 bg-clip-text text-transparent bg-gradient-to-t from-gray-200 to-gray-400 dark:from-gray-500 dark:to-gray-700">
          {t(this.props.skill.directoryName)}
        </h3>
        <ul className="list-disc list-inside px-10 py-5">
          {this.props.skill.subdirectories.map((sub) => (
            <SubdirectoryRender key={sub} sub={sub} />
          ))}
        </ul>
      </div>
    );
  }
}

class Skills extends React.Component {
  skillsList = en.skills;

  render() {
    return (
      <div
        id="skills"
        className="w-screen lg:min-h-screen md:h-auto lg:px-20 bg-gray-100 dark:bg-gray-700 content-center justify-center grid py-10"
      >
        <div className="h-full px-4 py-10 sm:px-6 lg:px-8 content-center lg:text-center">
          <div className="flex">
            <div className="h-1 w-1/5 bg-gradient-to-l from-red-400 to-yellow-400 m-auto dark:bg-gray-50 rounded-full"></div>
            <h2 className="text-xl text-gray-900 dark:text-white font-bold tracking-wide uppercase">
              Skills
            </h2>
            <div className="h-1 w-1/5 bg-gradient-to-r from-red-400 to-yellow-400 m-auto dark:bg-gray-50 rounded-full"></div>
          </div>
        </div>
        <div className="mt-10 space-y-0 lg:flex sm:grid sm:grid-cols-2 gap-10 lg:gap-x-0 space-x-0 flex-row lg:space-x-10 grid lg:items-start items-stretch self-center flex-grow">
          {this.skillsList.map((skill) => (
            <DirectoryRender key={skill.directoryName} skill={skill} />
          ))}
        </div>
      </div>
    );
  }
}

export default translate(Skills)
