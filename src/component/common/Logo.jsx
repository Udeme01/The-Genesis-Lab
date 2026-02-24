import React from "react";
import logo from "/images/brand/thegenlab.png";

const Logo = () => {
  return (
    <section className="w-[80%] mx-auto">
      <h1 className="text-4xl xl:text-6xl tracking-tighter text-green-100 font-bold z-50">
        <img src={logo} alt="The Genesis Lab logo" className="absolute top-0 z-50 left-0 w-56 md:w-80 h-fit" />
      </h1>
    </section>
  );
};

export default Logo;
