import styles from "../styles/Home.module.css";
import Link from "next/link";

let dark = false;

function darkMode() {
  dark = !dark;
  if (dark) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

export default function Header() {
  return (
    <nav className="bg-white fixed w-screen dark:border-gray-900 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap h-auto py-3 items-center justify-around">
          <div className="lg:w-auto lg:static lg:block">
            <Link href="/">
              <a className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-900 dark:text-white">
                Sihamais.com
              </a>
            </Link>
          </div>
          <div className="md:block hidden flex space-x-4 px-6">
            <Link href="/#about">
              <a className="text-gray-600 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </Link>
            <Link href="/#skills">
              <a className="text-gray-600 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                Skills
              </a>
            </Link>
            <Link href="/#projects">
              <a className="text-gray-600 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
            </Link>
            <Link href="/#contact">
              <a className="text-gray-600 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </Link>
          </div>
          <div className="flex space-x-2 px-6">
            <div>
              <img src="https://img.icons8.com/dusk/35/000000/sun--v2.png" />
            </div>
            <div className="self-center">
              <label className={styles.switch}>
                <input type="checkbox" onClick={darkMode} />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div>
              <img src="https://img.icons8.com/emoji/35/000000/crescent-moon-emoji.png" />{" "}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
