import React, { useContext, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import { MyContext } from "../context/AppContext";
import CustomMouse from "./CustomMouse";

const PageContainer = () => {
  const { state } = useContext(MyContext);
  return (
    <div
      className={`w-full h-screen px-10 py-20 flex items-center justify-center transition-all duration-1000 bg-black`}
      style={{ backgroundColor: state.background_container }}
    >
      <div
        className={`w-full mx-auto max-w-7xl border border-black border-solid overflow-hidden transition-all duration-1000 text-white`}
        style={{
          backgroundColor: state.background_color,
          color: state.text_color,
        }}
      >
        <Header />
        <Hero />
        <CustomMouse />
      </div>
    </div>
  );
};

export default PageContainer;
