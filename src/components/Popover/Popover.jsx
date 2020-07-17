import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const PopoverEle = ({ text, wind, precipition, humidity }) => {
  return (
    <Card
      style={{
        width: "15rem",
        position: "absolute",
        top: "-150px",
        color: "black",
      }}
    >
      <Card.Header>
        <b>{text}</b>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Wind Speed : {wind} KmH</ListGroup.Item>
        <ListGroup.Item>Precipition : {precipition} Inch</ListGroup.Item>
        <ListGroup.Item>Humidity: {humidity} </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default PopoverEle;
