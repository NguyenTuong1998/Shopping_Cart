import React from "react";
import classnames from "classnames";
import "./style.scss";

const TodoList = ({ toDoList, onToDoClick }) => {
  const handleToDoClick = (todo, idx) => {
    if (!onToDoClick) return;
    onToDoClick(todo, idx);
  };
  return (
    <ul className="todo-list">
      {toDoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleToDoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
