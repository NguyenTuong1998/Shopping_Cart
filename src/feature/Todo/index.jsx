import React from "react";
import { Switch, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
const ToDoFeature = () => {
  return (
    <div>
      <Switch>
        <Route path="/todos" component={ListPage} />
      </Switch>
    </div>
  );
};

export default ToDoFeature;
