import React from "react";
import { useTodoState } from "../../TodoContext";
import TodoItem from "../ToDoItem/index";
import S from "./styled";

function TodoList() {
    const todos = useTodoState();
    console.log(todos);
    return (
        <S.TodoListBlock>
            {todos
                .sort((a, b) => {
                    if (a === b) {
                        return a.text - b.text;
                    } else {
                        return a.priority - b.priority;
                    }
                })
                .map((todo) => (
                    <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} priority={todo.priority} />
                ))}
        </S.TodoListBlock>
    );
}

export default TodoList;
