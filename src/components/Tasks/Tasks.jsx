import React, { useState } from "react";
import { Form, ListGroup, Col } from "react-bootstrap";

export default function Tasks() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const addTodo = async (e) => {
    setValue(e.target.value);
    if (e.which === 13 && value !== "") {
      setTodos([value, ...todos]);
      setValue("");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Form.Group>
        <Form.Control
          value={value}
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={addTodo}
        />
      </Form.Group>
      <ListGroup
        hidden={!todos.length && true}
        style={{
          height: "350px",
          minWidth: "20rem",
          overflowY: "hidden",
          position: "absolute",
        }}
      >
        {todos.map((todo, idx) => (
          <ListGroup.Item
            key={idx}
            style={{ width: "100%", border: "none" }}
            className="d-flex p-0 m-0"
          >
            <Col sm={4} className="bg-primary p-2 text-light">
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </Col>
            <Col className="p-2">{todo}</Col>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
