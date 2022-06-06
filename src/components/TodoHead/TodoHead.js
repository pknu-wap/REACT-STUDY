import React from "react";
import S from "./styled";
import { useTodoState } from "../../TodoContext";

function TodoHead() {
    const todos = useTodoState();
    const undoTasks = todos.filter((todo) => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

    return (
        <S.TodoHeadBlock>
            <h1>{dayName}</h1>
            <div className="day">{dateString}</div>
            <div className="tasks-left">{`할 일 ${undoTasks.length}개 남음`}</div>
        </S.TodoHeadBlock>
    );
}

export default TodoHead;
