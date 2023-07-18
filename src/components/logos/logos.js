import React from "react";

const Logos = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "-20px",
        marginTop: "-50px",
        marginBottom: "-10px",
      }}
    >
      // <img
      //   alt="logo"
      //   className="icon-kasu"
      //   src={`icons/logos.png`}
      //   style={{ height: "110px", width: "110px" }}
      // />
      <img
        alt="logo"
        className="icon-group-9"
        src={`icons/SE_logos.png`}
        style={{
          height: "100px",
          width: "100px",
          marginTop: "15px",
          marginBottom: "-20px",
        }}
      />
    </div>
  );
};

export default Logos;
