import React from "react";
import background from "../assets/painting.jpg";

export const About = () => {
  return (
    <div id="About">
      <div className="flex flex-wrap md:flex-nowrap w-full min-h-screen">
        <section
          id="Home"
          className="w-full md:w-6/12 text-black bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
          }}
        />
        <div className="w-full md:w-6/12 p-4">
          <h1 className="text-4xl font-bold">Acerca de</h1>
          <p className="text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
          </p>
        </div>
      </div>
    </div>
  );
};
