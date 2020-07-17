import React, { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";
import "./clock.scss";

function Clock() {
  const dateObj = new Date();

  const [dateClock, setDateClock] = useState({
    date: dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    time: dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  useEffect(() => {
    setInterval(() => {
      setDateClock({
        date: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      });
    }, 1000);
  }, [dateClock]);

  let mainTime = dateClock.time.split(" ")[0];
  let timeFormat = dateClock.time.split(" ")[1];

  return (
    <Container fluid="md">
      <Col className="d-flex flex-column justify-content-center align-items-start">
        <h1 className="time">
          {mainTime}
          <span className="timeFormat">{timeFormat}</span>
        </h1>
        <h4 className="dates">{dateClock.date}</h4>
      </Col>
    </Container>
  );
}

export default Clock;
