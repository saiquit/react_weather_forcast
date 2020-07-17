import React from "react";
import SingleForcast from "../SingleForcast/SingleForcast";
import { Spinner } from "react-bootstrap";

function Forcast({ forecast }) {
  return (
    <div
      style={{ height: "100%" }}
      className="d-flex justify-content-around align-items-center"
    >
      {forecast ? (
        forecast.map(({ ...props }, idx) => {
          return (
            <div key={idx}>
              <SingleForcast {...props} />
            </div>
          );
        })
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
}

export default Forcast;
