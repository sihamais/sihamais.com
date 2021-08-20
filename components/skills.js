const skillsList = [
  {
    directoryName: "Developement",
    subdirectories: [
      "Typescript / Javascript",
      "Java",
      "C",
      "HTML 5",
      "CSS 3 / SASS",
      "PostgreSQL",
    ],
  },
  {
    directoryName: "Frameworks",
    subdirectories: [
      "React / Next.js",
      "Node.js / Express.js",
      "Angular 10",
      "Bootstrap / Tailwind",
    ],
  },
  {
    directoryName: "Tools",
    subdirectories: ["Git", "Docker", "Kubernetes", "Visual Studio Code"],
  },
  {
    directoryName: "Soft skills",
    subdirectories: [
      "Adaptability",
      "Perfectionism",
      "Sense of organization",
      "Sense of relational",
      "Autonomy",
    ],
  },
];

function SubdirectoryRender(props) {
  return (
    <div className="flex">
      <li className="text-center text-lg text-gray-600 dark:text-gray-300">
        {props.sub}
      </li>
    </div>
  );
}

function DirectoryRender(props) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h3 className="text-2xl font-semibold p-7 bg-clip-text text-transparent bg-gradient-to-t from-gray-200 to-gray-400 dark:from-gray-500 dark:to-gray-700">
        {props.skill.directoryName}
      </h3>
      <ul className="list-disc list-inside px-10 py-5">
        {props.skill.subdirectories.map((sub) => (
          <SubdirectoryRender key={sub} sub={sub} />
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full lg:min-h-screen md:h-auto lg:px-20 bg-gray-100 dark:bg-gray-700 content-center justify-center grid py-10"
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
      <div className="mt-10 space-y-0 lg:flex  sm:grid-cols-2 gap-10 lg:gap-x-0 space-x-0 lg:space-x-10 grid lg:items-start">
        {skillsList.map((skill) => (
          <DirectoryRender key={skill.directoryName} skill={skill} />
        ))}
      </div>
    </div>
  );
}
