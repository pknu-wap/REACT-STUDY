import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useTimer from "../hooks/useTimer";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead() {
    const todos = useTodoState();
    const undoTasks = todos.filter((todo) => !todo.done);
    // const [dayTime, setDayTime] = useState(Date.now());
    const [getDayTime, getDayName, getDate] = useTimer(Date.now());

    // useEffect(() => {
    //     setInterval(() => setDayTime(Date.now()), 1000);
    //     return () => {
    //         clearInterval();
    //     };
    // }, []);

    // const today = new Date();
    // const dateString = today.toLocaleDateString("ko-KR", {
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric",
    // });
    // const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
    // const getDayTime = () => new Date(dayTime).toLocaleTimeString("ko-KR");

    return (
        <TodoHeadBlock>
            <h1>{getDate()}</h1>
            <div className="day">{getDayName()}</div>
            <div className="day">{getDayTime()}</div>
            <div className="tasks-left">{undoTasks.length ? `할 일 ${undoTasks.length}개 남음` : `다 끝냈다~!`}</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
