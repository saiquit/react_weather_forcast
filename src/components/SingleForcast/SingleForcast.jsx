import React from "react";
import { Row } from "react-bootstrap";

function SingleForcast({ date, day }) {
  const { avgtemp_c, condition } = day || {};
  const weekend = new Date(date).toString().split(" ")[0];
  return (
    <Row className="d-flex flex-column align-items-center">
      <p>{weekend}</p>
      <div>
        <img src={`http:${condition?.icon}`} alt="" />
      </div>
      <h3>{avgtemp_c}°C</h3>
    </Row>
  );
}

export default SingleForcast;
