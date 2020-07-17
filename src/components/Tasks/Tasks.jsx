import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";

export default function Tasks() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const addTodo = async (e) => {
    setValue(e.target.value);
    if (e.which === 13) {
      setTodos([...todos, value]);
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
        style={{ position: "absolute" }}
        hidden={!todos.length && true}
      >
        {todos.map((todo, idx) => (
          <ListGroup.Item key={idx}>{todo}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
