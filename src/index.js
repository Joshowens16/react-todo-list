import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import SingleTodo from "./components/SingleTodo";
import FilterTodo from "./components/FilterTodo";

document.body.style = "background: #1E90FF";

const dummyToDo = [
  "Wallow in self pity",
  "Stare into the abyss",
  "Solve world hunger (tell no one)",
  "Jazzercize",
  "Dinner with me (I CAN'T cancel that again)",
  "Wrestle with my self-loathing",
];
const list = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid black",
  width: "400px",
  height: "auto",
  padding: "10px",
  fontFamily: "'Roboto', arial",
  backgroundColor: "#FFF8DC",
  borderRadius: "4px",
};
const todoApp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "105px",
  fontFamily: "'Roboto', arial",
  letterSpacing: "6px",
};
const header = {
  color: "white",
  margin: "20px",
  fontSize: "36px",
};
const Main = () => {
  const [todos] = useState(dummyToDo);
  const [filter, setFilter] = useState("all");
  return (
    <div style={todoApp}>
      <header style={header}>Todo-List</header>
      <div style={list}>
        <div>
          {todos.map((todo) => (
            <SingleTodo key={todo} todo={todo} filter={filter} />
          ))}
        </div>
        <FilterTodo filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main />);
