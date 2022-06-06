import React from "react";
import S from "./styled";

function TodoTemplate({ children }) {
  return <S.TodoTemplateBlock>{children}</S.TodoTemplateBlock>;
}

export default TodoTemplate;
