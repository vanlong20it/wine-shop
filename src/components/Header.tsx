import React from "react";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-12 border-b border-black border-solid items-center">
        <div className="col-span-1 last:border-r-0 border-solid border-r border-black px-4 py-2">
          <div className="w-20 h-20 flex items-center justify-center">
            <a href="#home">Logo</a>
          </div>
        </div>
        <div className="col-span-6 px-4 py-2 last:border-r-0 border-solid border-r border-black h-full flex items-center w-full">
          <nav className="w-full">
            <ul className="flex justify-end items-center">
              <li>
                <a href="#about-us" className="inline-block px-4 py-2">
                  About us
                </a>
              </li>
              <li>
                <a href="#wines" className="inline-block px-4 py-2">
                  Wines
                </a>
              </li>
              <li>
                <a href="#our-story" className="inline-block px-4 py-2">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-block px-4 py-2">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-3 px-4 py-2 last:border-r-0 border-solid border-r border-black h-full flex items-center">
          <div className="flex w-full justify-between items-center h-full">
            <div className="">
              <div className="flex items-center gap-1">
                EN{" "}
                <span className="border-t-4 border-l-4 border-r-4 border-solid border-l-transparent border-r-transparent border-t-black"></span>
              </div>
            </div>
            <div className="">
              <button type="button">
                <span className="block w-6 my-2 h-0.5 bg-gray-500"></span>
                <span className="block w-6 my-2 h-0.5 bg-gray-500"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2 px-4 py-2 h-full flex items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                clipRule="evenodd"
              />
            </svg>
            $<span>2023</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
