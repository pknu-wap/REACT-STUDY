import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/ToDoHead/index";
import TodoTemplate from "./components/ToDoTemplate/index";
import TodoList from "./components/ToDoList/index";
import TodoCreate from "./components/ToDoCreate/index";
import { TodoProvider } from "././store/TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
