import React from "react";
import logo from "../assets/logo-zar-digital-raz-05.svg";

export const Navbar = () => {
  const scrollToHome = () => {
    const contactElement = document.getElementById("Home");
    contactElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const contactElement = document.getElementById("About");
    contactElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactElement = document.getElementById("Contact");
    contactElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav id="Navbar" className="bg-white p-4 border rounded-md shadow-lg">
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo */}
        <img src={logo} alt="" className="w-52" />

        {/* Menú de navegación */}
        <ul className="flex space-x-4">
          <li>
            <button
              href="#Home"
              onClick={scrollToHome}
              className="text-black hover:text-gray-300"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              href="#About"
              onClick={scrollToAbout}
              className="text-black hover:text-gray-300"
            >
              Acerca de
            </button>
          </li>
          <li>
            <button
              href="#Contacto"
              onClick={scrollToContact}
              className="text-black hover:text-gray-300"
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
