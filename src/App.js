import PageNotFound from "components/Not Found";
import ProductFeature from "feature/Product";
import CartFeature from "feature/Cart/index";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CounterFeature from "./feature/Counter";
import ToDoFeature from "./feature/Todo";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* <Redirect from="home" to="/" exact /> */}
        <Route path="/" component={ProductFeature} exact />
        <Route path="/counter" component={CounterFeature} />
        <Route path="/todos" component={ToDoFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
