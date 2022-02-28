import productApi from "api/productApi";
import PageNotFound from "components/Not Found";
import ProductFeature from "feature/Product";
import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CounterFeature from "./feature/Counter";
import ToDoFeature from "./feature/Todo";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log({ productList });
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Redirect from="home" to="/" />
        <Route path="/" component={ToDoFeature} exact />
        <Route path="/counter" component={CounterFeature} />
        <Route path="/todos" component={ToDoFeature} />
        <Route path="/products" component={ProductFeature} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
