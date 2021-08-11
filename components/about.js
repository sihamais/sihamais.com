import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const [slides] = useState([
    {
      id: 0,
      pic: "../1-portfolio.svg",
      text: "Hey there ! I'm Siham\nWelcome to my portfolio !",
    },
    {
      id: 1,
      pic: "../2-programmer.svg",
      text: "I'm a software developper\nI spend most of my time on my computer learning new technologies and working on new projects",
    },
    {
      id: 2,
      pic: "../3-tasks.svg",
      text: "I always fix myself goals to get where I want to be later",
    },
    {
      id: 3,
      pic: "../4-career.svg",
      text: "I take my work very seriously and enjoy every step of it",
    },
    {
      id: 4,
      pic: "../5-universe.svg",
      text: "Armed with my logical reasoning and my creativity, I solve the problems I encounter on a daily basis",
    },
    {
      id: 5,
      pic: "../6-resume.svg",
      text: "Check out my resume or scroll down to learn more about me",
    },
    { id: 6, pic: "../7-mail.svg", text: "Get in touch if you want to talk" },
  ]);

  let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
  let currentSlide = slides[currentPosition]; // variable index value we can reference later

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      if (currentPosition == slides.length - 1) {
        clearInterval(interval);
      } else {
        setCurrentPosition(currentPosition + 1);
      }
      currentSlide = slides[currentPosition];
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  });

  function BtnClick(id) {
    setCurrentPosition((currentPosition = id));
    currentSlide = slides[currentPosition];
  }

  function ButtonRender(props) {
    return (
      <div
        onClick={() => BtnClick(props.slide.id)}
        className="w-4 h-4 rounded-full ring-2 ring-gray-400 justify-center dark:ring-indigo-200"
      >
        {currentSlide == props.slide && (
          <div className="w-4 h-4 rounded-full bg-indigo-200 dark:bg-gray-500"></div>
        )}
      </div>
    );
  }
  return (
    <div
      id="about"
      className="w-full lg:min-h-screen h-auto grid content-center justify-center
      bg-white md:py-20 md:pt-30 px-4 sm:px-6 lg:px-8 pt-20 py-10
      dark:bg-gray-800"
    >
      <div className="h-auto space-y-4 lg:space-y-10 py-4 lg:px-12 sm:px-6 content-center items-between">
        <div className="md:flex grid space-x-0 gap-2 justify-center h-auto dark:text-gray-200 transition ease-in-out">
          <img
            src={currentSlide.pic}
            className="sm:h-md h-sm md:h-lg justify-self-center"
          ></img>
          {currentPosition == 5 && (
            <h3 className="px-4 text-xl md:text-left text-center m-auto font-bold text-gray-800 dark:text-white uppercase whitespace-pre-wrap">
              <a
                href="../CV.pdf"
                target="blank"
                title="My resume"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Check out my resume
              </a>{" "}
              <br></br>or<br></br>scroll down to learn more about me
            </h3>
          )}
          {currentPosition != 5 && (
            <h3 className="px-4 text-xl md:text-left text-center m-auto font-bold text-gray-800 dark:text-white uppercase whitespace-pre-wrap">
              {currentSlide.text}
            </h3>
          )}
        </div>
        <div className="flex space-x-2 justify-center">
          {slides.map((slide) => (
            <ButtonRender key={slide.id} slide={slide} />
          ))}
        </div>
      </div>
    </div>
  );
}
