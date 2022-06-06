import React, { createContext, useContext, useReducer, useRef } from "react";
import { getRandom } from "./utils/getRandom";

const initialTodos = [
  {
    id: 1,
    text: "Create project",
    done: true,
    num: getRandom(1, 4),
  },
  {
    id: 2,
    text: "Style component",
    done: true,
    num: getRandom(1, 4),
  },
  {
    id: 3,
    text: "Make Context",
    done: false,
    num: getRandom(1, 4),
  },
  {
    id: 4,
    text: "Implement features",
    done: false,
    num: getRandom(1, 4),
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();
const ToDoRandomNumContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          <ToDoRandomNumContext.Provider
            value={getRandom(1, initialTodos.length)}
          >
            {children}
          </ToDoRandomNumContext.Provider>
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useToDoNum() {
  const context = useContext(ToDoRandomNumContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
