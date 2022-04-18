import React from "react";

const HeroProperty = ({ shadow, anim, spacing, ...props }) => {
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
      </div>
    </>
  );
};

export { HeroProperty };
