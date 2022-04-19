import React from "react";

const HeroProperty = ({ shadow, anim, spacing, ...props }) => {
  return (
    <>
      <div
        style={{
          boxShadow:
            shadow === "light"
              ? "0 4px 8px 0 rgba(0, 5, 19, 0.2)"
              : "0 10px 28px 0 rgba(20, 19, 19, 0.2)",
          transition: anim === "medium" ? "0.3s" : "0.5s",
        }}
      >
        <img
          src="https://user-images.githubusercontent.com/37651620/163867736-fb29b955-ddc5-41cb-ba3a-406d05366c43.png"
          alt="Avatar"
          style={{ width: spacing === "fit" ? "100%" : "50%" }}
        />
      </div>
    </>
  );
};

export default HeroProperty;
