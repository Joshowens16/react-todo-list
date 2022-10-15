import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import SingleTodo from "./components/SingleTodo";

const dummyToDo = ["Feed dog", "Take out trash", "Make a React app"];
const list = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid black",
  width: "200px",
  padding: "10px",
  fontFamily: "'Roboto', arial",
};

const Main = () => {
  const [todos, setTodos] = useState(dummyToDo);
  return (
    <div style={list}>
      <header>Todos</header>
      <div>
        {todos.map((todo) => (
          <SingleTodo key={todo} todo={todo} />
        ))}
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main />);
