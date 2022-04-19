import React from "react";

const HeaderProperty = ({ shadow, anim, sizing, color, spacing, ...props }) => {
  return (
    <>
      <h4
        style={{
          fontSize: sizing === "small" ? "10px" : "60px",
          color: color === "success" ? "limegreen" : "purple",
        }}
      >
        <b>This is header</b>
      </h4>
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
          src="https://user-images.githubusercontent.com/37651620/163938571-5bba8d81-8495-45f7-b7ad-ae224286808a.png"
          alt="Avatar"
          style={{ width: spacing === "small" ? "5%" : "50%" }}
        />
      </div>
    </>
  );
};

export { HeaderProperty };
