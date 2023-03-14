import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import Wine1 from "../assets/images/bottle-of-wine-1.png";
import Wine2 from "../assets/images/bottle-of-wine-2.png";
import Wine3 from "../assets/images/bottle-of-wine-3.png";
import { MyContext } from "../context/AppContext";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrSlide, setArrSlide] = useState([Wine1, Wine2, Wine3, Wine1, Wine2]);
  const [isLoad, setIsLoad] = useState(false);
  const [isAnimation, setIsAnimation] = useState(true);
  const { dispatch } = useContext(MyContext);
  const [isToggle, setIsToggle] = useState(false);

  useLayoutEffect(() => {
    if (currentSlide === arrSlide.length - 1) {
      setCurrentSlide(0);
    } else if (currentSlide > arrSlide.length - 2) {
      setIsAnimation(false);
      setCurrentSlide(0);
      setIsLoad(false);
    }
  }, [currentSlide, arrSlide]);

  const handleNextSlide = () => {
    setIsToggle((prev) => !prev);
    setIsAnimation(true);
    if (isLoad) {
      return;
    }
    dispatch({
      type: "CHANGE_BACKGROUND",
      payload: isToggle ? "bg-blue-200" : "bg-pink-200",
    });
    setIsLoad(true);
    if (currentSlide > arrSlide.length - 2) {
      setIsAnimation(false);
      setCurrentSlide(0);
    } else
      setCurrentSlide((oldCurrent) => {
        return oldCurrent + 1;
      });
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
              onClick={handleNextSlide}
              className={`absolute top-[20%] right-0 translate-x-1/2 bg-pink-100 z-10 flex items-center justify-center w-20 h-20 hover:bg-black hover:text-white transition-all hover:border-black duration-500 rounded-full border-black border-solid border`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-nowrap h-full${
          isAnimation ? " transition-all duration-1000 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 60}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {arrSlide.map((item, index) => {
          return (
            <div key={index} className="min-w-[60%] grid grid-rows-4">
              <div className="py-5 px-5 row-span-4">
                <img
                  src={item}
                  alt=""
                  className="max-w-full w-full h-[500px] object-contain drop-shadow-md shadow-black"
                />
              </div>
              <div className="px-5 py-10 row-span-1">
                <h1>Wine relax: red semi-sweet</h1>
                <hr className="border-t border-gray-500 border-solid my-2" />
                <div className="flex justify-between items-center">
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
