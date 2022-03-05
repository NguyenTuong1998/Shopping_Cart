import {
  Box,
  Container,
  Grid,
  Paper,
  makeStyles,
  LinearProgress,
} from "@material-ui/core";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "feature/Product/hooks/UseProductDetail";
import ProductInfo from "../components/ProductInfo";
import AddtoCartForm from "../components/AddtoCartForm";
import ProductMenu from "../components/ProductMenu";
import { Route, Switch } from "react-router-dom";
import ProductDesciption from "feature/Product/components/ProductDesciption";
import ProductAdditional from "feature/Product/components/ProductAdditional";
import ProductReviews from "feature/Product/components/ProductReviews";
import { useDispatch } from "react-redux";
import { addToCart } from "feature/Cart/CartSlice";

const useStyle = makeStyles((theme) => ({
  root: { paddingBottom: theme.spacing(4) },
  left: {
    width: "400px",
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: "1 1 0",
    padding: theme.spacing(1.5),
  },
  loading: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
}));
const DetailPage = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const {
    params: { productId },
    url,
  } = useRouteMatch();
  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });
    console.log(action);
    dispatch(action);
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={2}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddtoCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />

        <Switch>
          <Route exact path={url}>
            <ProductDesciption product={product} />
          </Route>
          <Route exact path={`${url}/additional`}>
            <ProductAdditional product={product} />
          </Route>
          <Route exact path={`${url}/reviews`}>
            <ProductReviews product={product} />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
};

export default DetailPage;
