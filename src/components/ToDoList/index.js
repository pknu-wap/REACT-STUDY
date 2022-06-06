import React from "react";
import { useTodoState } from "../../TodoContext";
import TodoItem from "../ToDoItem/index";
import S from "./styled";

function TodoList() {
  const todos = useTodoState();

  return (
    <S.TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </S.TodoListBlock>
  );
}

export default TodoList;
