import React from "react";

const ButtonsProperty = ({ color, size, roundness, ...props }) => {
  return (
    <button
      {...props}
      style={{
        fontSize: size === "small" ? 10 : 60,
        backgroundColor: color === "success" ? "limegreen" : "purple",
        borderRadius: roundness === "small" ? "10%" : "0",
      }}
    />
  );
};

export { ButtonsProperty };
