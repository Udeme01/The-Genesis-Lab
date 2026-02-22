import React from "react";

import img3 from "/images/sitonbooks.webp";
import img4 from "/images/atwork.avif";

const IllustrationImage = () => {
  return (
    <section className="w-full h-full lg:min-h-screen">
        <img
          src={img3}
          alt="illustration image 3"
          className="w-full h-full object-cover hidden lg:block"
        />
        <img
          src={img4}
          alt="illustration image 4"
          className="w-full h-full object-cover lg:hidden"
        />
    </section>
  );
};

export default IllustrationImage;
