import React from "react";
import logo from "../assets/logo-zar-digital-raz-05.svg";

export const Footer = () => {
  return (
    <footer id="Footer" className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              src={logo}
              className="h-24 me-3 bg-white"
              alt="FlowBite Logo"
            />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              ZAR Digital
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
