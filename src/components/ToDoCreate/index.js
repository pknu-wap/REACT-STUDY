import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import S from "./styled";
import { useTodoDispatch, useTodoNextId } from "../../TodoContext";
import { getRandom } from "../../utils/getRandom";

function TodoCreate({ num }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
        num: getRandom(1, num),
      },
    });
    setValue("");
    setOpen(false);
    nextId.current++;
  };

  return (
    <>
      {open && (
        <S.InsertFormPositioner>
          <S.InsertForm onSubmit={onSubmit}>
            <S.Input
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
          </S.InsertForm>
        </S.InsertFormPositioner>
      )}
      <S.CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </S.CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
