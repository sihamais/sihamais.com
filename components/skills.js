import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCuttlefish } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-screen lg:min-h-screen md:h-auto py-20 lg:px-20 bg-gray-100 space-y-10 dark:bg-gray-700"
    >
      <div className="grid grid-cols-2">
        <div className="lg:text-center pl-8">
          <h2 className="text-xl text-gray-900 dark:text-white font-bold tracking-wide uppercase">
            Technical Skills
          </h2>
        </div>
        <div className="lg:text-center pl-8">
          <h2 className="text-xl text-gray-900 dark:text-white font-bold tracking-wide uppercase">
            Soft Skills
          </h2>
        </div>
      </div>
    </div>
  );
}
