import React from "react";

const InputProperty = ({ color, size, ...props }) => {
  return (
    <input
      {...props}
      style={{
        fontSize: size === "small" ? 10 : 60,
        backgroundColor: color === "success" ? "limegreen" : "gray",
      }}
    />
  );
};

export { InputProperty };
