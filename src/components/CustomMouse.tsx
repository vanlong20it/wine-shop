import React, { useEffect, useState } from "react";

const CustomMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const customMouse = document.getElementById("custom-mouse");
    // if (customMouse) {
    //   const handleCustomMouse = (e: MouseEvent) => {
    //     setPosition({ x: e.clientX, y: e.clientY });
    //   };
    //   window.addEventListener("mousemove", handleCustomMouse);
    //   return () => window.removeEventListener("mousemove", handleCustomMouse);
    // }
    customMouse?.animate({
      
    })
  });

  return (
    <div
      id="custom-mouse"
      className="cursor-none fixed top-0 left-0 w-5 h-5 rounded-full bg-white linear"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    ></div>
  );
};

export default CustomMouse;
