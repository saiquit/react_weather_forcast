import React, { useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";

import PopoverEle from "../Popover/Popover";

function CurrentWeather({ weather }) {
  const [show, setShow] = useState(false);

  return (
    <Row
      style={{ height: "100%" }}
      className="justify-content-center d-flex align-items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {weather?.condition ? (
        <>
          {show ? (
            <PopoverEle
              wind={weather?.wind_kph}
              text={weather?.condition?.text}
              precipition={weather?.precip_in}
              pressure={weather?.pressure_in}
              humidity={weather?.humidity}
            />
          ) : null}
          <Col md="6" className="">
            <img
              src={`https:${weather.condition.icon}`}
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
