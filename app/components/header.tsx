import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDark, setDark] = useState(false);

  function darkMode() {
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
    setDark(!isDark);
  }

  return (
    <nav className="bg-white fixed w-screen dark:border-gray-900 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap h-auto py-3 items-center justify-around">
          <div className="lg:w-auto lg:static lg:block">
            <Link href="/#about" to="about" smooth={true}>
              <a className="cursor-pointer text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-900 dark:text-white">
                Sihamais.com
              </a>
            </Link>
          </div>
          <div className="md:block hidden flex space-x-4 px-6">
            <Link href="/#about" to="about" as="/" smooth={true}>
              <a className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </Link>
            <Link href="/#skills" to="skills" as="/" smooth={true}>
              <a className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                Skills
              </a>
            </Link>
            <Link href="/#projects" to="projects" as="/" smooth={true}>
              <a className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
            </Link>
            <Link href="/#contact" to="contact" as="/" smooth={true}>
              <a className="cursor-pointer text-gray-600 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </Link>
          </div>
          <div
            className="w-28 h-9 rounded-3xl bg-gray-100 dark:bg-gray-700 border dark:border-gray-700 p-1 grid items-center content-center justify-start dark:justify-end cursor-pointer focus:outline-none"
            onClick={darkMode}
          >
            <p className="bg-white dark:bg-gray-800 shadow border-gray-200 w-min rounded-3xl self-center px-3 py-1 text-sm font-semibold text-gray-800 dark:text-gray-300 cursor-pointer focus:outline-none">
              {isDark ? "DARK" : "LIGHT"}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
