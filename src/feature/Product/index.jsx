import { Box } from "@material-ui/core";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";

const ProductFeature = () => {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </Box>
  );
};

export default ProductFeature;
