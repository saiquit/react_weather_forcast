import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

function CurrentWeather({ weather }) {
  return (
    <Row
      style={{ height: "100%" }}
      className="justify-content-center d-flex align-items-center"
    >
      {weather?.condition ? (
        <>
          <Col md="6" className="">
            <img
              src={`http:${weather.condition.icon}`}
              alt="icon"
              height="120px"
              width="120px"
            />
          </Col>
          <Col md="6">
            <p>Today</p>
            <h3>{weather?.temp_c}°C</h3>
          </Col>{" "}
        </>
      ) : (
        <Spinner animation="border" />
      )}
    </Row>
  );
}

export default CurrentWeather;
