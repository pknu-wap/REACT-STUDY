import React, { useEffect, useState } from "react";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../.././store/TodoContext";
import S from "./styled";
import { setColor } from "../../libs/utils/setColor";
import { colors } from "../../store/colors";

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const [randomColor, setRandomColor] = useState("");
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  useEffect(() => {
    setRandomColor(setColor(colors));
  }, []);

  return (
    <S.TodoItemBlock>
      <S.CheckCircle done={done} onClick={onToggle} color={randomColor}>
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
