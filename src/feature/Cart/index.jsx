import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constant";
import { removeFromCart } from "feature/Cart/CartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItemCountSelector,
  cartItemSelector,
  cartTotalSelector,
} from "./Selectors";
const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    flexGrow: 1,
  },

  image: {
    width: 128,
    height: 128,
    marginRight: theme.spacing(4),
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  left: {
    display: "flex",
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    padding: theme.spacing(1.5),
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
  },
  paper: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    Width: "100%",
  },
  checkout: {
    width: "100%",
    marginTop: theme.spacing(4),
  },
  notitem: {
    position: "absolute",
    justifyContent: "center",
    top: "30%",
    left: "40%",
  },
}));
const CartFeature = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const cartCount = useSelector(cartItemCountSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const product = useSelector(cartItemSelector);
  console.log(product);

  const handleRemove = (idx) => {
    console.log(product[idx].id);
    const action = removeFromCart(product[idx].id);
    dispatch(action);
  };
  return (
    <>
      {cartCount === 0 ? (
        <Box className={classes.notitem}>
          <Typography>Hiện chưa có sản phẩn nào !!</Typography>
        </Box>
      ) : (
        <Box className={classes.root}>
          <Container>
            <Box>
              <Typography style={{}}>
                GIỎ HÀNG: ({cartCount} sản phẩm)
              </Typography>
            </Box>
          </Container>

          <Box>
            <Container>
              <Paper elevation={0}>
                <Grid container>
                  <Grid
                    item
                    className={classes.left}
                    sm={12}
                    xs={12}
                    md={9}
                    lg={9}
                  >
                    <Grid xs={12}>
                      {product.map((product, idx) => (
                        <Paper className={classes.paper} key={product.id}>
                          <Grid container>
                            <Grid item>
                              <ButtonBase className={classes.image}>
                                <img
                                  className={classes.img}
                                  alt="complex"
                                  src={
                                    product.product.thumbnail
                                      ? `${STATIC_HOST}${product.product.thumbnail.url}`
                                      : `${THUMBNAIL_PLACEHOLDER}`
                                  }
                                />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                spacing={2}
                              >
                                <Grid item xs>
                                  <Typography
                                    style={{ textTransform: "uppercase" }}
                                    gutterBottom
                                    variant="subtitle1"
                                  >
                                    {product.product.name}
                                  </Typography>

                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                  >
                                    ID: {product.id}
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography
                                    variant="body2"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      handleRemove(idx);
                                    }}
                                  >
                                    Remove
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle1">
                                  {new Intl.NumberFormat("vn-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  }).format(product.product.salePrice)}
                                </Typography>
                                <Typography variant="subtitle1">
                                  SL: {product.quantity}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Paper>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    className={classes.right}
                    sm={12}
                    xs={12}
                    md={3}
                    lg={3}
                  >
                    <Box className={classes.total}>
                      <Typography>Thành tiền:</Typography>
                      <Typography>
                        {new Intl.NumberFormat("vn-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(cartTotal)}
                      </Typography>
                    </Box>

                    <Button
                      className={classes.checkout}
                      variant="contained"
                      color="primary"
                    >
                      THANH TOÁN
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CartFeature;
