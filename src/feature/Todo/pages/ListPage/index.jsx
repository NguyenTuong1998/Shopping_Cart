import ToDoForm from "feature/Todo/components/ToDoForm";
import React from "react";
import TodoList from "../../components/todoList";

const ListPage = () => {
  const toDoList = [
    {
      id: 1,
      title: "eat",
      status: "new",
    },
    {
      id: 2,
      title: "sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "play",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = React.useState(toDoList);
  const [filetedStatus, setfiletedStatus] = React.useState("all");

  const handleToDoClick = (todo, idx) => {
    // clone current array to the new one
    const newToDoList = [...todoList];

    // console.log(todo, idx);

    // toggle state
    newToDoList[idx] = {
      ...newToDoList[idx],
      status: newToDoList[idx].status === "new" ? "completed" : "new",
    };

    //update todolist

    setTodoList(newToDoList);
    console.log(newToDoList[idx]);
  };
  const handleShowAll = () => {
    setfiletedStatus("all");
  };
  const handleShowCompleted = () => {
    setfiletedStatus("completed");
  };
  const handleShowNew = () => {
    setfiletedStatus("new");
  };

  const renderFilteredToDoList = todoList.filter(
    (todo) => filetedStatus === "all" || filetedStatus === todo.status
  );

  const handleToDoOnSubmit = (value) => {
    const newToDo = {
      id: toDoList.length + 1,
      title: value.title,
      status: "new",
    };

    const newToDoList = [...toDoList, newToDo];

    setTodoList(newToDoList);
  };
  return (
    <div>
      <h3>What to do</h3>
      <ToDoForm onSubmit={handleToDoOnSubmit} />
      <h3>ToDo</h3>
      <TodoList
        toDoList={renderFilteredToDoList}
        onToDoClick={handleToDoClick}
      />
      <div>
        <button onClick={handleShowAll}>show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show new</button>
      </div>
    </div>
  );
};

export default ListPage;
