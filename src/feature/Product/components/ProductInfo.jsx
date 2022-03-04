import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { formatPrice } from "util";
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  name: {
    textTransform: "uppercase",
  },
  description: { margin: theme.spacing(2, 0) },
  priceBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
  },
  salePrice: {
    fontSize: theme.typography.h5.fontSize,
    marginRight: theme.spacing(3),
    fontWeight: "bold",
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: "line-through",
  },
}));
const ProductInfo = ({ product = null }) => {
  const classes = useStyle();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;
  return (
    <Box className={classes.root}>
      <Typography className={classes.name} component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box className={classes.salePrice} component="span">
          {formatPrice(salePrice)}
        </Box>
        <Box className={classes.originalPrice} component="span">
          {formatPrice(originalPrice)}
        </Box>
        <Box component="span">
          {promotionPercent > 0 ? ` -${promotionPercent}%` : ""}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfo;
