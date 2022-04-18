import React from "react";

const CardProperty = ({ shadow, anim, pad, spacing, ...props }) => {
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
          src="https://user-images.githubusercontent.com/37651620/163862232-d798701f-c4d7-4001-ae2e-1be1be0206f7.png"
          alt="Avatar"
          style={{ width: spacing === "fit" ? "100%" : "50%" }}
        />
        <div
          style={{
            padding: pad === "big" ? "2px 16px" : "1px 10px",
          }}
        >
          <h4>
            <b>Who is this?</b>
          </h4>
          <p>Someone</p>
        </div>
      </div>
    </>
  );
};

export { CardProperty };
