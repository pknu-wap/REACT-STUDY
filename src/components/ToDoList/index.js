import React from "react";
import { useTodoState } from "../../TodoContext";
import TodoItem from "../ToDoItem/index";
import S from "./styled";

function TodoList({ setNum }) {
  const todos = useTodoState();
  setNum(todos.length);

  return (
    <S.TodoListBlock>
      {todos
        .sort((a, b) => {
          if (a === b) {
            return a.text - b.text;
          } else {
            return a.num - b.num;
          }
        })
        .map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            num={todo.num}
          />
        ))}
    </S.TodoListBlock>
  );
}

export default TodoList;
