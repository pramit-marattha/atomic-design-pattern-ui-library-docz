import React from "react";

const LinkProperty = ({ size, ...props }) => {
  return (
    <a
      {...props}
      style={{
        fontSize: size === "small" ? 10 : 60,
      }}
    ></a>
  );
};

export { LinkProperty };
