import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead/TodoHead";
import TodoTemplate from "./components/TodoTemplate/TodoTemplate";
import TodoList from "./components/TodoList/TodoList";
import TodoCreate from "./components/TodoCreate/TodoCreate";
import { TodoProvider } from "./TodoContext";

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
