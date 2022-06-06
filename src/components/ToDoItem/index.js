import React from "react";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../../TodoContext";
import S from "./styled";

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <S.TodoItemBlock>
      <S.CheckCircle done={done} onClick={onToggle}>
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
