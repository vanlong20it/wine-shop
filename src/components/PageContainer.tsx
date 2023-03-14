import React, { useContext, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import { MyContext } from "../context/AppContext";

const PageContainer = () => {
  const { state } = useContext(MyContext);
  return (
    <div
      className={`w-full h-screen px-10 py-20 flex items-center justify-center transition-all duration-1000 ${
        state.backgroundColor ? `${state.backgroundColor}/80` : "bg-blue-200/80"
      }`}
    >
      <div
        className={`w-full mx-auto max-w-7xl border border-black border-solid overflow-hidden transition-all duration-1000 ${
          state.backgroundColor ? state.backgroundColor : "bg-blue-200"
        }`}
      >
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default PageContainer;
