import { Box, Typography } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constant/index";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatPrice } from "util";

const Product = ({ product }) => {
  const history = useHistory();

  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    // navigate to detail page /products/:productId
    history.push(`/products/${product.id}`);
  };
  return (
    <Box padding={1} onClick={handleClick}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="15px" fontWeight="bold" mr={1}>
          {formatPrice(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ``}
      </Typography>
    </Box>
  );
};

export default Product;
