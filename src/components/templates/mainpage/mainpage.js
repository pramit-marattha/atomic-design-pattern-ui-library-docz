import React from "react";

const MainpageProperty = ({ shadow, anim, spacing, ...props }) => {
  return (
    <>
      <div
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          backgroundColor: "#8661d1",
        }}
      >
        <h1>This is an template of Home page</h1>
        <h2>Awesome Template Mainpage!</h2>
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
            src="https://user-images.githubusercontent.com/37651620/163943557-0afd3b01-afbc-4023-a91d-f77629b9beee.png"
            alt="Avatar"
            style={{ width: spacing === "fit" ? "100%" : "50%" }}
          />
        </div>
      </div>
    </>
  );
};

export { MainpageProperty };
