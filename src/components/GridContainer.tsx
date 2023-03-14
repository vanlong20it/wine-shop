import React from "react";

const GridContainer = () => {
  return (
    <div className="border border-black border-solid bg-gradient-to-br from-pink-100 to-pink-200 max-w-7xl">
      <div className="grid grid-cols-12 border-b border-solid border-black">
        <div className="col-span-7 grid grid-cols-7">
          <div className="col-span-1 border-r border-solid border-black">
            <div className="p-5">Logo</div>
          </div>
          <div className="col-span-6 border-r border-solid border-black flex items-center justify-end">
            <nav>
              <ul className="flex items-center">
                <li>
                  <a className="inline-block px-4 py-2" href="#about-us">
                    About us
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-2" href="#wines">
                    Wines
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-2" href="#our-story">
                    Our story
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-2" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-span-5 grid grid-cols-5">
          <div className="col-span-3 border-solid border-black border-r place-items-center flex items-center">
            <div className="flex justify-between items-center flex-1">
              <div className="p-4">
                <button>EN</button>
              </div>
              <div className="p-4">
                <div className="w-4 h-0.5 bg-black my-1"></div>
                <div className="w-4 h-0.5 bg-black my-1"></div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <div className="p-4 flex-1">
              <p>$ 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-7 border-r border-solid border-black">
          <div className="p-20 border-b border-solid border-black">
            <h1 className="text-8xl tracking-tighter font-hero">
              Just relax, and go with the flow
            </h1>
            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              eaque illum facere. Sed, rem! Voluptatibus, quo?
            </p>
            <div className="mt-10">
              <button
                type="button"
                className="rounded-[50%] border-solid border-black border px-10 py-3"
              >
                View more
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-7">
              <div className="col-span-2 p-5">
                <img
                  width={200}
                  height={150}
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Come to the party"
                  className="max-w-full w-full h-auto object-contain"
                />
              </div>
              <div className="col-span-3 p-5 flex items-start flex-col justify-center">
                <h3 className="font-bold">Come to the wine-tasting</h3>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur elit.
                </p>
              </div>
              <div className="col-span-2 flex justify-center items-center p-5">
                <button
                  type="button"
                  className="flex items-center justify-center px-2 aspect-square rounded-full border border-solid border-black -rotate-[30deg]"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 relative grid grid-cols-5">
          <div className="absolute top-0 left-0 w-full h-full">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridContainer;
