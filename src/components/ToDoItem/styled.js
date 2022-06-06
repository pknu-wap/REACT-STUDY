import styled, { css } from "styled-components";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const color = ["#ffa500", "#fa8072", "#adff2f", "#7fffd4"];

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${({ done }) =>
    done
      ? css`
          border: 1px solid ${color[Math.floor(Math.random()*4)]} ;
          color: ${color[Math.floor(Math.random()*4)]} ;
        `
      : css`
          :hover {
            border: 1px solid #38d9a9;
          }
        `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const S = {
  Remove,
  TodoItemBlock,
  CheckCircle,
  Text,
};

export default S;
