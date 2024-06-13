// import React, { useEffect, useState } from "react";

// stylesheet
import "./Preloader.css";

// animate.css
import "animate.css";

// image
import preloadImage from "../../../img/single-logo.png";
const Preloader = () => {
  return (
    <div className="preload">
      <img
        className="animate__animated animate__pulse animate__infinite-infinite"
        src={preloadImage}
        alt=""
      />
    </div>
  );
};

export default Preloader;
