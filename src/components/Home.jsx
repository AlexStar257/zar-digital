import React from "react";
import "animate.css";
import background from "../assets/forest.jpg";

export const Home = () => {
  return (
    <section
      id="Home"
      className="flex flex-col md: min-h-screen text-black bg-cover bg-center bg-no-repeat relative z-10"
      style={{
        backgroundImage: `url(${background})`,
      }}
    ></section>
  );
};
