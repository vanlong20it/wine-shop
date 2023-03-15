import React from "react";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7 border-solid border-r border-r-black">
        <div className="px-10 py-20 border-b border-black border-solid">
          <h1 className="text-[95px] leading-none font-hero">
            Just relax, and go with the flow
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            consequatur itaque error beatae dicta totam sint nulla, dolore vel
            quos quidem maiores eveniet expedita quae deleniti minus eius!
            Ullam, iure.
          </p>
          <div className="mt-10">
            <button
              type="button"
              className="px-6 py-3 border-solid border-black border"
            >
              View more
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5 p-5 gap-5 items-center">
          <div className="col-span-1">
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Wine"
              className="max-w-full w-full h-24 object-cover"
            />
          </div>
          <div className="col-span-2">
            <h2 className="font-semibold text-xl">Come to the wine-tasting</h2>
            <p className="text-sm">
              Lorem ipsum dolor adipisicing elit. Quas nobis sunt placeat sint
              magni rerum porro!
            </p>
          </div>
          <div className="col-span-2 flex items-center justify-center text-inherit">
            <button
              type="button"
              className="aspect-square rounded-full p-3 border border-solid border-black -rotate-12"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <div className="h-full">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
