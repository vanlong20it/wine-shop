import React, { useEffect, useState } from "react";
import "../assets/styles/change-background.css";
const ChangeBackground = () => {
  useEffect(() => {
    const bg = document.getElementById("bg");
    if (!bg) return;
    bg.addEventListener("click", function (event) {
      const x = event.clientX;
      const y = event.clientY;

      const circle = document.createElement("span");
      circle.classList.add("circle");
      circle.style.top = y + "px";
      circle.style.left = x + "px";

      this.appendChild(circle);

      setTimeout(() => circle.remove(), 500);
    });
  }, []);
  return <div id="bg"></div>;
};

export default ChangeBackground;
