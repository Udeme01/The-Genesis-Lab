import React from "react";
import img1 from "/images/learn.webp";
import img2 from "/images/plushylady.webp";
import img3 from "/images/sitonbooks.webp";
import img4 from "/images/atwork.avif";

const IllustrationImage = () => {
  return (
    <section className="w-full h-full">
      <img
        src={img2}
        alt="illustration image"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default IllustrationImage;
