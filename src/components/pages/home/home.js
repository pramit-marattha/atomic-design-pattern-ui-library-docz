import React from "react";
import HeroProperty from "../../molecules/hero/hero.js";

const HomeProperty = ({ ...props }) => {
  return (
    <>
      <div
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        <h1>Hello From Home Page</h1>
        <h2>Awesome Home Page!</h2>
        <HeroProperty />
      </div>
    </>
  );
};

export { HomeProperty };
