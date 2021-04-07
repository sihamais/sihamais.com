import FadeIn from "react-fade-in";
import { useState, useEffect } from "react";

function Sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function About() {
  const [slides] = useState([
    {
      id: 0,
      pic: "../1-portfolio.svg",
      text: "Welcome to my portfolio !",
    },
    { id: 1, pic: "../3-tasks.svg", text: "Some stuff" },
    { id: 2, pic: "../5-resume.svg", text: "Check out my resume" },
  ]);

  let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
  let currentSlide = slides[currentPosition]; // variable index value we can reference later

  useEffect(() => {
    console.log(currentSlide);
  });

  function SlideTimer() {
    while (true) {
      Sleep(30000);
      if (currentPosition == slides.length - 1) {
        setCurrentPosition((currentPosition = 0));
      } else {
        setCurrentPosition(currentPosition + 1);
      }
      currentSlide = slides[currentPosition];
    }
  }

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
      className="w-screen lg:min-h-screen h-auto grid content-center justify-center
      bg-white md:py-20 px-4 sm:px-6 lg:px-8 pt-20 py-10
      dark:bg-gray-800"
    >
      <div className="h-auto space-y-4 py-4 lg:px-12 sm:px-6 content-center">
        <div className="md:flex grid space-x-0 gap-2 justify-center h-auto dark:text-gray-200">
          <img
            src={currentSlide.pic}
            className="lg:w-5/12 w-11/12 md:w-7/12  justify-self-center"
          ></img>
          <h3 className="px-4 text-xl text-center m-auto font-bold text-gray-800 dark:text-gray-100 uppercase whitespace-pre-wrap">
            {currentSlide.text}
          </h3>
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
