import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/ToDoHead/index";
import TodoTemplate from "./components/ToDoTemplate/index";
import TodoList from "./components/ToDoList/index";
import TodoCreate from "./components/ToDoCreate/index";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  const [num, setNum] = useState();

  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList setNum={setNum} />
        <TodoCreate num={num} />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
