import React from "react";

const InputProperty = ({ size, ...props }) => {
  return (
    <input
      {...props}
      style={{
        fontSize: size === "small" ? 10 : 60,
      }}
    />
  );
};

export { InputProperty };
