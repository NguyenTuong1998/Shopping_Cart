import React from "react";
import { Paper } from "@material-ui/core";
import DOMPurify from "dompurify";
const ProductDesciption = ({ product }) => {
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={2} style={{ padding: "15px" }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
};

export default ProductDesciption;
