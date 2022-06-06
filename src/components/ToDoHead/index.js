import React from "react";
import { useTodoState } from "../.././store/TodoContext";
import S from "./styled";

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
