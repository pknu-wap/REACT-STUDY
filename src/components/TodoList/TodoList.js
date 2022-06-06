import React from "react";
import S from "./styled";
import { useTodoState } from "../../TodoContext";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
    const todos = useTodoState();

    return (
        <S.TodoListBlock>
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
            ))}
        </S.TodoListBlock>
    );
}

export default TodoList;
