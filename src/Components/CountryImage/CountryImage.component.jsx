import React from "react";

const CountryImage = ({ imageFlag, viewMore }) => {
  return (
    <img
      src={imageFlag}
      alt="country flag"
      style={{
        width: viewMore ? "600px" : "400px",
        height: viewMore ? "300px" : "200px",
      }}
    />
  );
};

export default CountryImage;
