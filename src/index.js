import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import SingleTodo from "./components/SingleTodo";
import FilterTodo from "./components/FilterTodo";

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
};
const header = {
  letterSpacing: "6px",
};
const Main = () => {
  const [todos] = useState(dummyToDo);
  const [filter, setFilter] = useState("all");
  return (
    <div style={list}>
      <header style={header}>Todo-List</header>
      <div>
        {todos.map((todo) => (
          <SingleTodo key={todo} todo={todo} filter={filter} />
        ))}
      </div>
      <FilterTodo filter={filter} setFilter={setFilter} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main />);
