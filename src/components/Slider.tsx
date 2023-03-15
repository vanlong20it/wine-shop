import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import Wine1 from "../assets/images/bottle-of-wine-1.png";
import Wine2 from "../assets/images/bottle-of-wine-2.png";
import Wine3 from "../assets/images/bottle-of-wine-3.png";
import { MyContext } from "../context/AppContext";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrSlide, setArrSlide] = useState([
    {
      image: Wine1,
      background_container: "#4d4d01",
      background_color: "#bfad41",
      text_color: "black",
    },
    {
      image: Wine2,
      background_color: "#17641d",
      background_container: "#234202",
      text_color: "white",
    },
    {
      image: Wine3,
      background_color: "#8c1815",
      background_container: "#2c0000",
      text_color: "white",
    },
    {
      image: Wine1,
      background_container: "#4d4d01",
      background_color: "#bfad41",
      text_color: "black",
    },
    {
      image: Wine2,
      background_color: "#17641d",
      background_container: "#234202",
      text_color: "white",
    },
  ]);
  const [isLoad, setIsLoad] = useState(false);
  const [isAnimation, setIsAnimation] = useState(true);
  const { state, dispatch } = useContext(MyContext);
  const [isToggle, setIsToggle] = useState(false);

  useLayoutEffect(() => {
    if (currentSlide === arrSlide.length - 1) {
      setCurrentSlide(0);
    } else if (currentSlide > arrSlide.length - 2) {
      setIsAnimation(false);
      setCurrentSlide(0);
      setIsLoad(false);
    }
    dispatch({
      type: "CHANGE_BACKGROUND",
      payload: {
        background_color: arrSlide[currentSlide].background_color,
        background_container: arrSlide[currentSlide].background_container,
        text_color: arrSlide[currentSlide].text_color,
      },
    });
  }, [currentSlide, arrSlide]);

  const handleNextSlide = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {

    setIsToggle((prev) => !prev);
    setIsAnimation(true);
    if (isLoad) {
      return;
    }
    setIsLoad(true);
    if (currentSlide > arrSlide.length - 2) {
      setIsAnimation(false);
      setCurrentSlide(0);
    } else {
      setCurrentSlide((oldCurrent) => {
        return oldCurrent + 1;
      });
    }
  };

  const handleTransitionEnd = (e: any) => {
    setIsLoad(false);

    if (currentSlide >= arrSlide.length - 2) {
      setIsAnimation(false);
      setCurrentSlide(0);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative w-full h-full grid grid-cols-5">
          <div className="col-span-3 border-r border-solid border-black relative">
            <button
              type="button"
              onClick={(e) => handleNextSlide(e)}
              className={`absolute top-[20%] right-0 translate-x-1/2 z-10 flex items-center justify-center w-20 h-20 transition-all duration-500 rounded-full border-black border-solid border`}
              style={{
                backgroundColor: state.background_color,
                color: state.text_color,
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-nowrap h-full${
          isAnimation ? " transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 60}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {arrSlide.map((item, index) => {
          return (
            <div key={index} className="min-w-[60%] grid grid-rows-4">
              <div className="py-5 px-5 row-span-4">
                <img
                  src={item.image}
                  alt=""
                  className="max-w-full w-full h-[500px] object-contain drop-shadow-md shadow-black"
                />
              </div>
              <div className="px-5 py-10 row-span-1">
                <h1>Wine relax: red semi-sweet</h1>
                <hr className="border-t border-black border-solid my-2" />
                <div className="flex justify-between">
                  <p>$ 123</p>
                  <button type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
