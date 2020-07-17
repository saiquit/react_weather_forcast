import React from "react";

function Area({ country, city }) {
  return (
    <div className="d-flex flex-column justify-center align-items-end mx-4 ">
      <h3>{country}</h3>
      <h5>{city}</h5>
    </div>
  );
}

export default Area;
