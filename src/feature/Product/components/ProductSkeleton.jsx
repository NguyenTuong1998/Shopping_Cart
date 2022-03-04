import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

const ProductSkeleton = ({ length = 6 }) => {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSkeleton;
