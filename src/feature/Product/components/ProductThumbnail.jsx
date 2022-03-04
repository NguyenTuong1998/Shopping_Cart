import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constant";
import React from "react";
import { Box } from "@material-ui/core";

const ProductThumbnail = ({ product }) => {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
};

export default ProductThumbnail;
