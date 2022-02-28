import React from "react";
import "./style.scss";
const ToDoList = (props) => {
  const { todos, onToDoClick } = props;
  console.log(todos);
  const handleClick = (todo) => {
    if (!onToDoClick) return;
    onToDoClick(todo);
  };
  return (
    <div>
      <h1>TodoLisst</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => {
              handleClick(todo);
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
