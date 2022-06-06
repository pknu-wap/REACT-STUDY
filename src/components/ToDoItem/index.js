import React from "react";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../../TodoContext";
import S from "./styled";

const getRandomColor = () => {
    const colors = ["#ffa500", "#fa8072", "#adff2f", "#7fffd4"];
    const randomNumber = Math.floor(Math.random() * 4);
    return colors[randomNumber];
};

function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: "TOGGLE", id });
    const onRemove = () => dispatch({ type: "REMOVE", id });

    return (
        <S.TodoItemBlock>
            <S.CheckCircle done={done} onClick={onToggle} color={getRandomColor()}>
                {done && <MdDone />}
            </S.CheckCircle>
            <S.Text done={done}>{text}</S.Text>
            <S.Remove onClick={onRemove}>
                <MdDelete />
            </S.Remove>
        </S.TodoItemBlock>
    );
}

export default React.memo(TodoItem);
