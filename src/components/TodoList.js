import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";
import style from "./style-components";

const TodoListBlock = style.TodoListBlock();

function TodoList() {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
